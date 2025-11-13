from django.shortcuts import render

def index(request):
    return render(request, 'main/index.html')

def sobre(request):
    return render(request, 'main/sobre.html')

def projetos(request):
    return render(request, 'main/projetos.html') 