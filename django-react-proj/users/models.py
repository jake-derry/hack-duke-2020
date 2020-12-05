from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from django.db import models
from goals.models import Track

def add_user_profile(user):
    if user.is_counselor:
        Counselor.objects.create(user=user)
    else:
        Student.objects.create(user=user)


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
        add_user_profile(user)
        return user

    def create_superuser(self, username, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(username, email, password, **extra_fields)


class AppUser(AbstractUser):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(blank=True)
    is_counselor = models.BooleanField(null=True)

    objects = AppUserManager()

    EMAIL_FIELD = "email"
    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email", "is_counselor"]


class Student(models.Model):
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE, null=True)
    track = models.ForeignKey(Track, on_delte=models.CASCADE, null=True, related_name='students')

class Counselor(models.Model):
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE, null=True)
