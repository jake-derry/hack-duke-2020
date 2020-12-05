from django.urls import path
from . import views

urlpatterns = [
    path('api/goals/', views.GoalListCreate.as_view()),
    path('api/goals/<int:pk>', views.GoalRetrieveUpdateDestroy.as_view()),
]
