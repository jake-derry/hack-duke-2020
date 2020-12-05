from rest_framework import serializers

from users.models import Student
from .models import Goal


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
