import os
from django.shortcuts import render
from django.http import HttpResponse
import pymongo
from pymongo import MongoClient
from pathlib import Path
from dotenv import load_dotenv
load_dotenv()

#MONGODB_Connection
password = os.getenv("MONGODB_ROOT_PASSWORD")
client = pymongo.MongoClient('mongodb+srv://root:%s@kw-dreams.96yfr.mongodb.net/kw-dreams?retryWrites=true&w=majority' % password)
db = client['kw-dreams']

# Create your views here.
# Request -> Response
def say_hello(request):
    return render(
        request,
        'hello.html'
    )

