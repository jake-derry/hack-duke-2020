from rest_framework import permissions
from .models import AppUser

class CounselorAccessPermission(permissions.BasePermission):
    message = "Must be this user's counselor"

    def has_permission(self, request, view):
        user = request.user  # this doesn't work currently
        """TODO: Verify that the current user is a counselor and this page
        is for one of their students"""
