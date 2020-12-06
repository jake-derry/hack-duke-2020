from django.urls import path
from . import views

urlpatterns = [
    path('api/counselors/me/', views.CounselorView.as_view()),
    path('api/counselors/me/tracks/', views.CounselorTrackLC.as_view()),
    path('api/counselors/me/tracks/<int:pk>', views.CounselorTrackRUD.as_view()),
    path('api/students/me/', views.StudentView.as_view()),
    path('api/goals/', views.GoalListCreate.as_view()),
    path('api/goals/<int:pk>', views.GoalRetrieveUpdateDestroy.as_view()),
    path('api/students/me/goals/', views.StudentGoalListCreate.as_view()),
    path('api/students/me/goals/<int:pk>', views.StudentGoalRetrieveUpdateDestroy.as_view()),
]
