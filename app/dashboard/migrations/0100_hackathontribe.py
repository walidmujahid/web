# Generated by Django 2.2.4 on 2020-04-07 14:54

from django.db import migrations, models
import django.db.models.deletion
import economy.models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0099_auto_20200407_0209'),
    ]

    operations = [
        migrations.CreateModel(
            name='HackathonTribe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(db_index=True, default=economy.models.get_time)),
                ('modified_on', models.DateTimeField(default=economy.models.get_time)),
                ('hackathon', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='dashboard.HackathonEvent')),
                ('profile', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='dashboard.Profile')),
                ('sponsor', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='dashboard.Sponsor')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
