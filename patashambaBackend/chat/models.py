from django.db import models
from lands.models import land
from users.models import user  

# Create your models here.

class chat_room(models.Model):
    room_id = models.AutoField(primary_key=True)
    land_id = models.ForeignKey(land, on_delete=models.CASCADE, null=True)
    # participants = models.ManyToManyField
    room_open = models.BooleanField(default=False)

    def __int__(self):
        return self.room_id

class participant(models.Model):
    participant_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(user, related_name='friends',on_delete=models.CASCADE, null=True)
    # friends = models.ManyToManyField('self', blank=True)
    room_id = models.ForeignKey(chat_room, on_delete=models.CASCADE, null=True)

    def __int__(self):
        return self.user.username

class message(models.Model):
    message_id = models.AutoField(primary_key=True)
    room_id = models.ForeignKey(chat_room, on_delete=models.CASCADE, null=True)
    participant = models.ForeignKey(participant,related_name='messages', on_delete=models.CASCADE, null=True)
    text = models.CharField(max_length=100, null=False)
    sent_at = models.DateTimeField(auto_now_add=True, null=True)

    def __int__(self):
        return self.message_id

# class chat_room(models.Model):
#     participants = models.ManyToManyField(participant, related_name='chats')
#     messages = models.ManyToManyField(message, blank=True)

#     def last_10_messages(self):
#         return self.messages.objects.order_by('-sent_at').all()[:10]

#     def __str__(self):
#         return "{}".format(self.pk)