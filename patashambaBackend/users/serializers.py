from rest_framework import serializers
from .models import user, admin_message

class userSerializer(serializers.ModelSerializer):
  class Meta:
    model = user
    fields = ('photo', 'user_id', 'username', 'email', 'password', 'credit_card', 'joining_date')

class adminMessageSerializer(serializers.ModelSerializer):
  class Meta:
    model = admin_message
    fields = ('admin_message_id', 'text', 'sender', 'sent_at')