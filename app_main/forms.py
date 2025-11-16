from django import forms
from .models import Voluntario, Parceiro

class VoluntarioForm(forms.ModelForm):
    class Meta:
        model = Voluntario
        fields = ['nome', 'email', 'telefone', 'mensagem']


class ParceiroForm(forms.ModelForm):
    class Meta:
        model = Parceiro
        fields = ['nome', 'email', 'telefone', 'empresa', 'cnpj' ,'mensagem', ]
        widgets = {
            'cnpj': forms.TextInput(attrs={'placeholder': '00.000.000/0000-00'}),
        }
