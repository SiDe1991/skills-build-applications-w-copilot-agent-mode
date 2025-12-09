from django.contrib import admin
from django.contrib.auth import get_user_model
from .models import Team, Activity, Leaderboard, Workout

User = get_user_model()
from django.contrib.admin.sites import AlreadyRegistered
try:
	admin.site.register(User)
except AlreadyRegistered:
	pass
admin.site.register(Team)
admin.site.register(Activity)
admin.site.register(Leaderboard)
admin.site.register(Workout)
