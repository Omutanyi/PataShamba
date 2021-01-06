from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import userSerializer    
from .models import user 


# Create your views here.

class UserView(viewsets.ModelViewSet):      
  serializer_class = userSerializer        
  queryset = user.objects.all()  