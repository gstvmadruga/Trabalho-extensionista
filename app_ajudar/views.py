# app_ajudar/views.py

from django.shortcuts import render

def como_ajudar(request):
    return render(request, 'como-ajudar.html', {})