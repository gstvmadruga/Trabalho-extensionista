from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('sobre/', views.sobre, name='sobre'),
    path('projetos/', views.projetos, name='projetos'),  # obrigatória para usar {% url 'projetos' %}
]