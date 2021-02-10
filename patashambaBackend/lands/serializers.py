from rest_framework import serializers
from .models import land, land_owner, like, save, bidding, bid, on_sale, land_image

class LandSerializer(serializers.ModelSerializer):
  class Meta:
    model = land
    fields = ('land_id', 'description', 'likes', 'size', 'town', 'lat', 'lon', 'pub_date')

class LandOwnerSerializer(serializers.ModelSerializer):
  class Meta:
    model = land_owner
    fields = ('land_owner_id', 'land_id','user_id', 'pub_date')

class LikeSerializer(serializers.ModelSerializer):
  class Meta:
    model = like
    fields = ('like_id', 'land_id','user_id', 'pub_date')

class SaveSerializer(serializers.ModelSerializer):
  class Meta:
    model = save
    fields = ('save_id', 'land_id','user_id', 'pub_date')

class BiddingSerializer(serializers.ModelSerializer):
  class Meta:
    model = bidding
    fields = ('bidding_id', 'land_id','bidding_open')

class BidSerializer(serializers.ModelSerializer):
  class Meta:
    model = bid
    fields = ('bid_id', 'bidding','user_id', 'amount', 'bid_date')

class OnSaleSerializer(serializers.ModelSerializer):
  class Meta:
    model = on_sale
    fields = ('on_sale_id', 'land_id','negotiable', 'pub_date')
  
class ImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = land_image
    fields = ('land_image_id', 'land_id','image', 'pub_date')