from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
#router.register(r'api',CurrencyViewSet)
urlpatterns = [
    path('trend/<year>/<curr1>/<curr2>/w',Trend.weekly),
    path('trend/<year>/<curr1>/<curr2>/m',Trend.monthly),
    #path('',include(router.urls)),

]