from django.contrib.auth.decorators import permission_required
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from product_manager.serializers import ProductSerializer, ProducerSerializer, WarehouseSerializer, ProductOptionsSerializer, StockLevelSerializer
from product_manager.models import Product, Producer, Warehouse, StockLevel


# Product
@api_view(['GET'])
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def product_options(request):
    products = Product.objects.all()
    serializer = ProductOptionsSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def product_create(request):
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# GET => Return the product of the given id
# PUT => Update a product
# DELETE => Delete the product
@api_view(['GET', 'PUT', 'DELETE'])
def product_update(request, product_id):

    # Get the object to modify
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProductSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'DELETE':
        product.delete()
        return Response(status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Producer
# Return a list of all the producers
@api_view(['GET'])
def producer_list(request):
    producers = Producer.objects.all()
    serializer = ProducerSerializer(producers, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def producer_options(request):
    producers = Producer.objects.all()
    serializer = ProducerSerializer(producers, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def producer_create(request):
    serializer = ProducerSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# GET => Return the producer of the given id
# PUT => Update a producer
# DELETE => Delete the producer
@api_view(['GET', 'PUT', 'DELETE'])
def producer_update(request, producer_id):

    # Get the object to modify
    try:
        producer = Producer.objects.get(id=producer_id)
    except Producer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProducerSerializer(producer)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        serializer = ProducerSerializer(producer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'DELETE':
        producer.delete()
        return Response(status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Warehouse
# Return a list of all the warehouses
# Return a list of all the warehouses
@api_view(['GET'])
def warehouse_list(request):
    warehouses = Warehouse.objects.all()
    serializer = WarehouseSerializer(warehouses, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def warehouse_options(request):
    warehouses = Warehouse.objects.all()
    serializer = WarehouseSerializer(warehouses, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def warehouse_create(request):
    serializer = WarehouseSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# GET => Return the warehouse of the given id
# PUT => Update a warehouse
# DELETE => Delete the warehouse
@api_view(['GET', 'PUT', 'DELETE'])
def warehouse_update(request, warehouse_id):

    # Get the object to modify
    try:
        warehouse = Warehouse.objects.get(id=warehouse_id)
    except Warehouse.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = WarehouseSerializer(warehouse)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        serializer = WarehouseSerializer(warehouse, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'DELETE':
        warehouse.delete()
        return Response(status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Storage
# Return a list of all the storage options
@api_view(['GET'])
def storage_options(request):
    storage_list = Product.STORAGE_TYPES
    return Response(storage_list)


# Stocklevel
@api_view(['GET'])
def stocklevel_product(request, product_id):
    stocklevel = StockLevel.objects.filter(product__id=product_id)
    serializer = StockLevelSerializer(stocklevel, many=True)
    return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def stocklevel_update(request, stocklevel_id):

    # Get the object to modify
    try:
        stocklevel = StockLevel.objects.get(id=stocklevel_id)
    except StockLevel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = StockLevelSerializer(stocklevel)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        serializer = StockLevelSerializer(stocklevel, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'DELETE':
        stocklevel.delete()
        return Response(status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
