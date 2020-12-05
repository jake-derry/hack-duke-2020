from django.db import models


class Track(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    def get_goal_templates(self):
        return self.templates.all()

    def add_all_goals(self, student):
        from users.models import Goal
        for goal_template in self.get_goal_templates():
            Goal.objects.create(title=goal_template.title, description=goal_template.description, student=student)

    def add_new_template(self, title, description='', update=False):
        from users.models import create_new_instance
        template = GoalTemplate(title=title, description=description, track=self)
        template.save()
        if update:
            for student in self.students.all():
                create_new_instance(template=template, student=student)

class GoalTemplate(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    track = models.ForeignKey(Track, on_delete=models.CASCADE, null=True, related_name='templates')