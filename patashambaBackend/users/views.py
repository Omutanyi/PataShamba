from django.shortcuts import render
from rest_framework import viewsets  
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status       
from .serializers import userSerializer, adminMessageSerializer, ExpertSerializer
from .models import user, admin_message, expert

# Create your views here.

class UserView(APIView):   
    # serializer_class = userSerializer        
    # queryset = user.objects.all()  
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = user.objects.all()
        serializer = userSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = userSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SingleUser(APIView):

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_object(self, pk):
        try:
            return user.objects.get(pk=pk)
        except user.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = userSerializer(user)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = userSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        user = self.get_object(pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class AdminMessageView(APIView):      
  # serializer_class = adminMessageSerializer        
  # queryset = admin_message.objects.all()   
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = admin_message.objects.all()
        serializer = adminMessageSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = adminMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ExpertView(APIView): 
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = expert.objects.all()
        serializer = ExpertSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ExpertSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# from django.shortcuts import render
# from rest_framework import viewsets          
# from .serializers import userSerializer, adminMessageSerializer  
# from .models import user, admin_message

# # Create your views here.

# class UserView(viewsets.ModelViewSet):      
#   serializer_class = userSerializer        
#   queryset = user.objects.all()  

# class AdminMessageView(viewsets.ModelViewSet):      
#   serializer_class = adminMessageSerializer        
#   queryset = admin_message.objects.all()  