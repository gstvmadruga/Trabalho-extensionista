from django.shortcuts import render

def como_ajudar(request):
    return render(request, 'como_ajudar.html', {})