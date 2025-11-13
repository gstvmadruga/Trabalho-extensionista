from django.shortcuts import render

def index(request):
    # O caminho deve ser simples se o arquivo estiver em /templates/
    return render(request, 'index.html', {}) 

def sobre(request):
    return render(request, 'sobre.html', {})

def contato(request):
    return render(request, 'contato.html', {})