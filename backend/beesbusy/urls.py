from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UtilisateurViewSet, genre_list, generate_fake_users, delete_all_users

router = DefaultRouter()
router.register(r'user', UtilisateurViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('gender/', genre_list, name='genre-list'),
    path('generate-fake-users/', generate_fake_users, name='generate-fake-users'),
    path('delete-all-users/', delete_all_users, name='delete-all-users'),
]
