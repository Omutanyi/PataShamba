from django.contrib import admin
from .models import land

class LandAdmin(admin.ModelAdmin): 
  list_display = ('land_id', 'description', 'location', 'likes','size', 'pub_date')

# Register your models here.
admin.site.register(land, LandAdmin)