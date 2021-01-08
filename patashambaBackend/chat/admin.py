from django.contrib import admin
from .models import chat_room, message, participant

class ChatRoomAdmin(admin.ModelAdmin): 
  list_display = ('room_id', 'room_open')

class MessageAdmin(admin.ModelAdmin): 
  list_display = ('message_id', 'room_id', 'sender', 'text', 'sent_at')

class ParticipantAdmin(admin.ModelAdmin): 
  list_display = ('participant_id', 'user_id', 'room_id')


# Register your models here.
admin.site.register(chat_room, ChatRoomAdmin)
admin.site.register(message, MessageAdmin)
admin.site.register(participant, ParticipantAdmin)