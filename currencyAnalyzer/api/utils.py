from .models import CurrencyRecord
import csv
import os
from django.conf import settings
import datetime

def dbsetup():
    records = CurrencyRecord.objects.filter().count()
    if records<=0:
        basefile_name="Exchange_Rate_Report_"
        years=range(2012,2023)
        for year in years:
            print(str(settings.BASE_DIR)+'\\datasets\\'+basefile_name+str(year)+".csv")
            with open(str(settings.BASE_DIR)+'\\datasets\\'+basefile_name+str(year)+".csv") as csvfile:
                csvreader = csv.reader(csvfile)
                fields = next(csvreader)
                for row in csvreader:
                    row[0]=datetime.datetime.strptime(row[0],'%d-%b-%y')
                    row=[None if i=='' else i for i in row]
                    CurrencyRecord.objects.create(date=row[0],DZD=row[1],AUD=row[2],BHD=row[3],VEF=row[4],BWP=row[5],BRL=row[6],BND=row[7],CAD=row[8],CLP=row[9],CNY=row[10],COP=row[11],CZK=row[12],DKK=row[13],EUR=row[14],HUF=row[15],ISK=row[16],INR=row[17],IDR=row[18],IRR=row[19],ILS=row[20],JPY=row[21],KZT=row[22],KRW=row[23],KWD=row[24],LYD=row[25],MYR=row[26],MUR=row[27],MXN=row[28],NPR=row[29],NZD=row[30],NOK=row[31],OMR=row[32],PKR=row[33],PEN=row[34],PHP=row[35],PLN=row[36],QAR=row[37],RUB=row[38],SAR=row[39],SGD=row[40],ZAR=row[41],LKR=row[42],SEK=row[43],CHF=row[44],THB=row[45],TTD=row[46],TND=row[47],AED=row[48],GBP=row[49],USD=row[50],UYU=row[51])