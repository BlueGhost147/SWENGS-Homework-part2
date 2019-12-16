from rest_framework import serializers
from product_manager.models import Product

class ProductSerializer(serializers.ModelSerializer):
   class Meta:
       model = Product
       fields = ['pk','product_name','producer','storage','expiration_date']