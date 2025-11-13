from django.shortcuts import render

def como_ajudar(request):
    return render(request, 'app_ajudar/como_ajudar.html')