# Generated by Django 3.1.5 on 2021-01-08 13:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lands', '0003_auto_20210108_0024'),
    ]

    operations = [
        migrations.AlterField(
            model_name='land',
            name='land_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]