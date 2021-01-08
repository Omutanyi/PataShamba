from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import userSerializer, adminMessageSerializer  
from .models import user, admin_message

# Create your views here.

class UserView(viewsets.ModelViewSet):      
  serializer_class = userSerializer        
  queryset = user.objects.all()  

class AdminMessageView(viewsets.ModelViewSet):      
  serializer_class = adminMessageSerializer        
  queryset = admin_message.objects.all()  