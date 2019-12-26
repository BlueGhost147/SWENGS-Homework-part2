from django.db import models


class ProductManager(models.Manager):
    pass


class ProducerManager(models.Manager):
    pass


class WarehouseManager(models.Manager):
    pass


class StockLevelManager(models.Manager):
    pass


class Producer(models.Model):
    name = models.TextField()
    address = models.TextField(null=True)
    objects = ProducerManager()

    class Meta:
        verbose_name_plural = "producers"

    def __str__(self):
        return self.name


class Warehouse(models.Model):
    name = models.TextField()
    description = models.TextField(null=True)
    address = models.TextField(null=True)
    # Area in m2
    area = models.PositiveIntegerField()
    externalOwner = models.BooleanField(default=False)

    objects = WarehouseManager()

    class Meta:
        verbose_name_plural = "warehouses"

    def __str__(self):
        return self.name


class Product(models.Model):
    product_name = models.TextField()
    producer = models.ForeignKey(Producer, on_delete=models.CASCADE)
    expiration_date = models.DateField(null=True)
    dangerous = models.BooleanField(default=False)

    objects = ProductManager()

    STORAGE_TYPES = (
        ('n', 'Normal'),
        ('c', 'Fridge'),
        ('f', 'Freezer'),
        ('o', 'Other'),
    )
    storage = models.CharField(max_length=1, choices=STORAGE_TYPES)

    class Meta:
        verbose_name_plural = "products"

    def __str__(self):
        return self.product_name


class StockLevel(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    warehouse = models.ForeignKey(Warehouse, on_delete=models.CASCADE)
    amount = models.PositiveIntegerField()

    objects = StockLevelManager()
