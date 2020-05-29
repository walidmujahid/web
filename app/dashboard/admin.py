'''
    Copyright (C) 2019 Gitcoin Core

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program. If not, see <http://www.gnu.org/licenses/>.

'''
# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from django.utils import timezone
from django.utils.html import format_html
from django.utils.safestring import mark_safe

from adminsortable2.admin import SortableInlineAdminMixin

from .models import (
    Activity, Answer, BlockedURLFilter, BlockedUser, Bounty, BountyEvent,
    BountyFulfillment, BountyInvites, BountySyncRequest, CoinRedemption,
    CoinRedemptionRequest, Coupon, Earning, FeedbackEntry, FundRequest,
    HackathonEvent, HackathonProject, HackathonRegistration, HackathonSponsor,
    HackathonWorkshop, Interest, Investigation, LabsResearch, ObjectView,
    Option, Poll, PortfolioItem, Profile, ProfileView, Question, SearchHistory,
    Sponsor, Tip, TipPayout, TokenApproval, TribeMember, UserAction,
    UserVerificationModel,
)


class BountyEventAdmin(admin.ModelAdmin):
    list_display = ['created_on', '__str__', 'event_type']
    raw_id_fields = ['bounty', 'created_by']


class BountyFulfillmentAdmin(admin.ModelAdmin):
    raw_id_fields = ['bounty', 'profile']
    readonly_fields = ['fulfiller_github_username']
    list_display = ['id', 'bounty', 'profile', 'fulfiller_github_url']
    search_fields = [
        'fulfiller_address', 'fulfiller_metadata', 'fulfiller_github_url'
    ]
    ordering = ['-id']


class GeneralAdmin(admin.ModelAdmin):
    ordering = ['-id']
    list_display = ['created_on', '__str__']


class ObjectViewAdmin(admin.ModelAdmin):
    ordering = ['-id']
    list_display = ['created_on', '__str__']
    raw_id_fields = ['viewer']

class InvestigationAdmin(admin.ModelAdmin):
    ordering = ['-id']
    list_display = ['created_on', '__str__']
    raw_id_fields = ['profile']


class TipPayoutAdmin(admin.ModelAdmin):
    ordering = ['-id']
    list_display = ['created_on', '__str__']
    raw_id_fields = ['profile', 'tip']

class BlockedUserAdmin(admin.ModelAdmin):
    ordering = ['-id']
    raw_id_fields = ['user']
    list_display = ['created_on', '__str__']


class ProfileViewAdmin(admin.ModelAdmin):
    ordering = ['-id']
    raw_id_fields = ['target', 'viewer']
    list_display = ['created_on', '__str__']


class PortfolioItemAdmin(admin.ModelAdmin):
    ordering = ['-id']
    list_display = ['created_on', '__str__']
    raw_id_fields = ['profile']


class EarningAdmin(admin.ModelAdmin):
    ordering = ['-id']
    list_display = ['created_on', '__str__']
    raw_id_fields = ['from_profile', 'to_profile', 'org_profile']
    search_fields = ['from_profile__handle', 'to_profile__handle']


class ActivityAdmin(admin.ModelAdmin):
    ordering = ['-id']
    raw_id_fields = ['bounty', 'profile', 'tip', 'kudos', 'grant', 'subscription', 'other_profile', 'kudos_transfer', 'hackathonevent', 'project']
    search_fields = ['metadata', 'activity_type', 'profile__handle']

    def response_change(self, request, obj):
        from django.shortcuts import redirect
        if "_make_nano_bounty" in request.POST:
            from townsquare.models import Offer
            obj = Offer.objects.create(
                created_by=obj.profile,
                title='Offer for x ETH',
                desc=obj.metadata.get('title', ''),
                key='top',
                url=obj.url,
                valid_from=timezone.now(),
                valid_to=timezone.now() + timezone.timedelta(days=1),
                public=False,
                )
            self.message_user(request, "Nano bounty made - You still need to make it public + edit amounts tho.")
            return redirect(obj.admin_url)
        return super().response_change(request, obj)


class TokenApprovalAdmin(admin.ModelAdmin):
    raw_id_fields = ['profile']
    ordering = ['-id']
    search_fields = ['profile__handle', 'token_name', 'token_address']


class BountyInvitesAdmin(admin.ModelAdmin):
    raw_id_fields = ['bounty', 'inviter', 'invitee']
    ordering = ['-id']
    readonly_fields = [ 'from_inviter', 'to_invitee']
    list_display = [ 'id', 'from_inviter', 'to_invitee', 'bounty_url']

    def bounty_url(self, obj):
        bounty = obj.bounty.first()
        return format_html("<a href={}>{}</a>", mark_safe(bounty.url), mark_safe(bounty.url))

    def from_inviter(self, obj):
        """Get the profile handle."""
        return "\n".join([p.username for p in obj.inviter.all()])

    def to_invitee(self, obj):
        """Get the profile handle."""
        return "\n".join([p.username for p in obj.invitee.all()])


class InterestAdmin(admin.ModelAdmin):
    raw_id_fields = ['profile']
    ordering = ['-id']
    search_fields = ['profile__handle']


class UserActionAdmin(admin.ModelAdmin):
    raw_id_fields = ['profile', 'user']
    search_fields = ['action', 'ip_address', 'metadata', 'profile__handle']
    ordering = ['-id']


class FeedbackAdmin(admin.ModelAdmin):
    search_fields = ['sender_profile','receiver_profile','bounty','feedbackType']
    ordering = ['-id']
    raw_id_fields = ['sender_profile', 'receiver_profile', 'bounty']

def recalculate_profile(modeladmin, request, queryset):
    for profile in queryset:
        profile.calculate_all()
        profile.save()
recalculate_profile.short_description = "Recalculate Profile Frontend Info"

class ProfileAdmin(admin.ModelAdmin):
    raw_id_fields = ['user', 'preferred_kudos_wallet', 'referrer', 'organizations_fk']
    ordering = ['-id']
    search_fields = ['email', 'data']
    list_display = ['handle', 'created_on']
    readonly_fields = ['active_bounties_list', 'user_sybil_info']
    actions = [recalculate_profile]

    def active_bounties_list(self, instance):
        interests = instance.active_bounties
        htmls = []
        for interest in interests:
            bounties = Bounty.objects.filter(interested=interest, current_bounty=True)
            for bounty in bounties:
                htmls.append(f"<a href='{bounty.url}'>{bounty.title_or_desc}</a>")
        html = format_html("<BR>".join(htmls))
        return html

    def user_sybil_info(self, instance):
        investigation = instance.investigations.filter(key='sybil').first()
        html = f"Refreshed {investigation.created_on.strftime('%m/%d/%Y')}<BR><BR>"
        html += investigation.description
        return format_html(html)
    user_sybil_info.allow_tags = True

    def response_change(self, request, obj):
        from django.shortcuts import redirect
        if "_recalc_flontend" in request.POST:
            obj.calculate_all()
            obj.save()
            self.message_user(request, "Recalc done")
            return redirect(obj.admin_url)
        if "_impersonate" in request.POST:
            return redirect(f"/impersonate/{obj.user.pk}/")
        return super().response_change(request, obj)

class VerificationAdmin(admin.ModelAdmin):
    raw_id_fields = ['user']


class SearchHistoryAdmin(admin.ModelAdmin):
    raw_id_fields = ['user']
    ordering = ['-id']
    search_fields = ['user', 'data']
    list_display = ['user', 'search_type', 'data']


class TipAdmin(admin.ModelAdmin):
    list_display = ['pk', 'created_on','sender_profile', 'recipient_profile', 'amount', 'tokenName', 'txid', 'receive_txid']
    raw_id_fields = ['recipient_profile', 'sender_profile']
    ordering = ['-id']
    readonly_fields = ['resend', 'claim']
    search_fields = [
        'tokenName', 'comments_public', 'comments_priv', 'from_name', 'username', 'network', 'github_url', 'url',
        'emails', 'from_address', 'receive_address', 'ip', 'metadata', 'txid', 'receive_txid'
    ]

    def resend(self, instance):
        html = format_html('<a href="/_administration/email/new_tip/resend?pk={}">resend</a>', instance.pk)
        return html

    def claim(self, instance):
        if instance.web3_type == 'yge':
            return 'n/a'
        if not instance.txid:
            return 'n/a'
        if instance.receive_txid:
            return 'n/a'
        try:
            if instance.web3_type == 'v2':
                html = format_html('<a href="{}">claim</a>', instance.receive_url)
            if instance.web3_type == 'v3':
                html = format_html(f'<a href="{instance.receive_url_for_recipient}">claim as recipient</a>')
        except Exception:
            html = 'n/a'
        return html

    def response_change(self, request, obj):
        from django.shortcuts import redirect
        if "_reset_tip_redemption" in request.POST:
            if not obj.receive_txid:
                self.message_user(request, f"Cannot reset tip! This tip has not been marked as receieved")
                return redirect(obj.admin_url)
            obj.receive_txid = ''
            obj.receive_tx_status = ''
            obj.received_on = None
            obj.recipient_profile = None
            obj.receive_address = ''
            obj.metadata['num_redemptions'] = 0
            obj.payouts.all().delete()
            obj.save()
            addr = obj.metadata.get('address')
            self.message_user(request, f"This tip redemption has been reset.  Please make sure {addr} has enough ETH in it to pay gas, and send the new claim link to customer.")
            return redirect(obj.admin_url)
        return super().response_change(request, obj)


# Register your models here.
class BountyAdmin(admin.ModelAdmin):
    raw_id_fields = ['interested', 'bounty_owner_profile', 'bounty_reserved_for_user']
    ordering = ['-id']

    search_fields = ['raw_data', 'title', 'bounty_owner_github_username', 'token_name']
    list_display = ['pk', 'img', 'bounty_state', 'idx_status', 'network_link', 'standard_bounties_id_link', 'bounty_link', 'what']
    readonly_fields = [
        'what', 'img', 'fulfillments_link', 'standard_bounties_id_link', 'bounty_link', 'network_link',
        '_action_urls', 'coupon_link', 'view_count'
    ]

    def img(self, instance):
        if instance.admin_override_org_logo:
            return format_html("<img src={} style='max-width:30px; max-height: 30px'>", mark_safe(instance.admin_override_org_logo.url))
        if not instance.avatar_url:
            return 'n/a'
        return format_html("<img src={} style='max-width:30px; max-height: 30px'>", mark_safe(instance.avatar_url))

    def what(self, instance):
        return str(instance)

    def view_count(self, instance):
        return instance.get_view_count

    def fulfillments_link(self, instance):
        copy = f'fulfillments({instance.num_fulfillments})'
        url = f'/_administrationdashboard/bountyfulfillment/?bounty={instance.pk}'
        return mark_safe(f"<a href={url}>{copy}</a>")

    def standard_bounties_id_link(self, instance):
        copy = f'{instance.standard_bounties_id}'
        url = f'/_administrationdashboard/bounty/?standard_bounties_id={instance.standard_bounties_id}'
        return mark_safe(f"<a href={url}>{copy}</a>")

    def _action_urls(self, instance):
        links = []
        for key, val in instance.action_urls().items():
            links.append(f"<a href={val}>{key}</a>")
        return mark_safe(", ".join(links))

    def bounty_link(self, instance):
        copy = 'link'
        url = instance.url
        return mark_safe(f"<a href={url}>{copy}</a>")

    def network_link(self, instance):
        copy = f'{instance.network}'
        url = f'/_administrationdashboard/bounty/?network={instance.network}'
        return mark_safe(f"<a href={url}>{copy}</a>")

    def coupon_link(self, instance):
        copy = f'{instance.coupon_code.code}'
        url = f'/_administrationdashboard/coupon/{instance.coupon_code.pk}'
        return mark_safe(f"<a href={url}>{copy}</a>")


class HackathonSponsorAdmin(admin.ModelAdmin):
    """The admin object for the HackathonSponsor model."""

    list_display = ['pk', 'hackathon', 'sponsor', 'sponsor_type']


class HackathonWorkshopAdmin(admin.ModelAdmin):
    """The admin object for the HackathonWorkshop model."""

    list_display = ['pk', 'start_date', 'hackathon', 'speaker', 'url']


class SponsorAdmin(admin.ModelAdmin):
    """The admin object for the Sponsor model."""

    list_display = ['pk', 'name', 'img']

    def img(self, instance):
        """Returns a formatted HTML img node or 'n/a' if the HackathonEvent has no logo.

        Returns:
            str: A formatted HTML img node or 'n/a' if the HackathonEvent has no logo.
        """
        logo = instance.logo_svg or instance.logo
        if not logo:
            return 'n/a'
        img_html = format_html('<img src={} style="width: auto; max-height: 40px">', mark_safe(logo.url))
        return img_html


class HackathonEventAdmin(admin.ModelAdmin):
    """The admin object for the HackathonEvent model."""

    raw_id_fields = ['sponsor_profiles']
    list_display = ['pk', 'img', 'name', 'start_date', 'end_date', 'explorer_link']
    list_filter = ('sponsor_profiles', )
    readonly_fields = ['img', 'explorer_link', 'stats', 'view_count']

    def view_count(self, instance):
        return instance.get_view_count

    def img(self, instance):
        """Returns a formatted HTML img node or 'n/a' if the HackathonEvent has no logo.

        Returns:
            str: A formatted HTML img node or 'n/a' if the HackathonEvent has no logo.
        """
        logo = instance.logo_svg or instance.logo
        if not logo:
            return 'n/a'
        img_html = format_html('<img src={} style="max-width:30px; max-height: 30px">', mark_safe(logo.url))
        return img_html

    def explorer_link(self, instance):
        """Returns a formatted HTML <a> node.

        Returns:
            str: A formatted HTML <a> node.
        """

        url = f'/hackathon/{instance.slug}'
        return mark_safe(f'<a href="{url}">Explorer Link</a>')


class CouponAdmin(admin.ModelAdmin):
    """The admin object to maintain discount coupons for bounty"""

    list_display = ['pk', 'code', 'fee_percentage', 'expiry_date', 'link']
    search_fields = ['created_on', 'code', 'fee_percentage']

    def link(self, instance):
        url = f'/funding/new?coupon={instance.code}'
        return mark_safe(f'<a target="_blank" href="{url}">http://gitcoin.co{url}</a>')


class HackathonRegistrationAdmin(admin.ModelAdmin):
    list_display = ['pk', 'name', 'referer', 'registrant']
    raw_id_fields = ['registrant']


class HackathonProjectAdmin(admin.ModelAdmin):
    list_display = ['pk', 'img', 'name', 'bounty', 'hackathon', 'usernames', 'status', 'sponsor']
    raw_id_fields = ['profiles', 'bounty', 'hackathon']
    search_fields = ['name', 'summary', 'status']

    def img(self, instance):
        """Returns a formatted HTML img node or 'n/a' if the HackathonProject has no logo.

        Returns:
            str: A formatted HTML img node or 'n/a' if the HackathonProject has no logo.
        """
        logo = instance.logo
        if not logo:
            return 'n/a'
        img_html = format_html('<img src={} style="max-width:30px; max-height: 30px">', mark_safe(logo.url))
        return img_html

    def usernames(self, obj):
        """Get the profile handle."""
        return "\n".join([p.handle for p in obj.profiles.all()])

    def sponsor(self, obj):
        """Get the profile handle."""
        return obj.bounty.org_name


class TribeMemberAdmin(admin.ModelAdmin):
    raw_id_fields = ['profile', 'org',]
    list_display = ['pk', 'profile', 'org', 'leader', 'status']


class FundRequestAdmin(admin.ModelAdmin):
    list_display = ['id', 'profile', 'requester', 'network', 'token_name', 'amount',
                    'comments', 'address', 'tip', 'created_on']
    readonly_fields = ['id']
    ordering = ['-id']
    raw_id_fields = ['profile', 'requester', 'tip']


class QuestionInline(SortableInlineAdminMixin, admin.TabularInline):
    fields = ['id', 'poll', 'question_type', 'text']
    readonly_fields = ['id']
    raw_id_fields = ['poll']
    show_change_link = True
    model = Question
    extra = 0


class OptionsInline(admin.TabularInline):
    fields = ['id', 'question', 'text']
    raw_id_fields = ['question']
    readonly_fields = ['id']
    show_change_link = True
    model = Option
    extra = 0


class PollsAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'active']
    raw_id_fields = ['hackathon']
    search_fields = ['title']
    inlines = [QuestionInline]


class QuestionsAdmin(admin.ModelAdmin):
    list_display = ['id', 'poll', 'question_type', 'text']
    raw_id_fields = ['poll']
    search_fields = ['question_type', 'text']
    inlines = [OptionsInline]


class OptionsAdmin(admin.ModelAdmin):
    list_display = ['id', 'question', 'text']
    raw_id_fields = ['question']
    search_fields = ['question', 'text']


class AnswersAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'question', 'open_response', 'choice', 'checked', 'hackathon']
    raw_id_fields = ['user', 'question', 'choice', 'hackathon']
    unique_together = ('user', 'question', 'choice')


admin.site.register(BountyEvent, BountyEventAdmin)
admin.site.register(SearchHistory, SearchHistoryAdmin)
admin.site.register(Activity, ActivityAdmin)
admin.site.register(Earning, EarningAdmin)
admin.site.register(BlockedUser, BlockedUserAdmin)
admin.site.register(PortfolioItem, PortfolioItemAdmin)
admin.site.register(ProfileView, ProfileViewAdmin)
admin.site.register(UserAction, UserActionAdmin)
admin.site.register(Interest, InterestAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(TipPayout, TipPayoutAdmin)
admin.site.register(BlockedURLFilter, GeneralAdmin)
admin.site.register(Bounty, BountyAdmin)
admin.site.register(BountyFulfillment, BountyFulfillmentAdmin)
admin.site.register(BountySyncRequest, GeneralAdmin)
admin.site.register(BountyInvites, BountyInvitesAdmin)
admin.site.register(Tip, TipAdmin)
admin.site.register(TokenApproval, TokenApprovalAdmin)
admin.site.register(CoinRedemption, GeneralAdmin)
admin.site.register(CoinRedemptionRequest, GeneralAdmin)
admin.site.register(Sponsor, SponsorAdmin)
admin.site.register(HackathonEvent, HackathonEventAdmin)
admin.site.register(HackathonSponsor, HackathonSponsorAdmin)
admin.site.register(HackathonWorkshop, HackathonWorkshopAdmin)
admin.site.register(HackathonRegistration, HackathonRegistrationAdmin)
admin.site.register(HackathonProject, HackathonProjectAdmin)
admin.site.register(FeedbackEntry, FeedbackAdmin)
admin.site.register(LabsResearch)
admin.site.register(Investigation, InvestigationAdmin)
admin.site.register(UserVerificationModel, VerificationAdmin)
admin.site.register(Coupon, CouponAdmin)
admin.site.register(TribeMember, TribeMemberAdmin)
admin.site.register(FundRequest, FundRequestAdmin)
admin.site.register(Poll, PollsAdmin)
admin.site.register(Question, QuestionsAdmin)
admin.site.register(ObjectView, ObjectViewAdmin)
admin.site.register(Option, OptionsAdmin)
admin.site.register(Answer, AnswersAdmin)
