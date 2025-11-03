from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Project, Testimonial
from .forms import ContactForm


def home(request):
    featured_projects = Project.objects.filter(featured=True)[:3]
    testimonials = Testimonial.objects.all()[:3]

    context = {
        'projects': featured_projects,
        'testimonials': testimonials,
    }
    return render(request, 'portfolio/home.html', context)


def about(request):
    return render(request, 'portfolio/about.html')


def services(request):
    return render(request, 'portfolio/services.html')


def projects(request):
    all_projects = Project.objects.all()
    return render(request, 'portfolio/projects.html', {'projects': all_projects})


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Message sent successfully!')
            return redirect('contact')
    else:
        form = ContactForm()

    return render(request, 'portfolio/contact.html', {'form': form})