from django.shortcuts import render
from .models import Goal
from .serializers import GoalSerializer
from rest_framework import generics


# Create your views here.
class GoalListCreate(generics.ListCreateAPIView):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer


class GoalRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer
