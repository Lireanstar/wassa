from django.db import models

# Create your models here.

class Line(models.Model):
    name = models.TextField()
    context = models.TextField()
    label = models.IntegerField()
    change = models.BooleanField()