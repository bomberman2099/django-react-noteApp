from django.urls import path
from . import views
urlpatterns = [
    path('', views.get_routes, name="routes"),
    path('notes/', views.get_notes, name="get_notes"),
    path('note/create/', views.create_note, name="create_note"),
    path('note/<str:pk>/', views.get_note, name="get_note"),
    path('note/<str:pk>/update/', views.update_note, name="update_note"),
    path('note/<str:pk>/delete/', views.delete_note, name="delete_note"),
]