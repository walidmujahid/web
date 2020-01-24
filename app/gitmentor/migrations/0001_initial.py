# Generated by Django 2.2.4 on 2020-01-23 23:28

from django.db import migrations, models
import economy.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('dashboard', '0080_auto_20200123_1957'),
    ]

    operations = [
        migrations.CreateModel(
            name='MentoringSession',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(db_index=True, default=economy.models.get_time)),
                ('modified_on', models.DateTimeField(default=economy.models.get_time)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='MoneyStream',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(db_index=True, default=economy.models.get_time)),
                ('modified_on', models.DateTimeField(default=economy.models.get_time)),
                ('network', models.CharField(default='mainnet', help_text='The network in which the Sablier contract resides.', max_length=8)),
                ('sablier_address', models.CharField(default='0x0', help_text='Sablier protocol contract address.', max_length=255)),
                ('required_gas_price', models.DecimalField(decimal_places=0, default='0', help_text='The required gas price for creating a Sablier stream.', max_digits=50)),
                ('token_address', models.CharField(max_length=50)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='SessionScheduling',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(db_index=True, default=economy.models.get_time)),
                ('modified_on', models.DateTimeField(default=economy.models.get_time)),
                ('session_type', models.CharField(blank=True, choices=[('Debugging', 'debugging'), ('Code Review', 'code-review'), ('Peer Programming', 'peer-programming'), ('Other', 'other')], db_index=True, max_length=50)),
                ('session_datetime', models.DateTimeField(help_text='Requested session date and time.')),
                ('mentor', models.ManyToManyField(help_text='Select mentor', to='dashboard.Profile')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
