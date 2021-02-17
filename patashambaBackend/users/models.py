from django.db import models

# Create your models here.

class user(models.Model):
    photo = models.ImageField(upload_to ='uploads/user/photos/% Y/% m/% d/', null=True, blank=True)
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=20, null=False)
    user = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField(null=True, unique=True)
    seller = models.BooleanField(default=False)
    # phone = models.IntegerField(null=True)
    # password = models.CharField(max_length=50, null=False)
    credit_card = models.CharField(max_length=50, null=True)
    joining_date = models.DateTimeField(auto_now_add=True, null=True)
    
    def __int__(self):
        return self.user_id

class admin_message(models.Model):
    admin_message_id = models.AutoField(primary_key=True)
    text = models.CharField(max_length=100, null=True)
    sender = models.ForeignKey(user, on_delete=models.SET_NULL, null=True)
    sent_at = models.DateTimeField(auto_now_add=True, null=True)

    def __int__(self):
        return self.admin_message_id

class expert(models.Model):
    expert_id = models.AutoField(primary_key=True)
    field = models.CharField(max_length=30, null=True)
    name = models.CharField(max_length=30, null=True)
    email =models.EmailField(null=True, unique=True)
    address = models.CharField(max_length=50, null=True)
    logo = models.ImageField(upload_to ='uploads/expert_logos/% Y/% m/% d/', null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True, null=True)

    def __int__(self):
        return self.expert_id