"""djangoDemo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from app_demo import views
urlpatterns = [
    path('admin/', admin.site.urls),
url(r'LingShi/cssmin/(?P<id>\w+)/$',views.cssmin),
url(r'LingShi/css/(?P<id>\w+)/$',views.css),
    url(r'LingShi/js/(?P<id>\w+)/$',views.js),
url(r'LingShi/jsmin/(?P<id>\w+)/$',views.jsmin),
url(r'LingShi/image/(?P<id>\w+)/$',views.image),
url(r'LingShi/images/(?P<id>\w+)/$',views.image),
    url(r'LG/$', views.LingShigen),
    url(r'LingShi/$', views.LingShi),

]
