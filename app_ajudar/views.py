from django.shortcuts import render

def como_ajudar(request):
    return render(request, 'ajudar/ajudar.html')