We actually focused on creating api's for storing the feedback and questions of the feedback in dbsqlite3 database which is avialable in the Django and we use Django Rest API to create the feedback or reterive the feedback 

some of the api routes are
if we run the those things in the system then urls to access api will be

for Sign up POST request

http://127.0.0.1:8000/api/signup/

{
    "firstname" :"sai ram",
    "lastname": "reddy",
    "email" : "sai@gmail.com",
    "password" : "1234"
}

for Login in POST request

http://127.0.0.1:8000/api/login/  

{
    "email": "sai@gmail.com",
    "password" : "1234"
}

for adding questions in the feedback questionaries section => POST request

http://127.0.0.1:8000/api/addquestion/

{   
    "session":"sai@gmail.com",
    "ename" :"APP DEvelop",
    "edate" : "2023-07-15",
    "elocation" : "chennai",
    "q1":"asdfg",
    "q2": "dsfg",
    "q3": "dsfg",
    "q4": "dsfg",
    "q5": "dsfg@gmail"

}

for getting the questions from the database

http://127.0.0.1:8000/api/getquestion/22

here 22 is the event id where the questions will be mapped to


output from JSON

[
    {
        "id": 35,
        "Event_id_fk": 22,
        "Q1": "How would you rate the overall organization and management of the event?",
        "Q2": "On a scale of 1 to 5, how satisfied were you with the quality and content of the event?",
        "Q3": "Did the event meet your expectations? Please rate your level of satisfaction.",
        "Q4": "How likely are you to recommend this event to others in your network? Please rate on a scale of 1 to 5.",
        "email": "Did the event provide you with valuable knowledge, insights, or experiences? Please rate your level of satisfaction."
    }
]

to add answers into the feedback list 
==>POST

http://127.0.0.1:8000/api/feedbackans/

{
   "eid" :3,
   "q1a": 3,
   "q2a": 3,
   "q3a": 3,
   "q4a": 5,
   "q5a": 5

}

to get eventdetails 

http://127.0.0.1:8000/api/getevent/

OUTPUT:JSON

[
    {
        "id": 22,
        "Event_Name": "Education For Poor People",
        "Date": "2023-07-16",
        "Location": "chennai"
    }
]

News Letter Subscription

http://127.0.0.1:8000/api/newslettersubrcription/

==>POST

INPUT
{
  "name" : "Vishal Tyagi",
  "email":"vishaltyagi.dev098@gmail.com",
  "interest": "Child Health Care"

}

to logout

http://127.0.0.1:8000/api/logout/