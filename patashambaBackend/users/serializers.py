from rest_framework import serializers
from .models import user, admin_message, expert

class userSerializer(serializers.ModelSerializer):
  class Meta:
    model = user
    fields = ('photo', 'user_id', 'username', 'email', 'user', 'seller', 'credit_card', 'joining_date')
    # write_only_fields = ('password',)
    # read_only_fields = ('user_id',)

    # def create(self, validated_data):
    #     user = user.objects.create(
    #         username=validated_data['username'],
    #         email=validated_data['email'],
    #         credit_card=validated_data['credit_card'],
    #         joining_date=validated_data['joining_date']
    #     )

    #     user.set_password(validated_data['password'])
    #     user.save()

    #     return user

class adminMessageSerializer(serializers.ModelSerializer):
  class Meta:
    model = admin_message
    fields = ('admin_message_id', 'text', 'sender', 'sent_at')

class ExpertSerializer(serializers.ModelSerializer):
  class Meta:
    model = expert
    fields = ('expert_id', 'field', 'name', 'email', 'address', 'logo', 'timestamp')