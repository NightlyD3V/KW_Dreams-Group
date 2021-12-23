from django.shortcuts import render
from django.http import HttpResponse
from pymongo import MongoClient

#Globals 
client = pymongo.MongoClient('connection_string')
db = client['db_name']
# Create your views here.
# Request -> Response

def say_hello(request):
    return render(
        request,
        'hello.html'
    )

