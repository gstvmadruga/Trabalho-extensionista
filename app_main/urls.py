from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("sobre/", views.sobre, name="sobre"),
    path("contato/", views.contato, name="contato"),
    path("projetos/", views.projetos, name="projetos"),
    path("eventos/", views.eventos, name="eventos"),
    path("como-ajudar/", views.como_ajudar, name="como_ajudar"),
]
