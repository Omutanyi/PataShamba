from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import LandSerializer, LandOwnerSerializer, LikeSerializer, SaveSerializer, BiddingSerializer, BidSerializer, OnSaleSerializer  
from .models import land, land_owner, like, save, bidding, bid, on_sale

# Create your views here.


class LandView(viewsets.ModelViewSet):      
  serializer_class = LandSerializer        
  queryset = land.objects.all()      

class LandOwnerView(viewsets.ModelViewSet):      
  serializer_class = LandOwnerSerializer        
  queryset = land_owner.objects.all()  

class LikeView(viewsets.ModelViewSet):      
  serializer_class = LikeSerializer        
  queryset = like.objects.all()

class SaveView(viewsets.ModelViewSet):      
  serializer_class = SaveSerializer        
  queryset = save.objects.all()

class BiddingView(viewsets.ModelViewSet):      
  serializer_class = BiddingSerializer        
  queryset = bidding.objects.all()

class BidView(viewsets.ModelViewSet):      
  serializer_class = BidSerializer        
  queryset = bid.objects.all()

class OnSaleView(viewsets.ModelViewSet):      
  serializer_class = OnSaleSerializer        
  queryset = on_sale.objects.all()