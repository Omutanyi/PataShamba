from django.contrib import admin
from .models import user

class UserAdmin(admin.ModelAdmin): 
  list_display = ('photo', 'user_id', 'username', 'email', 'password', 'credit_card', 'joining_date')

# Register your models here.
admin.site.register(user, UserAdmin)
