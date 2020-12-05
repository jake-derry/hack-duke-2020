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

    def add_new_template(self, title, description='', update=False):
        template = GoalTemplate(title=title, description=description, track=self)
        template.save()
        if update:
            for student in self.students.all():
                template.create_new_instance(student=student)



class Goal(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    student = models.ForeignKey(Student, on_delete=models.CASCADE, null=True)
    completed = models.BooleanField(default=False)


class GoalTemplate(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    track = models.ForeignKey(Track, on_delete=models.CASCADE, null=True, related_name='tracks')

    def create_new_instance(self, student):
        if not (student):
            raise ValueError("Must have choose a student for this goal")
        Goal.objects.create(title=self.title, description=self.description, student=student)