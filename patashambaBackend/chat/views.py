from django.shortcuts import render
from rest_framework import viewsets   

from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response   
from rest_framework import status       
from .serializers import ChatRoomSerializer, ParticipantSerializer, MessageSerializer     
from .models import message, chat_room, participant  
from django.shortcuts import render                   

# Create your views here.

def index(request):
    return render(request, 'chat/index.html')

class MessageView(APIView):      
  # serializer_class = MessageSerializer        
  # queryset = message.objects.all() 
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = message.objects.all()
        serializer = MessageSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)     

class SingleMessage(APIView):

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_object(self, pk):
        try:
            return message.objects.get(pk=pk)
        except message.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        message = self.get_object(pk)
        serializer = MessageSerializer(message)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        message = self.get_object(pk)
        serializer = MessageSerializer(message, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        message = self.get_object(pk)
        message.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 




class ParticipantView(APIView):      
  # serializer_class = ParticipantSerializer        
  # queryset = participant.objects.all()    
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = participant.objects.all()
        serializer = ParticipantSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ParticipantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   

class SingleParticipant(APIView):

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_object(self, pk):
        try:
            return participant.objects.get(pk=pk)
        except participant.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        participant = self.get_object(pk)
        serializer = ParticipantSerializer(participant)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        participant = self.get_object(pk)
        serializer = ParticipantSerializer(participant, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        participant = self.get_object(pk)
        participant.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)   

class ChatRoomView(APIView):      
  # serializer_class = ChatRoomSerializer        
  # queryset = chat_room.objects.all() 
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = chat_room.objects.all()
        serializer = ChatRoomSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ChatRoomSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  

class SingleChatRoom(APIView):

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_object(self, pk):
        try:
            return chat_room.objects.get(pk=pk)
        except chat_room.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        chat_room = self.get_object(pk)
        serializer = ChatRoomSerializer(participant)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        chat_room = self.get_object(pk)
        serializer = ChatRoomSerializer(chat_room, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        chat_room = self.get_object(pk)
        chat_room.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 

