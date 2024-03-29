from faker import Faker
from django.http import Http404
from rest_framework.exceptions import NotFound
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Utilisateur, Genre
from .serializers import UtilisateurSerializer
from django.db import IntegrityError


# Create your views here.


class UtilisateurViewSet(viewsets.ModelViewSet):
    queryset = Utilisateur.objects.all()
    serializer_class = UtilisateurSerializer

    def get_object(self):
        try:
            return super().get_object()
        except Http404:
            raise NotFound(
                detail="L'utilisateur demandé n'existe pas")


@api_view(['GET'])
def genre_list(request):
    genres = {genre: label for genre, label in Genre.choices}
    return Response(genres)

@api_view(['POST'])
def generate_fake_users(request):
    fake = Faker()
    num_users = request.data.get('num_users', 10)  # Nombre d'utilisateurs à générer
    created_users = 0

    for _ in range(num_users):
        try:
            Utilisateur.objects.create(
                prenom=fake.first_name(),
                nom=fake.last_name(),
                age=fake.random_int(min=18, max=99),
                genre=fake.random_element(elements=[choice[0] for choice in Genre.choices]),
                ville=fake.city()
            )
            created_users += 1
        except IntegrityError:
            # Gérer l'erreur si nécessaire, par ex. en cas de violation de l'unicité
            pass

    return Response({'message': f'{created_users} utilisateurs factices créés.'})

@api_view(['DELETE'])
def delete_all_users(request):
    count = Utilisateur.objects.all().delete()[1]['beesbusy.Utilisateur']
    return Response({'message': f'{count} utilisateurs supprimés.'})