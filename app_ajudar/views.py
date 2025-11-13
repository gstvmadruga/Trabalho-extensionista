from django.shortcuts import render

def ajudar(request):
    return render(request, 'ajudar/ajudar.html')