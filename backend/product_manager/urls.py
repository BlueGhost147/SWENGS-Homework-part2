from django.urls import path
from product_manager import views

urlpatterns = [
    path('products/',views.product_list),
    path('products/<int:id>/',views.product_update),
]