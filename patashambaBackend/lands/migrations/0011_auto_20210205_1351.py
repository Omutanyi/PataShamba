# Generated by Django 3.1.5 on 2021-02-05 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lands', '0010_auto_20210202_1537'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='land',
            name='address_pin',
        ),
        migrations.AddField(
            model_name='land',
            name='lat',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='land',
            name='lon',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
