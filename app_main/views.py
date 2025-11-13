from django.shortcuts import render

def projetos(request):
    return render(request, 'app_main/projetos.html')

def eventos(request):
    return render(request, 'app_main/eventos.html')

def como_ajudar(request):
    return render(request, 'app_main/como-ajudar.html')

def contato(request):
    return render(request, 'app_main/contato.html')

def index(request):
    return render(request, 'app_main/index.html') 
