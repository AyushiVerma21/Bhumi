from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from django.core.mail import send_mail

sessions=[]
sessions.append("sai@gmail.com")

class signup(APIView):
    def post(self, request):
        data = request.data
        firstname = data['firstname']
        lastname = data['lastname']
        email = data['email']
        password = data['password']
        user_details = User_Registration.objects.create()
        user_details.firstname = firstname
        user_details.lastname = lastname
        user_details.email = email
        user_details.password = password
        user_details.save()
        return Response("registered successful",status=status.HTTP_201_CREATED)

class login(APIView):

    def post(self,request):
        data = request.data
        email = data['email']
        password = data['password']
        userdetails = User_Registration.objects.filter(email=email,password=password).values()
        if userdetails :
            ud =list(userdetails)
            print(ud)
            ud[0]["password"]= ud[0]["email"]
            print(ud[0]["password"])
            print(sessions)
            sessions.append(ud[0]["email"])
            print(sessions)
            print(ud)
            return Response(ud)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)


class feedback(APIView):
    def post(self, request):
        data = request.data
        Event_ans_id_fk = data['eid']
        Q1_a = data['q1a']
        Q2_a = data['q2a']
        Q3_a = data['q3a']
        Q4_a = data['q4a']
        Q5_a = data['q5a']
        feedbackans = Feedback_Answers.objects.create()
        feedbackans.Event_ans_id_fk = Event_ans_id_fk
        feedbackans.Q1_ans = Q1_a
        feedbackans.Q2_ans = Q2_a
        feedbackans.Q3_ans = Q3_a
        feedbackans.Q4_ans = Q4_a
        feedbackans.email = Q5_a
        feedbackans.save()
        return Response("feedback saved",status=status.HTTP_200_OK)


class addquestion(APIView):
    def post(self,request):
        data = request.data
        session = data['session']
        if session in sessions:
            eventname = data['ename']
            eventdate = data['edate']
            eventlocation = data['elocation']

            eventadd = Event.objects.create()
            eventadd.Event_Name = eventname
            eventadd.Date = eventdate
            eventadd.Location = eventlocation
            eventadd.save()
            eventdet = Event.objects.latest("id")
            eventid =str(eventdet)
            print(eventid)
            q1 = data['q1']
            q2 = data['q2']
            q3 = data['q3']
            q4 = data['q4']
            q5 = data['q5']
            addques = Event_Questions.objects.create()
            addques.Event_id_fk = eventid
            addques.Q1 = q1
            addques.Q2 = q2
            addques.Q3 = q3
            addques.Q4 = q4
            addques.email = q5
            addques.save()
            emailstosend = []
            newsub = list(News_Letter_Subscription.objects.all().values())
            print(newsub)
            for sub  in newsub:
                senderemail = str(sub["email"])
                tosend = "Dear "+sub["name"]+", You're invited to a special public service event hosted by Bhumi! Join us as we come together to address pressing social issues and create a positive impact on our community\n\n\nEvent Details \n\nEvent Name: "+eventname+"\nEvent Date: "+eventdate+"\nEvent Venue: "+eventlocation+"\n\nPlease save the date and spread the word to your friends, family, and colleagues. We appreciate your support in building a brighter future together."+"\n\n\nBest regards,\nBhumi Team"
                print(tosend)
                try:
                    send_mail(
                        'Join Us for an Inspiring Public Service Event hosted by Bhumi',
                        tosend,
                        'venkatasairamreddy0404@gmail.com',
                        [senderemail],
                        fail_silently=False,
                    )
                except:
                    print("not possible to send this email")
            return Response("inserted question",status=status.HTTP_201_CREATED)

        else:
            return  Response(status=status.HTTP_401_UNAUTHORIZED)



class getquestion(APIView):
    def get(self,request,id):
        getquestions = Event_Questions.objects.filter(Event_id_fk=id).values()
        sendquestions = list(getquestions)
        print(sendquestions)
        return Response(sendquestions)


class getevent(APIView):

    def get (self,request):
        event_details = Event.objects.all().values()
        ed = list(event_details)
        return Response(ed,status=status.HTTP_200_OK)


class Logout(APIView):
    def post(self,request):
        data = request.data
        session = data['session']
        print(sessions)
        try:
            sessions.remove(session)
        except:
            return Response("session id is not present")
        print(sessions)
        return Response("logged out")

class news_letter_subscription(APIView):
    def post(self,request):
        data = request.data
        Name = data['name']
        Email = data['email']
        Interest = data['interest']
        news_subscribe = News_Letter_Subscription.objects.create()
        news_subscribe.name = Name
        news_subscribe.email = Email
        news_subscribe.interest = Interest
        news_subscribe.save()
        return Response("response saved",status=status.HTTP_201_CREATED)













