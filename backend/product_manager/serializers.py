from rest_framework import serializers
from product_manager.models import Product, Producer, Warehouse


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['pk', 'product_name', 'producer', 'warehouse', 'storage', 'expiration_date']


class ProducerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producer
        fields = ['pk', 'name', 'address']


class WarehouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Warehouse
        fields = ['pk', 'name', 'address', 'area']
