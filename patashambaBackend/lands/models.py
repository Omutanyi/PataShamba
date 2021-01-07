from django.db import models
from django.contrib.gis.db import models

# Create your models here.

class location(models.Model):
    location_id = models.BigIntegerField(primary_key = True)
    # land = models.ForeignKey(land, on_delete=models.CASCADE, null=True)
    point = models.PointField(srid=32140)

    def __str__(self):
        return self.location_id

class land(models.Model):
    # photo = models.ImageField(upload_to="food/photos/", null=True, blank=True)
    land_id = models.BigIntegerField(primary_key = True)
    description = models.TextField(default='Land description')
    likes = models.BigIntegerField(null=True)
    location = models.ForeignKey(location, on_delete=models.CASCADE, null=True)
    # price = models.CharField(max_length=100, null=True)
    # negotiable = models.BooleanField(default=False)
    size = models.CharField(max_length=100, null=True)
    pub_date = models.DateTimeField(auto_now_add=True, null=True)
    # owner = models.ForeignKey('lands.land_owner', on_delete=models.CASCADE)
    # on_sale = models.BooleanField(defaut=False)

    def __str__(self):
        return self.land_id

class land_owner(models.Model):
    land_owner_id = models.AutoField(primary_key=True)
    land_id = models.ForeignKey(land, on_delete=models.SET_NULL, null=True)
    # user_id = models.ForeignKey(user)
    pub_date = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.land_owner_id