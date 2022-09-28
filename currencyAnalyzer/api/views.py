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
        curr1=curr1.upper()
        curr2=curr2.upper()
        try:
            if curr1=='USD':
                records = [i[0:3] for i in CurrencyRecord.objects.filter(date__year=year).values_list('date',curr1,curr2)]
                response_data = {}
                i=0
                start_week = records[0][0].isocalendar()[1]-1
                for record in records:
                    if record[0].isocalendar()[1]>start_week:
                        start_week=record[0].isocalendar()[1]
                        response_data[i] = {'date':record[0],curr1:record[1],curr2:record[2]}
                        i+=1

                return JsonResponse(response_data)
            else:
                response_data = {'pending': True}
                return JsonResponse(response_data)
        except Exception as e:
            response_data = {'Error': 'Please check the currency'}
            return JsonResponse(response_data)
        return JsonResponse(response_data)


    def monthly(self,year,curr1,curr2):
        curr1=curr1.upper()
        curr2=curr2.upper()
        try:
            if curr1=='USD':
                response_data = {}
                i=0
                for it in range(12):
                    record = [j for j in CurrencyRecord.objects.filter(date__year=year,date__month=it+1).values_list('date', curr1, curr2)]
                    if len(record)>0:
                        response_data[i]={'date': record[0][0], curr1: record[0][1], curr2: record[0][2]}
                        i+=1

                return JsonResponse(response_data)
            else:
                response_data={'pending':True}
                return JsonResponse(response_data)
        except Exception as e:
            response_data={'Error':'Please check the currency'}
            return JsonResponse(response_data)
        return JsonResponse(response_data)

    def quarterly(self,year,curr1,curr2):
        curr1=curr1.upper()
        curr2=curr2.upper()
        response_data = {}
        i=0
        try:
            if curr1 == 'USD':
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
            else:
                response_data = {'pending': True}
                return JsonResponse(response_data)
        except Exception as e:
            response_data={'Error':'Please check the currency'}
            return JsonResponse(response_data)
        return JsonResponse(response_data)

    def yearly(self,year,curr1,curr2):
        curr1 = curr1.upper()
        curr2 = curr2.upper()
        try:
            if curr1=='USD':
                response_data = {}
                record = [j for j in CurrencyRecord.objects.filter(date__year=year).values_list('date', curr1, curr2)]
                if len(record)>0:
                    response_data[0]={'date': record[0][0], curr1: record[0][1], curr2: record[0][2]}
                    response_data[1] = {'date': record[-1][0], curr1: record[-1][1], curr2: record[-1][2]}
            else:
                response_data = {'pending': True}
                return JsonResponse(response_data)
        except Exception as e:
            response_data={'Error':'Please check the currency'}
            return JsonResponse(response_data)
        return JsonResponse(response_data)