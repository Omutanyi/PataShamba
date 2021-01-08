from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import ChatRoomSerializer, ParticipantSerializer, MessageSerializer     
from .models import message, chat_room, participant                     

# Create your views here.


class MessageView(viewsets.ModelViewSet):      
  serializer_class = MessageSerializer        
  queryset = message.objects.all()       

class ParticipantView(viewsets.ModelViewSet):      
  serializer_class = ParticipantSerializer        
  queryset = participant.objects.all()        

class ChatRoomView(viewsets.ModelViewSet):      
  serializer_class = ChatRoomSerializer        
  queryset = chat_room.objects.all() 