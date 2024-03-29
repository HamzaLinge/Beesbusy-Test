from django.db import models

# Create your models here.


class Genre(models.TextChoices):
    HOMME = 'Homme', 'Homme'
    FEMME = 'Femme', 'Femme'
    AUTRE = 'Autre', 'Autre'


class Utilisateur(models.Model):
    prenom = models.CharField(max_length=100)
    nom = models.CharField(max_length=100)
    age = models.IntegerField()
    genre = models.CharField(max_length=10, choices=Genre.choices)
    ville = models.CharField(max_length=100)
