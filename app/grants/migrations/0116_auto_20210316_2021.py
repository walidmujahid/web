# Generated by Django 2.2.4 on 2021-03-16 20:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grants', '0115_auto_20210310_0532'),
    ]

    operations = [
        migrations.AddField(
            model_name='grant',
            name='admin_message',
            field=models.TextField(blank=True, default='', help_text='An admin message that will be shown to visitors of this grant.'),
        ),
        migrations.AddField(
            model_name='grant',
            name='visible',
            field=models.BooleanField(default=True, help_text='Is grant visible on the site'),
        ),
    ]
