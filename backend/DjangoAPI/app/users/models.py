from djongo import models

# Create your models here.
class NewUser(models.Model):
    email = models.CharField(max_length=100)
    user_name = models.CharField(max_length=100)
    password = models.CharField(max_length=100) #Salt Password