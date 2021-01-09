from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from lands import views

urlpatterns = [
    path('', views.LandView.as_view()),
    path('<int:pk>/', views.SingleLand.as_view()),
    path(r'LandOwnerView/', views.LandOwnerView.as_view()),
    path(r'LandOwnerView/<int:pk>/', views.SingleLandOwner.as_view()),
    path(r'LikeView/', views.LikeView.as_view()),
    path(r'LikeView/<int:pk>/', views.SingleLike.as_view()),
    path(r'SaveView/', views.SingleSave.as_view()),
    path(r'SaveView/<int:pk>/', views.SingleSave.as_view()),
    path(r'BiddingView/', views.BiddingView.as_view()),
    path(r'BiddingView/<int:pk>/', views.SingleBidding.as_view()),
    path(r'BidView/', views.BidView.as_view()),
    path(r'BidView/<int:pk>/', views.SingleBid.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)