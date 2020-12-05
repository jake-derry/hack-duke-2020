from django.urls import path
from . import views

urlpatterns = [
    path('api/counselors/me/', views.CounselorView.as_view()),
    path('api/students/me/', views.StudentView.as_view()),
]
