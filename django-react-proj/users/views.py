from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, permissions

from users.models import Counselor, Student, Goal
from users.serializers import CounselorSerializer, StudentSerializer, GoalSerializer, CounselorTrackSerializer

class CounselorView(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):
        counselor = Counselor.objects.get(user=request.user)
        serializer = CounselorSerializer(counselor)
        return Response(serializer.data)


class StudentView(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):
        student = Student.objects.get(user=request.user)
        serializer = StudentSerializer(student)
        return Response(serializer.data)


class CounselorTracksView(APIView):
    """
        List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):
        counselor = Counselor.objects.get(user=request.user)
        serializer = CounselorTrackSerializer(counselor)
        return Response(serializer.data)


class GoalListCreate(generics.ListCreateAPIView):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer


class GoalRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer


class StudentGoalListCreate(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = GoalSerializer

    def get_queryset(self):
        user = self.request.user
        return Goal.objects.filter(student=Student.objects.get(user=user))


class StudentGoalRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = GoalSerializer

    def get_queryset(self):
        user = self.request.user
        return Goal.objects.filter(student=Student.objects.get(user=user))