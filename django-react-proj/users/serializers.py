from rest_framework import serializers

from .models import Student, Counselor, Goal
from goals.models import Track

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['counselor']


class CounselorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Counselor
        fields = ['code']


class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = ['title', 'description']


class CounselorTrackSerializer(serializers.ModelSerializer):
    tracks = TrackSerializer(many=True, read_only=False)

    class Meta:
        model = Counselor
        fields = ['tracks']

class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = ('title', 'description', 'completed')

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        user = self.context['request'].user
        return Goal.objects.create(student=Student.objects.get(user=user), **validated_data)
