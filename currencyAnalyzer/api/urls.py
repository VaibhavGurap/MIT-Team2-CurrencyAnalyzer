from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import *
from .utils import dbsetup

router = routers.DefaultRouter()
#router.register(r'api',CurrencyViewSet)
urlpatterns = [
    path('trend/<year>/<curr1>/<curr2>/w',Trend.weekly),
    path('trend/<year>/<curr1>/<curr2>/m',Trend.monthly),
    path('trend/<year>/<curr1>/<curr2>/q',Trend.quarterly),
    path('trend/<year>/<curr1>/<curr2>/y',Trend.yearly),
    path('currency/',Currency.getAll),
    path(r'currency/converter',Currency.converter),
    path(r'currency/getExchangeRates',Currency.getExchangeRate),
    #path('',include(router.urls)),

]
dbsetup()