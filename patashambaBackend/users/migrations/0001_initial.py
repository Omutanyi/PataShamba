# Generated by Django 3.1.5 on 2021-01-06 11:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='user',
            fields=[
                ('photo', models.ImageField(blank=True, null=True, upload_to='assets/user/photos/')),
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.IntegerField(null=True)),
                ('password', models.CharField(max_length=100)),
                ('credit_card', models.CharField(max_length=50, null=True)),
                ('joining_date', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
    ]
