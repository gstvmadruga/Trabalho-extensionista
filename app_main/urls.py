from django.urls import path
from . import views

app_name = 'app_main'

urlpatterns = [
    path('', views.index, name='index'),
    path('sobre/', views.sobre, name='sobre'),
    path('projetos/', views.projetos, name='projetos'),
    path('eventos/', views.eventos, name='eventos'),
    path('como-ajudar/', views.como_ajudar, name='como_ajudar'),
    path('contato/', views.contato, name='contato'),
]

