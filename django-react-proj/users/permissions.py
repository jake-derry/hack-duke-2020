from rest_framework import permissions
from .models import *


class CounselorStudentAccess(permissions.BasePermission):
    message = "Must be this user's counselor"

    def has_permission(self, request, view):
        pk = view.kwargs['pk']
        user = view.request.user
        if not user.is_counselor:
            return user.is_counselor
        return Student.objects.get(pk=pk).counselor == Counselor.objects.get(user=user)


class CounselorTrackAccess(permissions.BasePermission):
    message = "Must be the counselor that created this track"

    def has_permission(self, request, view):
        pk = view.kwargs['pk']
        user = view.request.user
        if not user.is_counselor:
            return user.is_counselor
        return Track.objects.get(pk=pk).counselor == Counselor.objects.get(user=user)


class CounselorTemplateAccess(permissions.BasePermission):
    message = "Must be the counselor that created this template"

    def has_permission(self, request, view):
        pk = view.kwargs['pk']
        user = view.request.user
        if not user.is_counselor:
            return user.is_counselor
        return GoalTemplate.objects.get(pk=pk).track.counselor == Counselor.objects.get(user=user)


class CounselorGoalAccess(permissions.BasePermission):
    message = "Must be this student's counselor"

    def has_permission(self, request, view):
        pk = view.kwargs['pk']
        user = view.request.user
        if not user.is_counselor:
            return user.is_counselor
        return Goal.objects.get(pk=pk).student.counselor == Counselor.objects.get(user=user)
