from django.contrib import admin
from django.contrib.admin import AdminSite
from .models import Voluntario, Projeto, Comunicado

# Personaliza títulos
admin.site.site_header = "Administração Projeto Pedalar"        
admin.site.site_title = "Projeto Pedalar"                        
admin.site.index_title = "Painel de Controle"   

# Sobrescreve a função get_app_list para ordenar os apps
original_get_app_list = admin.AdminSite.get_app_list

def custom_get_app_list(self, request):
    app_list = original_get_app_list(self, request)
    # Coloca o app auth (usuários e grupos) no topo
    app_list.sort(key=lambda x: 0 if x['app_label'] == 'auth' else 1)
    return app_list

admin.AdminSite.get_app_list = custom_get_app_list

# Registro dos modelos
@admin.register(Voluntario)
class VoluntarioAdmin(admin.ModelAdmin):
    list_display = ('nome', 'email', 'telefone', 'data_cadastro')
    search_fields = ('nome', 'email')
    list_filter = ('data_cadastro',)
    

@admin.register(Projeto)
class ProjetoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'data_inicio', 'data_fim', 'ativo')
    list_filter = ('ativo',)
    search_fields = ('titulo', 'descricao')

@admin.register(Comunicado)
class ComunicadoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'data_criacao', 'publicado')
    list_filter = ('publicado',)
    search_fields = ('titulo', 'mensagem')
