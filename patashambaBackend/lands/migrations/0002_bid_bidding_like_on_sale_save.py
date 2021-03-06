# Generated by Django 3.1.5 on 2021-01-08 00:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_admin_message'),
        ('lands', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='save',
            fields=[
                ('save_id', models.AutoField(primary_key=True, serialize=False)),
                ('pub_date', models.DateTimeField(auto_now_add=True, null=True)),
                ('land_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='lands.land')),
                ('user_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='users.user')),
            ],
        ),
        migrations.CreateModel(
            name='on_sale',
            fields=[
                ('on_sale_id', models.AutoField(primary_key=True, serialize=False)),
                ('negotiable', models.BooleanField(default=False)),
                ('pub_date', models.DateTimeField(auto_now_add=True, null=True)),
                ('land_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='lands.land')),
            ],
        ),
        migrations.CreateModel(
            name='like',
            fields=[
                ('like_id', models.AutoField(primary_key=True, serialize=False)),
                ('pub_date', models.DateTimeField(auto_now_add=True, null=True)),
                ('land_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='lands.land')),
                ('user_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='users.user')),
            ],
        ),
        migrations.CreateModel(
            name='bidding',
            fields=[
                ('bidding_id', models.AutoField(primary_key=True, serialize=False)),
                ('bidding_open', models.BooleanField(default=False)),
                ('land_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='lands.land')),
            ],
        ),
        migrations.CreateModel(
            name='bid',
            fields=[
                ('bid_id', models.AutoField(primary_key=True, serialize=False)),
                ('amount', models.CharField(max_length=100, null=True)),
                ('bid_date', models.DateTimeField(auto_now_add=True, null=True)),
                ('land_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='lands.land')),
                ('user_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='users.user')),
            ],
        ),
    ]
