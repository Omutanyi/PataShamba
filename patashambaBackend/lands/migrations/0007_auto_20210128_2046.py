# Generated by Django 3.1.5 on 2021-01-28 20:46

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lands', '0006_auto_20210111_1044'),
    ]

    operations = [
        migrations.RenameField(
            model_name='land',
            old_name='location',
            new_name='town',
        ),
        migrations.AddField(
            model_name='land',
            name='address_pin',
            field=django.contrib.gis.db.models.fields.PointField(blank=True, null=True, srid=4326),
        ),
        migrations.AddField(
            model_name='on_sale',
            name='purchase_initiated',
            field=models.BooleanField(default=False),
        ),
    ]
