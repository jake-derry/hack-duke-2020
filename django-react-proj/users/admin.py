from django.contrib import admin

from users.models import Student, Counselor, AppUser

admin.site.register(Student)
admin.site.register(Counselor)
admin.site.register(AppUser)
