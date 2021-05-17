from django.shortcuts import render
from .models import Event, ClubMember


def home(request):
    club = ClubMember.objects.all()
    my_events = Event.objects.all()
    return render(request, "index.html", {
        "my_events": my_events,
        "club": club
    })


def event_list(request):
    club = ClubMember.objects.all()
    my_events = Event.objects.all()
    return render(request, "event_list.html", {
        "my_events": my_events,
        "club": club
    })
