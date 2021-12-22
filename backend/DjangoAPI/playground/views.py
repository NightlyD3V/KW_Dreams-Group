from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
# Request -> Response

def say_hello(request):
    return HttpResponse('Hello, World!')
