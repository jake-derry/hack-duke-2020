from django.db import models

from users.models import Student


class Goal(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    student = models.ForeignKey(Student, on_delete=models.CASCADE, null=True)
    completed = models.BooleanField(default=False)
