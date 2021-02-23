from django.contrib import admin
from .models import user, admin_message, expert

class UserAdmin(admin.ModelAdmin): 
  list_display = ('photo', 'user_id', 'username', 'email', 'seller', 'user', 'credit_card', 'joining_date')

class messageAdmin(admin.ModelAdmin): 
  list_display = ('admin_message_id', 'text', 'sender', 'sent_at')

class expertAdmin(admin.ModelAdmin):
  list_display = ('expert_id', 'field', 'name', 'email', 'address', 'logo', 'timestamp')
  

# Register your models here.
admin.site.register(user, UserAdmin)
admin.site.register(admin_message, messageAdmin)
admin.site.register(expert, expertAdmin)