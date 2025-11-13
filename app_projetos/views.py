from django.shortcuts import render

def projetos(request):
    return render(request, 'projetos/projetos.html')