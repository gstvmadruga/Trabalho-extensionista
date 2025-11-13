from django.shortcuts import render

def projetos(request):
    return render(request, 'app_projetos/projetos.html')
