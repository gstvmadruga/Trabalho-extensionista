from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    # PRINCIPAL
    path('', include('app_main.urls')),

    # OUTROS APPS
    path('projetos/', include('app_projetos.urls')),
    path('eventos/', include('app_eventos.urls')),
    path('como-ajudar/', include('app_ajudar.urls')),
]