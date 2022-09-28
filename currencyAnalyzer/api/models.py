from django.db import models

# Create your models here.
class CurrencyRecord(models.Model):
    date = models.DateField(primary_key=True)
    inr = models.FloatField()
    usd = models.FloatField(null=False, blank=False, default=1)

    def __str__(self):
        return self.date
