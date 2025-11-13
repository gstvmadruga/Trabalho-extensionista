from django.shortcuts import render

def lista_projetos(request):

    return render(request, 'projetos.html', {})