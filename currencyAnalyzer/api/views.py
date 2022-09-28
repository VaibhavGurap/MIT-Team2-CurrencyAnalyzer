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
    def weekly(self,year,curr1,curr2):
        records = [i[0:3] for i in CurrencyRecord.objects.values_list('date',curr1,curr2)]
        n = len(records)
        response_data = {}
        i=0
        start_day = records[0][0].weekday()
        for record in records:
            if record[0].weekday()<=start_day:
                start_day=record[0].weekday()
                response_data[i] = {'date':record[0],curr1:record[1],curr2:record[2]}
                i+=1

        return JsonResponse(response_data)

    def monthly(self,year,curr1,curr2):
        response_data = {}
        i=0
        for it in range(12):
            record = [j for j in CurrencyRecord.objects.filter(date__year=year,date__month=it+1).values_list('date', curr1, curr2)]
            if len(record)>0:
                response_data[i]={'date': record[0][0], curr1: record[0][1], curr2: record[0][2]}
                i+=1

        return JsonResponse(response_data)

    def quarterly(self,year,curr1,curr2):
        response_data = {}
        i=0
        for it in range(0,13,3):
            record = [j for j in CurrencyRecord.objects.filter(date__year=year, date__month=it+1).values_list('date', curr1,curr2)]
            if len(record) > 0:
                response_data[i] = {'date': record[0][0], curr1: record[0][1], curr2: record[0][2]}
                i += 1
            else:
                tempCounter=1

                while tempCounter<=2:
                    record = [j for j in CurrencyRecord.objects.filter(date__year=year, date__month= it+1-tempCounter).values_list('date',curr1,curr2)]
                    if len(record) > 0:
                        response_data[i] = {'date': record[0][0], curr1: record[0][1], curr2: record[0][2]}
                        i += 1
                        break
                    tempCounter+=1

        return JsonResponse(response_data)

    def yearly(self,year,curr1,curr2):
        response_data = {}
        record = [j for j in CurrencyRecord.objects.filter(date__year=year).values_list('date', curr1, curr2)]
        if len(record)>0:
            response_data[0]={'date': record[0][0], curr1: record[0][1], curr2: record[0][2]}
            response_data[1] = {'date': record[-1][0], curr1: record[-1][1], curr2: record[-1][2]}
        return JsonResponse(response_data)