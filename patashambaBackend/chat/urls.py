from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from chat import views

urlpatterns = [
    path('', views.MessageView.as_view()),
    path('<int:pk>/', views.SingleMessage.as_view()),
    path(r'ParticipantView/', views.ParticipantView.as_view()),
    path(r'ParticipantView/<int:pk>/', views.SingleParticipant.as_view()),
    path(r'ChatRoomView/', views.ChatRoomView.as_view()),
    path(r'ChatRoomView/<int:pk>/', views.SingleChatRoom.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)