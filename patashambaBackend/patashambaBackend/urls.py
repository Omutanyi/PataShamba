"""patashambaBackend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include             
from rest_framework import routers         
from lands.views import LandView, LandOwnerView, LikeView, SaveView, BiddingView, BidView, OnSaleView
from users.views import UserView, AdminMessageView
from chat.views import MessageView, ParticipantView, ChatRoomView

router = routers.DefaultRouter()

router.register(r'lands/land', LandView, 'land') 
router.register(r'lands/land_owner', LandOwnerView, 'land_owner') 
router.register(r'lands/like', LikeView, 'like')
router.register(r'lands/save', SaveView, 'save')
router.register(r'lands/bidding', BiddingView, 'bidding')
router.register(r'lands/bid', BidView, 'bidding')
router.register(r'lands/on_sale', OnSaleView, 'on_sale')

router.register(r'users/user', UserView, 'user') 
router.register(r'users/admin_message', AdminMessageView, 'admin_message')

router.register(r'chat/message', MessageView, 'message')
router.register(r'chat/participant', ParticipantView, 'participant')
router.register(r'chat/chat_room', ChatRoomView, 'chat_room')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]