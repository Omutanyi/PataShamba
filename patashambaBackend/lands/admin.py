from django.contrib import admin
from .models import land

class LandAdmin(admin.ModelAdmin): 
  list_display = ('land_id', 'description', 'likes', 'price', 'negotiable', 'size', 'pub_date')

# Register your models here.
admin.site.register(land, LandAdmin)