# Generated by Django 2.2.4 on 2020-04-07 02:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0097_merge_20200408_1219'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='activity_type',
            field=models.CharField(blank=True, choices=[('wall_post', 'Wall Post'), ('status_update', 'Update status'), ('new_bounty', 'New Bounty'), ('start_work', 'Work Started'), ('stop_work', 'Work Stopped'), ('work_submitted', 'Work Submitted'), ('work_done', 'Work Done'), ('worker_approved', 'Worker Approved'), ('worker_rejected', 'Worker Rejected'), ('worker_applied', 'Worker Applied'), ('increased_bounty', 'Increased Funding'), ('killed_bounty', 'Canceled Bounty'), ('new_tip', 'New Tip'), ('receive_tip', 'Tip Received'), ('bounty_abandonment_escalation_to_mods', 'Escalated checkin from @gitcoinbot about bounty status'), ('bounty_abandonment_warning', 'Checkin from @gitcoinbot about bounty status'), ('bounty_removed_slashed_by_staff', 'Dinged and Removed from Bounty by Staff'), ('bounty_removed_by_staff', 'Removed from Bounty by Staff'), ('bounty_removed_by_funder', 'Removed from Bounty by Funder'), ('new_crowdfund', 'New Crowdfund Contribution'), ('new_grant', 'New Grant'), ('update_grant', 'Updated Grant'), ('killed_grant', 'Cancelled Grant'), ('negative_contribution', 'Negative Grant Contribution'), ('new_grant_contribution', 'Contributed to Grant'), ('new_grant_subscription', 'Subscribed to Grant'), ('killed_grant_contribution', 'Cancelled Grant Contribution'), ('new_kudos', 'New Kudos'), ('created_kudos', 'Created Kudos'), ('receive_kudos', 'Receive Kudos'), ('joined', 'Joined Gitcoin'), ('played_quest', 'Played Quest'), ('beat_quest', 'Beat Quest'), ('created_quest', 'Created Quest'), ('updated_avatar', 'Updated Avatar'), ('mini_clr_payout', 'Mini CLR Payout'), ('leaderboard_rank', 'Leaderboard Rank'), ('consolidated_leaderboard_rank', 'Consolidated Leaderboard Rank'), ('consolidated_mini_clr_payout', 'Consolidated CLR Payout'), ('hackathon_registration', 'Hackathon Registration'), ('flagged_grant', 'Flagged Grant')], db_index=True, max_length=50),
        ),
    ]
