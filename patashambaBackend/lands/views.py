from django.shortcuts import render
from rest_framework import viewsets  
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.filters import SearchFilter, OrderingFilter
# from rest_framework.generics import ListApiView
from rest_framework import status          
from .serializers import LandSerializer, LandOwnerSerializer, LikeSerializer, SaveSerializer, BiddingSerializer, BidSerializer, OnSaleSerializer, ImageSerializer  
from .models import land, land_owner, like, save, bidding, bid, on_sale, land_image
from django.contrib.postgres.search import SearchVector, SearchQuery
from django.contrib.gis.geos import GEOSGeometry

# Create your views here.


class LandView(APIView):      
  # serializer_class = LandSerializer        
  # queryset = land.objects.all()      
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = land.objects.all()
        serializer = LandSerializer(queryset, many=True)
        # for query in queryset:
        #     centroid = GEOSGeometry.centroid.y
        #     print('point is ...', query.address_pin.centroid)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = LandSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SearchLands(APIView):
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, **kwargs):
        queryset = land.objects.all()
        query = self.kwargs.get('search')
        print('the query is', query)
        # result = queryset.annotate(
        #     search=SearchVector('town'),
        #     ).filter(search = SearchQuery(query) )

        result = queryset.filter(town__icontains=query)
        serializer = LandSerializer(result, many=True)
        return Response(serializer.data)

class SingleLand(APIView):

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_object(self, pk):
        try:
            return land.objects.get(pk=pk)
        except land.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = LandSerializer(land)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = LandSerializer(land, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        land = self.get_object(pk)
        land.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class LandOwnerView(APIView):      
  # serializer_class = LandOwnerSerializer        
  # queryset = land_owner.objects.all()  
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = land_owner.objects.all()
        serializer = LandOwnerSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = LandOwnerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SingleLandOwner(APIView):

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_object(self, pk):
        try:
            return land.objects.get(pk=pk)
        except land.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        land_owner = self.get_object(pk)
        serializer = LandOwnerSerializer(land_owner)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        land_owner = self.get_object(pk)
        serializer = LandOwnerSerializer(land_owner, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        land_owner = self.get_object(pk)
        land_owner.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class LikeView(APIView):      
  # serializer_class = LikeSerializer        
  # queryset = like.objects.all()
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = like.objects.all()
        serializer = LikeSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = LikeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SingleLike(APIView):

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_object(self, pk):
        try:
            return like.objects.get(pk=pk)
        except like.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        like = self.get_object(pk)
        serializer = LikeSerializer(like)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        like = self.get_object(pk)
        serializer = LikeSerializer(like, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        like = self.get_object(pk)
        like.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class SaveView(APIView):      
  # serializer_class = SaveSerializer        
  # queryset = save.objects.all()
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = save.objects.all()
        serializer = SaveSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = SaveSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SingleSave(APIView):

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_object(self, pk):
        try:
            return save.objects.get(pk=pk)
        except save.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        save = self.get_object(pk)
        serializer = SaveSerializer(save)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        save = self.get_object(pk)
        serializer = SaveSerializer(save, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        save = self.get_object(pk)
        save.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class BiddingView(APIView):      
  # serializer_class = BiddingSerializer        
  # queryset = bidding.objects.all()
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = bidding.objects.all()
        serializer = BiddingSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = BiddingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SingleBidding(APIView):

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_object(self, pk):
        try:
            return bidding.objects.get(pk=pk)
        except bidding.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        bidding = self.get_object(pk)
        serializer = BiddingSerializer(bidding)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        bidding = self.get_object(pk)
        serializer = BiddingSerializer(bidding, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        bidding = self.get_object(pk)
        bidding.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class BidView(APIView):      
  # serializer_class = BidSerializer        
  # queryset = bid.objects.all()
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = bid.objects.all()
        serializer = BidSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = BidSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SingleBid(APIView):

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_object(self, pk):
        try:
            return bid.objects.get(pk=pk)
        except bid.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        bid = self.get_object(pk)
        serializer = BidSerializer(bidding)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        bid = self.get_object(pk)
        serializer = BidSerializer(bidding, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        bid = self.get_object(pk)
        bid.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class OnSaleView(APIView):      
  # serializer_class = OnSaleSerializer        
  # queryset = on_sale.objects.all()
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = on_sale.objects.all()
        serializer = OnSaleSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = OnSaleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SingleOnSale(APIView):

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_object(self, pk):
        try:
            return on_sale.objects.get(pk=pk)
        except on_sale.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        on_sale = self.get_object(pk)
        serializer = OnSaleSerializer(on_sale)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        on_sale = self.get_object(pk)
        serializer = OnSaleSerializer(bidding, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        on_sale = self.get_object(pk)
        on_sale.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class Image(APIView):      
  # serializer_class = OnSaleSerializer        
  # queryset = on_sale.objects.all()
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = land_image.objects.all()
        serializer = ImageSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SearchImage(APIView):
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, **kwargs):
        queryset = land_image.objects.all()
        query = self.kwargs.get('pk')
        result = queryset.filter(land_image_id__icontains=query)
        serializer = ImageSerializer(result, many=True)
        return Response(serializer.data)

class SingleImage(APIView):

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_object(self, pk):
        try:
            return land_image.objects.get(pk=pk)
        except on_sale.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        land_image = self.get_object(pk)
        serializer = ImageSerializer(on_sale)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        land_image = self.get_object(pk)
        serializer = ImageSerializer(bidding, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        land_image = self.get_object(pk)
        land_image.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)