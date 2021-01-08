from django.db import models
from lands.models import land
from users.models import user  

# Create your models here.

class chat_room(models.Model):
    room_id = models.BigIntegerField(primary_key = True)
    land_id = models.ForeignKey(land, on_delete=models.CASCADE, null=True)
    room_open = models.BooleanField(default=False)

    def __str__(self):
        return self.room_id

class participant(models.Model):
    participant_id = models.BigIntegerField(primary_key = True)
    user_id = models.ForeignKey(user, on_delete=models.CASCADE, null=True)
    room_id = models.ForeignKey(chat_room, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.participant_id

class message(models.Model):
    message_id = models.BigIntegerField(primary_key = True)
    room_id = models.ForeignKey(chat_room, on_delete=models.CASCADE, null=True)
    sender = models.ForeignKey(participant, on_delete=models.CASCADE, null=True)
    text = models.CharField(max_length=100, null=False)
    sent_at = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.message_id