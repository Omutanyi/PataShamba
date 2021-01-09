from django.contrib import admin
from .models import user, admin_message

class UserAdmin(admin.ModelAdmin): 
  list_display = ('photo', 'user_id', 'username', 'email', 'password', 'credit_card', 'joining_date')

class messageAdmin(admin.ModelAdmin): 
  list_display = ('admin_message_id', 'text', 'sender', 'sent_at')
  

# Register your models here.
admin.site.register(user, UserAdmin)
admin.site.register(admin_message, messageAdmin)