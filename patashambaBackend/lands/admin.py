from django.contrib import admin
from .models import land, land_owner, like, save, bidding, bid, on_sale, land_image

class LandAdmin(admin.ModelAdmin): 
  list_display = ('land_id', 'description', 'likes','size', 'town', 'lat', 'lon', 'pub_date')

class LandOwnerAdmin(admin.ModelAdmin):
    list_display = ('land_owner_id', 'land_id','user_id', 'pub_date')
    
class LikeAdmin(admin.ModelAdmin):
    list_display = ('like_id', 'land_id','user_id', 'pub_date')

class SaveAdmin(admin.ModelAdmin):
    list_display = ('save_id', 'land_id','user_id', 'pub_date')

class BiddingAdmin(admin.ModelAdmin):
    list_display = ('bidding_id', 'land_id','bidding_open')

class BidAdmin(admin.ModelAdmin):
    list_display = ('bid_id', 'bidding','user_id', 'amount', 'bid_date')
    
class OnSaleAdmin(admin.ModelAdmin):
    list_display = ('on_sale_id', 'land_id','negotiable', 'pub_date')

class imageAdmin(admin.ModelAdmin):
    list_display = ('land_image_id', 'land_id','image', 'pub_date')

# Register your models here.
admin.site.register(land, LandAdmin)
admin.site.register(land_owner, LandOwnerAdmin)
admin.site.register(like, LikeAdmin)
admin.site.register(save, SaveAdmin)
admin.site.register(bidding, BiddingAdmin)
admin.site.register(bid, BidAdmin)
admin.site.register(on_sale, OnSaleAdmin)
admin.site.register(land_image, imageAdmin)