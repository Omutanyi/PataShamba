from rest_framework import serializers
from .models import land

class LandSerializer(serializers.ModelSerializer):
  class Meta:
    model = land
    fields = ('land_id', 'description', 'likes', 'price', 'negotiable', 'size', 'pub_date')