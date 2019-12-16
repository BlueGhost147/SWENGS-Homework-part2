from django.db import models

class ProductManager(models.Manager):
    pass

class Product(models.Model):

    product_name = models.TextField()
    producer = models.TextField()
    expiration_date = models.DateField()
    objects = ProductManager()

    STORAGE_TYPES = (
        ('n' , 'Normal'),
        ('c' , 'Fridge'),
        ('f' , 'Frezzer'),
        ('o' , 'Other'),
    )
    storage = models.CharField(max_length=1,choices=STORAGE_TYPES)

    class Meta:
        verbose_name_plural = "products"

    def __str__(self):
        return self.product_name