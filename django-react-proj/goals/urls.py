from django.urls import path
from . import views

urlpatterns = [
    path('api/goal/lc/', views.GoalListCreate.as_view()),
    path('api/goal/<int:pk>', views.GoalRetrieveUpdateDestroy.as_view()),
]