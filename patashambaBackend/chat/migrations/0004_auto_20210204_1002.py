# Generated by Django 3.1.5 on 2021-02-04 10:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0003_auto_20210111_1054'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='message_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='participant',
            name='participant_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
