from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from users import views

urlpatterns = [
    path('', views.UserView.as_view()),
    path('<int:pk>/', views.SingleUser.as_view()),
    path('admin_message/', views.AdminMessageView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)