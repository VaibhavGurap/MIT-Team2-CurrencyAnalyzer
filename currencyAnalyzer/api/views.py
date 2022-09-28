from django.shortcuts import render
import datetime
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


    def monthly(self,year,curr1,curr2):
        records = [i[0:3] for i in CurrencyRecord.objects.filter(date__year=year).values_list('date', curr1, curr2)]
        response_data = {}
        for i in range(12):
            record = [j for j in CurrencyRecord.objects.filter(date__year=year,date__month=i+1).values_list('date', curr1, curr2)]
            if len(record)>0:
                response_data[i]={'date': record[0][0], curr1: record[0][1], curr2: record[0][2]}
                print(response_data)
                i+=1

        return JsonResponse(response_data)

    

