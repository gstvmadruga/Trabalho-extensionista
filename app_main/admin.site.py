from django.contrib.admin import AdminSite
from django.contrib import admin
from app_main.models import Voluntario, Projeto, Comunicado

class ProjetoPedalarAdminSite(AdminSite):
    site_header = "Administração Projeto Pedalar"
    site_title = "Projeto Pedalar"
    index_title = "Painel de Controle"

    def get_app_list(self, request):
        app_list = super().get_app_list(request)
        # Coloca o app auth primeiro
        app_list.sort(key=lambda x: 0 if x['app_label'] == 'auth' else 1)
        return app_list

admin_site = ProjetoPedalarAdminSite(name='projetopedalar')

# Registra seus modelos nesse admin customizado
admin_site.register(Voluntario)
admin_site.register(Projeto)
admin_site.register(Comunicado)
