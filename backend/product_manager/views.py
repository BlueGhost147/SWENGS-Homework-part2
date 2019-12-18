from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from product_manager.serializers import ProductSerializer, ProducerSerializer, WarehouseSerializer
from product_manager.models import Product, Producer, Warehouse


# GET => List all products
# POST => Create a new product
@api_view(['GET', 'POST'])
def product_list(request):
    if request.method == 'GET':
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# GET => Return the product of the given id
# PUT => Update a product
# DELETE => Delete the product
@api_view(['GET', 'PUT', 'DELETE'])
def product_update(request, id):

    # Get the object to modify
    try:
        product = Product.objects.get(pk = id)
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


# Return a list of all the producers
@api_view(['GET'])
def producer_list(request):
    producer = Producer.objects.all()
    serializer = ProducerSerializer(producer, many=True)
    return Response(serializer.data)

# Return a list of all the warehouses
@api_view(['GET'])
def warehouse_list(request):
    warehouses = Warehouse.objects.all()
    serializer = WarehouseSerializer(warehouses, many=True)
    return Response(serializer.data)
