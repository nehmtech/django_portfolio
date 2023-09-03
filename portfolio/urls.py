
from django.urls import path
from .views import main, contact_view

urlpatterns = [
    path('', main, name="main" ),
    path('contact/', contact_view, name='contact')
]
