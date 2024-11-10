# Django creates our website responsive and fast by the urls pattern.
# Django provides us an ability to map the urls pattern to locate the required *dynamic* page. *NOT A STATIC PAGE*.
# By Dynamic Page, I mean it will be customized as per the each user's requirement. 

# Django uses MVT (MODEL VIEW TEMPLATE)
# Model is used to manage the database of our app. That's why our page will be called as a dynamic one.
# Template is actually a styling structure where we can create a best graphical interface as per the requirement.

from django.shortcuts import render, HttpResponse, redirect
from home.models import Contact

# Create your views here.
# Getting a template inside a view.
def home(request):
    # return HttpResponse('H O M E')
    return render(request, 'home.html')

def project(request):
    # return HttpResponse('P R O J E C T')
    return render(request, 'project.html')

def contact_submission(request):
    if request.method == "POST":
        
        name = request.POST['Name']
        email = request.POST.get('Email')
        title = request.POST['Title']
        message = request.POST['Message']
        print ("Someone visits your portfolio")

        print (f"Name: {name}")
        print (f"Email: {email}")
        print (f"Title: {title}")
        print (f"Message: {message}")
        data = Contact(name=name, email = email, title = title, message = message)
        data.save()
        print ("The data has been saved in DB")
        
    return redirect('/')

def skills(request):
    # return HttpResponse('A B O U T')
    
    return render(request, 'skills.html')

def band(request):
    # return HttpResponse('B A N D')
    
    return render(request, 'band.html')

def simplyme(request):
    # return HttpResponse('S I M P L Y - M E')
    
    return render(request, 'simplyme.html')

def todo(request):
    # return HttpResponse('S I M P L Y - M E')
    
    return render(request, 'todo.html')

def amazon(request):
    # return HttpResponse('A M A Z O N')
    
    return render(request, 'amazon.html')