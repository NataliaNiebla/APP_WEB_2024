"""
URL configuration for e_rapida1 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from mainapp import views




urlpatterns = [
    path('', views.index, name='index'), 
    path('about/', views.about, name='about'),
    path('mision/', views.mision, name='mision'),
    path('vision/', views.vision, name='vision'),
    path('registro/', views.registro, name='registro'),
    path('login/', views.login_user, name='login'),
]



handler400 = 'mainapp.views.error_400'
handler404 = 'mainapp.views.error404'
handler404 = views.page404