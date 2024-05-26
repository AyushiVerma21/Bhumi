"""
URL configuration for server project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path,include
from . import views


urlpatterns = [
    path("signup/",views.signup.as_view(),name="signup"),
    path("feedbackans/",views.feedback.as_view(),name="feedbackans"),
    path("addquestion/",views.addquestion.as_view(),name="addquestion"),
    path("getquestion/<int:id>/",views.getquestion.as_view(),name="getquestion"),
    path("login/",views.login.as_view(),name="login"),
    path("getevent/",views.getevent.as_view(),name="getevent"),
    path("newslettersubrcription/",views.news_letter_subscription.as_view(),name="newslettersubscription"),
    path("logout/",views.Logout.as_view(),name="logout")
]
