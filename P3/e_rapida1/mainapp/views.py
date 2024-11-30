from django.shortcuts import render

# Create your views here.   Una función por template (maqueta)-(LOGICA)= Vista

def index(request):
    mensaje = 'Hola soy un mensaje'
    return render(request, 'mainapp/index.html', {
        'title': 'Inicio',
        'content': '.::Bienvenidos a la pagina principal::.',
        'mensaje': mensaje
        })
    
def about(request):
    return render(request, 'mainapp/about.html', {
        'title': 'Acerca de',
        'content': 'Somos un equipo de desarrollo de SW'
    })
    
def mision(request):
    return render(request, 'mainapp/mision.html', {
        'title': 'Mision',
        'content': 'Mision de la empresa'
    })
    
def vision(request):
    return render(request, 'mainapp/vision.html', {
        'title': 'Vision',
        'content': 'Vision de la empresa'
    })
    
def registro(request):
    return render(request, 'mainapp/vision.html', {
        'title': 'registro',
        'content': 'registro de usuario'
        })

def login_user(request):
    return render(request, 'mainapp/vision.html', {
        'title': 'login',
        'content': 'Vista de login'
        })


def page404(request, exception):
    return render(request, 'mainapp/error404.html')
