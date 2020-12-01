# Generated by Django 2.2.4 on 2020-11-24 19:25

import app.utils
from django.db import migrations, models
import economy.models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0163_auto_20201119_1021'),
    ]

    operations = [
        migrations.CreateModel(
            name='MediaFile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(db_index=True, default=economy.models.get_time)),
                ('modified_on', models.DateTimeField(default=economy.models.get_time)),
                ('file', models.FileField(blank=True, help_text='The file.', null=True, upload_to=app.utils.get_upload_filename)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]