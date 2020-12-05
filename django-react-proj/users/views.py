from rest_framework.response import Response
from rest_framework.views import APIView

from users.models import Counselor, Student
from users.serializers import CounselorSerializer, StudentSerializer


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
