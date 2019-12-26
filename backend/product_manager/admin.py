from django.contrib import admin
from product_manager.models import Product, Producer, Warehouse, StockLevel


class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_name', 'producer', 'expiration_date')
    search_fields = ('product_name', 'producer', 'expiration_date')
    sortable_by = ('product_name', 'producer', 'expiration_date')


class ProducerAdmin(admin.ModelAdmin):
    list_display = ('name', 'address')
    search_fields = ('name', 'address')
    sortable_by = ('name', 'address')


class WarehouseAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'area', 'externalOwner', 'description')
    search_fields = ('name', 'address', 'area', 'externalOwner', 'description')
    sortable_by = ('name', 'address', 'area', 'externalOwner', 'description')


class StockLevelAdmin(admin.ModelAdmin):
    pass


admin.site.register(Product, ProductAdmin)
admin.site.register(Producer, ProducerAdmin)
admin.site.register(Warehouse, WarehouseAdmin)
admin.site.register(StockLevel, StockLevelAdmin)
