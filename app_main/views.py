from django.shortcuts import render

def index(request):
    return render(request, 'app_main/index.html')

def sobre(request):
    return render(request, 'app_main/sobre.html')

def projetos(request):
    return render(request, 'projetos/projetos.html') 

def contato(request):
    return render(request, 'app_main/contato.html')

def contato(request):
    return render(request, 'eventos/eventos.html')