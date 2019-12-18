from django.urls import path
from product_manager import views

urlpatterns = [
    path('products/', views.product_list),
    path('products/<int:id>/', views.product_update),
    path('producer/', views.producer_list),
    path('warehouse/', views.warehouse_list),
]