# Generated by Django 3.1.5 on 2021-02-04 10:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_admin_message'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='uploads/user/photos/% Y/% m/% d/'),
        ),
    ]
