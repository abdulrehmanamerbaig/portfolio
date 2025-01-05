from django.contrib import admin
from django.urls import path, include
from home import views

urlpatterns = [
    path('', views.home, name='home'),
    path('#home', views.home, name='home'),
    path('contact/', views.contact_submission, name='contact'),
    path('#projects', views.project, name='project'),
    path('#awards', views.awards, name='awards'),
    path('#skills', views.skills, name='skills'),
    path('band', views.band, name='band-project'),
    path('simply-me', views.simplyme, name='simplyMe-project'),
    path('todo', views.todo, name='todo'),
    path('amazon_clone', views.amazon, name='amazon-project'),
    
]

# ADMIN PAGE CUSTOMIZATION
admin.site.index_title = "Welcome"
admin.site.site_title = "ARA Portfolio"
admin.site.site_header = "Welcome to ARA Portfolio"
