# app_main/views.py

from django.shortcuts import render

def index(request):
    return render(request, 'index.html', {})

def sobre(request):
    return render(request, 'sobre.html', {})

def contato(request):
    return render(request, 'contato.html', {})