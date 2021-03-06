# Generated by Django 2.2.4 on 2020-04-29 14:38

from django.db import migrations, models
import django.db.models.deletion
import economy.models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0103_auto_20200428_1057'),
    ]

    operations = [
        migrations.CreateModel(
            name='FundRequest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('modified_on', models.DateTimeField(default=economy.models.get_time)),
                ('token_name', models.CharField(default='ETH', max_length=255)),
                ('amount', models.DecimalField(decimal_places=4, default=1, max_digits=50)),
                ('comments', models.TextField(blank=True, default='')),
                ('network', models.CharField(default='', max_length=255)),
                ('address', models.CharField(default='', max_length=255)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='requests_receiver', to='dashboard.Profile')),
                ('requester', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='requests_sender', to='dashboard.Profile')),
                ('tip', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='dashboard.Tip')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
