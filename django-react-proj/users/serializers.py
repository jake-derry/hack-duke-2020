from rest_framework import serializers

from .models import *

import json

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'track', 'counselor']


class CounselorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Counselor
        fields = ['id', 'code']


class TrackSerializerNoGoals(serializers.ModelSerializer):
    #counselor = CounselorSerializer(many=True, read_only=True)

    class Meta:
        model = Track
        fields = ['pk', 'title', 'description']

    def create(self, validated_data):
        """
        Create and return a new Track instance, given the validated data.
        """
        user = self.context['request'].user
        t = Track.objects.create(**validated_data)
        Counselor.objects.get(user=user).tracks.add(t)
        return t


class StudentTrack(serializers.ModelSerializer):
    track = TrackSerializerNoGoals()

    class Meta:
        model = Student
        fields = ['track']


class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = ('id', 'title', 'description', 'completed')


    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        user = self.context['request'].user
        return Goal.objects.create(student=Student.objects.get(user=user), **validated_data)


class CounselorStudentGoalSerializer(GoalSerializer):
    def create(self, validated_data):
        student = Student.objects.get(id=self.context['view'].kwargs['pk'])
        return Goal.objects.create(student=student, **validated_data)


class TemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = GoalTemplate
        fields = ('title', 'description')


class CounselorTrackTemplateSerializer(TemplateSerializer):
    def create(self, validated_data):
        track = Track.objects.get(id=self.context['view'].kwargs['pk'])
        user = self.context['view'].request.user
        return track.add_new_template(**validated_data)


class TrackSerializerWithGoals(serializers.ModelSerializer):
    templates = TemplateSerializer(many=True, read_only=True)

    class Meta:
        model = Track
        fields = ('title', 'description', 'templates')