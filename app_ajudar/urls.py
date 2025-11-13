from django.urls import path
from . import views

urlpatterns = [
    path('', views.como_ajudar, name='como_ajudar'),
]
