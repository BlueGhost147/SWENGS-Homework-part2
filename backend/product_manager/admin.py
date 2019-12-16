from django.contrib import admin
from . import models
from product_manager.models import Product

class ProductAdmin(admin.ModelAdmin):
   list_display  = ('product_name', 'producer', 'expiration_date')
   search_fields = ('product_name', 'producer', 'expiration_date')
   sortable_by = ('product_name', 'producer', 'expiration_date')
admin.site.register(Product,ProductAdmin)