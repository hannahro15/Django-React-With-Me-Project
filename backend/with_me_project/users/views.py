from django.shortcuts import render, request
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from .models import Register

# Create your views here.

def registration(request):
    if request.method=="POST":
        post=Register()
        post.user_name=request.POST['username']
        post.email=request.POST['email']
        post.dateofbirth=request.POST['date of birth']
        post.country=request.POST['country']
        post.save()
        return render(request, '/Register.jsx')
    else:
        return render(request, '/Register.jsx')


