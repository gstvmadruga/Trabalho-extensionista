from django.shortcuts import render, redirect
from .forms import VoluntarioForm, ParceiroForm


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
    if request.method == 'POST':
        form = VoluntarioForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'app_main/voluntario.html', {
                'form': VoluntarioForm(),   # limpa o form
                'show_modal': True         # ativa o modal
            })
    else:
        form = VoluntarioForm()

    return render(request, 'app_main/voluntario.html', {'form': form})


def parceiro(request):
    if request.method == 'POST':
        form = ParceiroForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'app_main/parceiro.html', {
                'form': ParceiroForm(),
                'show_modal': True
            })
    else:
        form = ParceiroForm()

    return render(request, 'app_main/parceiro.html', {'form': form})


def doacao(request):
    return render(request, 'app_main/doacao.html')
