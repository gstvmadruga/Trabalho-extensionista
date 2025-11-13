from django.contrib import admin
from django.urls import path, include
from app_main import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
     path('', include('app_main.urls')),
    path('sobre/', views.sobre, name='sobre'),
    path('contato/', views.contato, name='contato'),
    path('projetos/', include('app_projetos.urls')),
    path('', views.projetos, name='projetos'),
    
]

