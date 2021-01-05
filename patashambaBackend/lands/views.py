from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import LandSerializer     
from .models import land                     

# Create your views here.


class LandView(viewsets.ModelViewSet):      
  serializer_class = LandSerializer        
  queryset = land.objects.all()           