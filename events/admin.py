from django.contrib import admin
from django.contrib.admin import ModelAdmin
from .models import Event, ClubMember,  Venue


# admin.site.register(Event)
admin.site.register(ClubMember)
admin.site.register(Venue)

@admin.register(Event)
class EventAdmin(ModelAdmin):
    # fields = (name, event_date, venue)
    fields = ['name', 'event_date', 'venue', 'manager', 'description']




