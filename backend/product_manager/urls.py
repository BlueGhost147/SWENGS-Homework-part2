from django.conf.urls import url
from django.urls import path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view

from . import views

from rest_framework_jwt.views import obtain_jwt_token

schema_view = get_schema_view(
    openapi.Info(
        title='API',
        default_version='v1'
    ),
)

urlpatterns = [

    path('product/list', views.product_list),
    path('product/options', views.product_options),
    path('product/create', views.product_create),
    path('product/<int:product_id>/get', views.product_update),
    path('product/<int:product_id>/update', views.product_update),
    path('product/<int:product_id>/delete', views.product_update),

    path('stocklevel/<int:product_id>/product', views.stocklevel_product),
    path('stocklevel/create', views.stocklevel_create),
    path('stocklevel/<int:stocklevel_id>/get', views.stocklevel_update),
    path('stocklevel/<int:stocklevel_id>/update', views.stocklevel_update),
    path('stocklevel/<int:stocklevel_id>/delete', views.stocklevel_update),

    path('producer/list', views.producer_list),
    path('producer/options', views.producer_options),
    path('producer/create', views.producer_create),
    path('producer/<int:producer_id>/get', views.producer_update),
    path('producer/<int:producer_id>/update', views.producer_update),
    path('producer/<int:producer_id>/delete', views.producer_update),

    path('warehouse/list', views.warehouse_list),
    path('warehouse/options', views.warehouse_options),
    path('warehouse/create', views.warehouse_create),
    path('warehouse/<int:warehouse_id>/get', views.warehouse_update),
    path('warehouse/<int:warehouse_id>/update', views.warehouse_update),
    path('warehouse/<int:warehouse_id>/delete', views.warehouse_update),

    path('storage/options', views.storage_options),

    url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

    url(r'^api-token-auth/', obtain_jwt_token),
]
