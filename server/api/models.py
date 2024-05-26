from django.db import models

class User_Registration(models.Model):
	firstname = models.CharField(max_length=100)
	lastname = models.CharField(max_length=100)
	email = models.CharField(primary_key=True, max_length=100)
	password = models.CharField(max_length=100)
	role = models.CharField(default='admin', max_length=100)

class Event(models.Model):
	id=models.AutoField(primary_key= True)
	Event_Name = models.CharField(max_length=100)
	Date = models.DateField(null=True)
	Location = models.CharField(max_length=100)

	def __str__(self):
		return str(self.id)

class Event_Questions(models.Model):
	Event_id_fk = models.IntegerField(null=True)
	Q1 = models.CharField(max_length=500)
	Q2 = models.CharField(max_length=500)
	Q3 = models.CharField(max_length=500)
	Q4 = models.CharField(max_length=500)
	email = models.CharField(max_length=500)


class Feedback_Answers(models.Model):
	Event_ans_id_fk = models.IntegerField(null=True)
	Q1_ans = models.IntegerField(null=True)
	Q2_ans = models.IntegerField(null=True)
	Q3_ans = models.IntegerField(null=True)
	Q4_ans = models.CharField(max_length=500,null=True)
	email = models.EmailField(null=True)
	def __str__(self):
		return str(self.id)


class News_Letter_Subscription(models.Model):
	name = models.CharField(null=True,max_length=50)
	email = models.EmailField(unique=True)
	interest = models.CharField(null=True,max_length=200)


