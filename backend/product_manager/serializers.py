from rest_framework import serializers
from product_manager.models import Product, Producer, Warehouse, StockLevel


class ProductSerializer(serializers.ModelSerializer):
    storage_display = serializers.SerializerMethodField()
    producer_display = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = "__all__"

    def get_storage_display(self, obj):
        return obj.get_storage_display()

    def get_producer_display(self, obj):
        return obj.producer.name


class ProductOptionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'product_name']


class ProducerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producer
        fields = ['id', 'name', 'address']


class WarehouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Warehouse
        fields = "__all__"


class StockLevelSerializer(serializers.ModelSerializer):
    warehouse_display = serializers.SerializerMethodField()
    product_display = serializers.SerializerMethodField()

    class Meta:
        model = StockLevel
        fields = "__all__"

    def get_warehouse_display(self, obj):
        return obj.warehouse.name

    def get_product_display(self, obj):
        return obj.product.product_name


class StockLevelSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockLevel
        fields = "__all__"
