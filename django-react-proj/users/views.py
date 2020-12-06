from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, permissions

from users.models import *
from users.serializers import *
from .permissions import *


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


class CounselorTrackLC(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = TrackSerializerNoGoals

    def get_queryset(self):
        user = self.request.user
        counselor = Counselor.objects.get(user=user)
        return Track.objects.filter(counselor=counselor)


class CounselorTrackView(generics.RetrieveDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated, CounselorTrackAccess]
    serializer_class = TrackSerializerWithGoals

    def get_queryset(self):
        user = self.request.user
        counselor = Counselor.objects.get(user=user)
        return Track.objects.filter(counselor=counselor)


class CounselorTrackRUD(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated, CounselorTrackAccess]
    serializer_class = TrackSerializerNoGoals

    def get_queryset(self):
        user = self.request.user
        counselor = Counselor.objects.get(user=user)
        return Track.objects.filter(counselor=counselor)


class CounselorTrackTemplatesLC(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated, CounselorTrackAccess]
    serializer_class = CounselorTrackTemplateSerializer

    def get_queryset(self):
        track = Track.objects.get(id=self.kwargs['pk'])
        return GoalTemplate.objects.filter(track=track)


class CounselorTemplateRUD(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated, CounselorTemplateAccess]
    serializer_class = TemplateSerializer

    def get_queryset(self):
        track = Track.objects.get(id=self.kwargs['pk2'])
        return GoalTemplate.objects.filter(track=track)


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


class CounselorStudentsList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = StudentSerializer

    def get_queryset(self):
        user = self.request.user
        return Student.objects.filter(counselor=Counselor.objects.get(user=user))


class CounselorStudentRD(generics.RetrieveDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated, CounselorStudentAccess]
    serializer_class = StudentSerializer

    def get_queryset(self):
        counselor = Counselor.objects.get(user=self.request.user)
        return Student.objects.filter(counselor=counselor)


class CounselorStudentGoalsLC(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated, CounselorStudentAccess]
    serializer_class = CounselorStudentGoalSerializer

    def get_queryset(self, *args, **kwargs):
        student = Student.objects.get(id=self.kwargs['pk'])
        return Goal.objects.filter(student=student)


class CounselorGoalRUD(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated, CounselorGoalAccess]
    serializer_class = GoalSerializer

    def get_queryset(self, *args, **kwargs):
        student = Student.objects.get(id=self.kwargs['pk2'])
        return Goal.objects.filter(student=student)

class StudentChooseTrack(APIView):

    def get(self, request):
        student = Student.objects.get(user=request.user)
        serializer = StudentTrack(student)
        return Response(serializer.data)

    def patch(self, request, **validated_data):
        track = Track.objects.get(track=validated_data['track'])
        student = Student.objects.get(user=request.user)
        student.track = track
        serializer = StudentTrack(student)
        return Response(serializer.data)