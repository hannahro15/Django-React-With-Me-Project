from django.db import models

# Create your models here.
class Register(models.Model):
    user_name = models.CharField(max_length=30)
    email = models.CharField(max_length=40)
    password = models.CharField(max_length=30)
    dateofbirth = models.DateField(max_length=30)
    country = models.CharField(max_length=30)

def __str__(self):
    return f"{self.user_name}"