# Generated by Django 3.1.5 on 2021-02-02 15:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('lands', '0008_auto_20210201_0951'),
    ]

    operations = [
        migrations.CreateModel(
            name='land_image',
            fields=[
                ('land_image_id', models.AutoField(primary_key=True, serialize=False)),
                ('image', models.ImageField(upload_to='uploads/% Y/% m/% d/')),
                ('pub_date', models.DateTimeField(auto_now_add=True, null=True)),
                ('land_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='lands.land')),
            ],
        ),
    ]