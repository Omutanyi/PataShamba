# from channels.generic.websocket import AsyncWebsocketConsumer
# import json

# class ChatConsumer(AsyncWebsocketConsumer):
#     async def connect(self):
#         self.room_name = self.scope['url_route']['kwargs']['room_name']
#         self.room_group_name = 'chat_%s' % self.room_name

#         # Join room group
#         await self.channel_layer.group_add(
#             self.room_group_name,
#             self.channel_name
#         )

#         await self.accept()

#     async def disconnect(self, close_code):
#         # Leave room group
#         await self.channel_layer.group_discard(
#             self.room_group_name,
#             self.channel_name
#         )

#     # Receive message from WebSocket
#     async def receive(self, text_data):
#         text_data_json = json.loads(text_data)
#         message = text_data_json['message']

#         # Send message to room group
#         await self.channel_layer.group_send(
#             self.room_group_name,
#             {
#                 'type': 'chat_message',
#                 'message': message
#             }
#         )

#     # Receive message from room group
#     async def chat_message(self, event):
#         message = event['message']

#         # Send message to WebSocket
#         await self.send(text_data=json.dumps({
#             'message': message
#         }))

import datetime
import json
from .models import message
from users.models import user  

from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer


class ChatConsumer(WebsocketConsumer):

    def fetch_messages(self, data):
        messages = message.last_10_messages()
        content = {
            'messages': self.messages_to_json(messages)
        }
        self.send_message(content)

    def messages_to_json(self, messages):
        result = []
        for message in messages:
            result.append(self.message_to_json(message))
        return result
    
    def message_to_json(self, message):
        return {
            'sender': message.sender,
            'text': message.text,
            'sent_at': str(message.sent_at)
        }
    def new_message(self, data):
        # sender = data['sender']
        # sender_user = user.objects.filter(username=sender)[0]
        message = message.objects.create(
            # sender = sender_user,
            content = data['message'])
        content = {
            'command': 'new_message',
            'message': self.message_to_json(message)
        }
        return self.send_chat_message(content)

    commands = {
        'fetch_messages': fetch_messages,
        'new_message': new_message
    }
    def connect(self):
        """
        Connect to a chat room
        Spaces are replaced like this: 'My new room' -> 'My_new_room'
        """
        
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_name = self.room_name.replace(' ', '_')
        self.room_group_name = 'chat_%s' % self.room_name

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        data = json.loads(text_data)
        self.commands[data['command']](self, data)

    def send_chat_message(self, message):
        message = data['message']
        utc_time = datetime.datetime.now(datetime.timezone.utc)
        utc_time = utc_time.isoformat()

        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message,
                'utc_time': utc_time,
            }
        )

    def send_message(self, message):
        self.send(text_data=json.dumps({message}))

    def chat_message(self, event):
        """
        Receive a broadcast message and send it over a websocket
        """
        
        message = event['message']
        utc_time = event['utc_time']

        # Send message to WebSocket
        self.send(text_data=json.dumps({message}))