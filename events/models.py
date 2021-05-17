from django.db import models


class Venue(models.Model):
    name = models.CharField(max_length=60)
    address = models.CharField(max_length=60)
    zip_code = models.CharField(max_length=15)
    phone = models.CharField(max_length=25)
    web = models.URLField()
    email_address = models.EmailField()

    def __str__(self):
        return self.name


class ClubMember(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField()

    def __str__(self):
        return self.first_name + ' ' + self.last_name


class Event(models.Model):
    name = models.CharField(max_length=120)
    event_date = models.DateTimeField()
    venue = models.ForeignKey(
        Venue, blank=True, null=True, on_delete=models.CASCADE)
    # venue = models.CharField(max_length=120)
    manager = models.CharField(max_length=120)
    description = models.TextField(max_length=300)
    members = models.ManyToManyField(ClubMember, blank=True)

    def __str__(self):
        return self.name
