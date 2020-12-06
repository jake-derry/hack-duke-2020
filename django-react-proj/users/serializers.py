from rest_framework import serializers

from .models import Student, Counselor, Goal


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['counselor']


class CounselorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Counselor
        fields = ['code']


class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = ('pk', 'title', 'description', 'completed')

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        user = self.context['request'].user
        return Goal.objects.create(student=Student.objects.get(user=user), **validated_data)
