from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('menu', views.menu_items),
    path('menu/<int:pk>', views.SingleMenuItemView.as_view()),
    path('categories', views.categories),
]