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


def voluntario_view(request):
    if request.method == 'POST':
        form = VoluntarioForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'app_main/voluntario.html', {
                'form': VoluntarioForm(),
                'success': True
            })
    else:
        form = VoluntarioForm()

    return render(request, 'app_main/voluntario.html', {'form': form})


from django.shortcuts import render
from .forms import ParceiroForm

def parceiro_view(request):
    form = ParceiroForm(request.POST or None)
    show_modal = False
    if request.method == 'POST' and form.is_valid():
        form.save()
        show_modal = True
        form = ParceiroForm()  # reset form

    context = {
        'form': form,
        'show_modal': show_modal,
    }
    return render(request, 'app_main/parceiro.html', context)




def doacao(request):
    return render(request, 'app_main/doacao.html')
