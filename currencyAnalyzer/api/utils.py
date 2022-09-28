from .models import CurrencyRecord
import csv
import os
from django.conf import settings
import datetime

def dbsetup():
    records = CurrencyRecord.objects.filter().count()
    if records<=0:
        basefile_name="Exchange_Rate_Report_"
        years = range(2012, 2023)
        for year in years:
            print(year)
            print(str(settings.BASE_DIR) + '\\datasets\\' + basefile_name + str(year) + ".csv")
            with open(str(settings.BASE_DIR) + '\\datasets\\' + basefile_name + str(year) + ".csv") as csvfile:
                csvreader = csv.reader(csvfile)
                fields = next(csvreader)
                for row in csvreader:
                    row[0] = datetime.datetime.strptime(row[0], '%d-%b-%y')
                    row = [None if i == '' else i for i in row]
                    if year < 2018:
                        CurrencyRecord.objects.create(date=row[0], DZD=row[1], AUD=row[2], BHD=row[3], VEF=row[4],
                                                      BWP=row[5], BRL=row[6], BND=row[7], CAD=row[8], CLP=row[9],
                                                      CNY=row[10], COP=row[11], CZK=row[12], DKK=row[13], EUR=row[14],
                                                      HUF=row[15], ISK=row[16], INR=row[17], IDR=row[18], IRR=row[19],
                                                      ILS=row[20], JPY=row[21], KZT=row[22], KRW=row[23], KWD=row[24],
                                                      LYD=row[25], MYR=row[26], MUR=row[27], MXN=row[28], NPR=row[29],
                                                      NZD=row[30], NOK=row[31], OMR=row[32], PKR=row[33], PEN=row[34],
                                                      PHP=row[35], PLN=row[36], QAR=row[37], RUB=row[38], SAR=row[39],
                                                      SGD=row[40], ZAR=row[41], LKR=row[42], SEK=row[43], CHF=row[44],
                                                      THB=row[45], TTD=row[46], TND=row[47], AED=row[48], GBP=row[49],
                                                      USD=row[50], UYU=row[51])
                    elif year==2018:
                        CurrencyRecord.objects.create(date=row[0], DZD=row[1], AUD=row[2], BHD=row[3], VEF=row[4], VES=row[5],
                                                      BWP=row[6], BRL=row[7], BND=row[8], CAD=row[9], CLP=row[10],
                                                      CNY=row[11], COP=row[12], CZK=row[13], DKK=row[14], EUR=row[15],
                                                      HUF=row[16], ISK=row[17], INR=row[18], IDR=row[19], IRR=row[20],
                                                      ILS=row[21], JPY=row[22], KZT=row[23], KRW=row[24], KWD=row[25],
                                                      LYD=row[26], MYR=row[27], MUR=row[28], MXN=row[29], NPR=row[30],
                                                      NZD=row[31], NOK=row[32], OMR=row[33], PKR=row[34], PEN=row[35],
                                                      PHP=row[36], PLN=row[37], QAR=row[38], RUB=row[39], SAR=row[40],
                                                      SGD=row[41], ZAR=row[42], LKR=row[43], SEK=row[44], CHF=row[45],
                                                      THB=row[46], TTD=row[47], TND=row[48], AED=row[49], GBP=row[50],
                                                      USD=row[51], UYU=row[52])
                    else:
                        if year<2022:
                            CurrencyRecord.objects.create(date=row[0], DZD=row[1], AUD=row[2], BWP=row[3], BRL=row[4],
                                                      BND=row[5], CAD=row[6], CLP=row[7], CNY=row[8], COP=row[9],
                                                      CZK=row[10], DKK=row[11], EUR=row[12], INR=row[13], ILS=row[14],
                                                      JPY=row[15], KRW=row[16], KWD=row[17], MYR=row[18], MUR=row[19],
                                                      MXN=row[20], NZD=row[21], NOK=row[22], OMR=row[23], PEN=row[24],
                                                      PHP=row[25], PLN=row[26], QAR=row[27], RUB=row[28], SAR=row[29],
                                                      SGD=row[30], ZAR=row[31], SEK=row[32], CHF=row[33], THB=row[34],
                                                      TTD=row[35], AED=row[36], GBP=row[37], USD=row[38], UYU=row[39])
                        else:
                            CurrencyRecord.objects.create(date=row[0], DZD=row[1], AUD=row[2], BWP=row[3], BRL=row[4],
                                                          BND=row[5], CAD=row[6], CLP=row[7], CNY=row[8],
                                                          CZK=row[9], DKK=row[10], EUR=row[11], INR=row[12],
                                                          ILS=row[13],
                                                          JPY=row[14], KRW=row[15], KWD=row[16], MYR=row[17],
                                                          MUR=row[18],
                                                          MXN=row[19], NZD=row[20], NOK=row[21], OMR=row[22],
                                                          PEN=row[23],
                                                          PHP=row[24], PLN=row[25], QAR=row[26], RUB=row[27],
                                                          SAR=row[28],
                                                          SGD=row[29], ZAR=row[30], SEK=row[31], CHF=row[32],
                                                          THB=row[33],
                                                          TTD=row[34], AED=row[35], GBP=row[36], USD=row[37],
                                                          UYU=row[38])
        """years=range(2019,2023)
        for year in years:
            print(year)
            print(str(settings.BASE_DIR)+'\\datasets\\'+basefile_name+str(year)+".csv")
            with open(str(settings.BASE_DIR)+'\\datasets\\'+basefile_name+str(year)+".csv") as csvfile:
                csvreader = csv.reader(csvfile)
                fields = next(csvreader)
                for row in csvreader:
                    row[0]=datetime.datetime.strptime(row[0],'%d-%b-%y')
                    row=[None if i=='' else i for i in row]
                    if year<2019:
                        CurrencyRecord.objects.create(date=row[0],DZD=row[1],AUD=row[2],BHD=row[3],VEF=row[4],BWP=row[5],BRL=row[6],BND=row[7],CAD=row[8],CLP=row[9],CNY=row[10],COP=row[11],CZK=row[12],DKK=row[13],EUR=row[14],HUF=row[15],ISK=row[16],INR=row[17],IDR=row[18],IRR=row[19],ILS=row[20],JPY=row[21],KZT=row[22],KRW=row[23],KWD=row[24],LYD=row[25],MYR=row[26],MUR=row[27],MXN=row[28],NPR=row[29],NZD=row[30],NOK=row[31],OMR=row[32],PKR=row[33],PEN=row[34],PHP=row[35],PLN=row[36],QAR=row[37],RUB=row[38],SAR=row[39],SGD=row[40],ZAR=row[41],LKR=row[42],SEK=row[43],CHF=row[44],THB=row[45],TTD=row[46],TND=row[47],AED=row[48],GBP=row[49],USD=row[50],UYU=row[51])
                    else:
                        CurrencyRecord.objects.create(date=row[0],DZD=row[1],AUD=row[2],BWP=row[3],BRL=row[4],BND=row[5],CAD=row[6],CLP=row[7],CNY=row[8],COP=row[9],CZK=row[10],DKK=row[11],EUR=row[12],INR=row[13],ILS=row[14],JPY=row[15],KRW=row[16],KWD=row[17],MYR=row[18],MUR=row[19],MXN=row[20],NZD=row[21],NOK=row[22],OMR=row[23],PEN=row[24],PHP=row[25],PLN=row[26],QAR=row[27],RUB=row[28],SAR=row[29],SGD=row[30],ZAR=row[31],SEK=row[32],CHF=row[33],THB=row[34],TTD=row[35],AED=row[36],GBP=row[37],USD=row[38],UYU=row[39])
"""