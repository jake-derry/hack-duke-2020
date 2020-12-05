from django.db import models

from users.models import Student


class Track(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    def get_goal_templates(self):
        return GoalTemplate.objects.filter(track=self)


class Goal(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    student = models.ForeignKey(Student, on_delete=models.CASCADE, null=True)
    completed = models.BooleanField(default=False)


class GoalTemplate(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    track = models.ForeignKey(Track, on_delete=models.CASCADE, null=True)
