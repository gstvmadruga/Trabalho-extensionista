# app_eventos/views.py

from django.shortcuts import render

def lista_eventos(request):
    return render(request, 'eventos.html', {})