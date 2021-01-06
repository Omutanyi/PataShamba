from rest_framework import serializers
from .models import user

class userSerializer(serializers.ModelSerializer):
  class Meta:
    model = user
    fields = ('photo', 'user_id', 'username', 'email', 'password', 'credit_card', 'joining_date')