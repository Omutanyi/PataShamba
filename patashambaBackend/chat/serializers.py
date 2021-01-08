from rest_framework import serializers
from .models import chat_room, participant, message

class ChatRoomSerializer(serializers.ModelSerializer):
  class Meta:
    model = chat_room
    fields = ('room_id', 'room_open')

class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = participant
        fields = ('participant_id', 'user_id', 'room_id')

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = message
        fields = ('message_id', 'room_id', 'sender', 'text', 'sent_at')