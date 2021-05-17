from django.urls import path
from .views import home, event_list


urlpatterns = [
    path('', home, name='home'),
    path('event-list/', event_list, name='event-list')
]
