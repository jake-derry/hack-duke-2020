from rest_framework import permissions
from .models import AppUser, Student, Counselor


class CounselorAccessPermission(permissions.BasePermission):
    message = "Must be this user's counselor"

    def has_permission(self, request, view):
        pk = view.kwargs['pk']
        user = view.request.user  # this doesn't work currently
        """TODO: Verify that the current user is a counselor and this page
        is for one of their students"""
        if not user.is_counselor:
            return user.is_counselor
        return Student.objects.get(pk=pk).counselor == Counselor.objects.get(user=user)