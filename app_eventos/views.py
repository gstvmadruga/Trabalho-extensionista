# app_eventos/views.py

from django.shortcuts import render

def lista_eventos(request):
    # O caminho deve ser simples, pois APP_DIRS: True aponta para aqui.
    return render(request, 'eventos.html', {})