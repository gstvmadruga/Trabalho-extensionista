from django.shortcuts import render

def index(request):
    return render(request, 'app_main/index.html')

def sobre(request):
    return render(request, 'app_main/sobre.html')

def projetos(request):
    return render(request, 'app_main/projetos.html')

def eventos(request):
    return render(request, 'app_main/eventos.html')

def como_ajudar(request):
    return render(request, 'app_main/como-ajudar.html')

def contato(request):
    return render(request, 'app_main/contato.html')

def voluntario(request):
    return render(request, 'app_main/voluntario.html')

def parceiro(request):
    return render(request, 'app_main/parceiro.html')
