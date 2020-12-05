from django.db import models

from users.models import Student


class Track(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    def get_goal_templates(self):
        return GoalTemplate.objects.filter(track=self)

    def add_all_goals(self, student):
        for goal_template in self.get_goal_templates():
            Goal.objects.create(title=goal_template.title, description=goal_template.description, student=student)


class Goal(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    student = models.ForeignKey(Student, on_delete=models.CASCADE, null=True)
    completed = models.BooleanField(default=False)
    def create_from_template(self, template, student):
        if not (template & student):
            raise ValueError("Must have both a template and a student")
        self.objects.create(title=template.title, description=template.description, student=student)


class GoalTemplate(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    track = models.ForeignKey(Track, on_delete=models.CASCADE, null=True)
