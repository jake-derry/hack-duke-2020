from rest_framework import serializers

from users.models import Student, Counselor


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['counselor']


class CounselorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Counselor
        fields = ['code']
