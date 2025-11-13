from django.urls import path
from . import views

app_name = 'ajudar' 

urlpatterns = [
    path('', views.como_ajudar, name='como_ajudar'),
]