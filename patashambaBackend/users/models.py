from django.db import models

# Create your models here.

class user(models.Model):
    photo = models.ImageField(upload_to="assets/user/photos/", null=True, blank=True)
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=20, null=False)
    email = models.EmailField(null=True, unique=True)
    # phone = models.IntegerField(null=True)
    password = models.CharField(max_length=50, null=False)
    credit_card = models.CharField(max_length=50, null=True)
    joining_date = models.DateTimeField(auto_now_add=True, null=True)
    
    def __str__(self):
        return self.user_id