from django.urls import path
from . import views

urlpatterns = [
    path('api/counselors/me/', views.CounselorView.as_view()),
    path('api/counselors/me/tracks/', views.CounselorTrackLC.as_view()),
    path('api/counselors/me/students/', views.CounselorStudentsList.as_view()),
    path('api/students/me/', views.StudentView.as_view()),
    path('api/goals/', views.GoalListCreate.as_view()),
    path('api/goals/<int:pk>', views.GoalRetrieveUpdateDestroy.as_view()),
    path('api/students/me/goals/', views.StudentGoalListCreate.as_view()),
    path('api/students/me/goals/<int:pk>', views.StudentGoalRetrieveUpdateDestroy.as_view()),
    path('api/students/<int:pk>/', views.CounselorStudentRD.as_view()),
    path('api/students/<int:pk>/goals/', views.CounselorStudentGoalsLC.as_view()),
    path('api/students/<int:pk2>/goals/<int:pk>', views.CounselorGoalRUD),
    path('api/tracks/<int:pk>', views.CounselorTrackView.as_view()),
    path('api/tracks/<int:pk>/edit/', views.CounselorTrackRUD.as_view()),
    path('api/tracks/<int:pk>/templates/', views.CounselorTrackTemplatesLC.as_view()),
    path('api/tracks/<int:pk2>/templates/<int:pk>', views.CounselorTemplateRUD.as_view()),
]