from django.shortcuts import render
from django.http import JsonResponse
# import viewsets
from rest_framework import viewsets

# import local data
from .serializers import CurrencySerializer
from .models import CurrencyRecord


# create a viewset
class CurrencyViewSet(viewsets.ModelViewSet):
    # define queryset
    queryset = CurrencyRecord.objects.all()

    # specify serializer to be used
    serializer_class = CurrencySerializer

class Trend():
    def weekly(self):
        queryset = CurrencyRecord.objects.all()
        response_data = {}
        response_data['result'] = 'success'
        return JsonResponse(response_data)
