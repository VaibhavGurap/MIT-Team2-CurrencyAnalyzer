from rest_framework import serializers
from .models import CurrencyRecord

class CurrencySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CurrencyRecord
        fields = ('date','inr','usd')