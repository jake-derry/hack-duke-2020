import random
import string

from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from django.db import models


def add_user_profile(user, code=None):
    if user.is_counselor:
        Counselor.objects.create(user=user,
                                 code=''.join(random.choice(string.ascii_uppercase + string.digits) for i in range(10)))
    else:
        Student.objects.create(user=user, counselor=Counselor.objects.get(code=code))


class AppUserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(
        self, username, email=None, password=None, **extra_fields
    ):
        if not username:
            raise ValueError("The given username must be set")
        email = self.normalize_email(email)
        username = self.model.normalize_username(username)
        user = self.model(username=username, email=email, is_counselor=extra_fields.get("is_counselor"))
        user.set_password(password)
        user.save(using=self._db)
        add_user_profile(user, extra_fields.get("code"))
        return user

    def create_superuser(self, username, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(username, email, password, **extra_fields)


class AppUser(AbstractUser):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(blank=True)
    is_counselor = models.BooleanField(null=True)
    code = models.CharField(max_length=10, null=True)

    objects = AppUserManager()

    EMAIL_FIELD = "email"
    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email", "is_counselor", "code"]


class Counselor(models.Model):
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE, null=True)
    code = models.CharField(max_length=10, null=True)

    def get_students(self):
        return self.students.all()


class Track(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    counselor = models.ForeignKey(Counselor, on_delete=models.CASCADE, null=True, related_name="tracks")

    def get_goal_templates(self):
        return self.templates.all()

    def add_all_goals(self, student):
        for goal_template in self.get_goal_templates():
            create_new_instance(goal_template, student)

    def add_new_template(self, title, description='', update=True):
        template = GoalTemplate(title=title, description=description, track=self)
        template.save()
        if update:
            for student in self.students.all():
                create_new_instance(template=template, student=student)
        return template


class Student(models.Model):
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE, null=True)
    track = models.ForeignKey(Track, on_delete=models.CASCADE, null=True, related_name='students')
    counselor = models.ForeignKey(Counselor, on_delete=models.CASCADE, null=True, related_name='students')


def create_new_instance(template, student):
    Goal.objects.create(title=template.title, description=template.description, student=student)


class Goal(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    student = models.ForeignKey(Student, on_delete=models.CASCADE, null=True, related_name='goals')
    completed = models.BooleanField(default=False)


class GoalTemplate(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    track = models.ForeignKey(Track, on_delete=models.CASCADE, null=True, related_name='templates')