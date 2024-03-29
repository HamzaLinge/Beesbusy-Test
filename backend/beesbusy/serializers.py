from rest_framework import serializers
from .models import Utilisateur, Genre


class UtilisateurSerializer(serializers.ModelSerializer):
    prenom = serializers.CharField(required=True, max_length=100, error_messages={
        'required': 'Le prénom est obligatoire.',
        'max_length': 'Le prénom ne doit pas dépasser 100 caractères.'
    })
    nom = serializers.CharField(required=True, max_length=100, error_messages={
        'required': 'Le nom est obligatoire.',
        'max_length': 'Le nom ne doit pas dépasser 100 caractères.'
    })
    age = serializers.IntegerField(required=True, min_value=0, error_messages={
        'required': 'L’âge est obligatoire.',
        'min_value': 'L’âge doit être un nombre positif.'
    })
    genre = serializers.ChoiceField(choices=Genre.choices, required=True, error_messages={
        'required': 'Le genre est obligatoire.',
        'invalid_choice': 'Le genre sélectionné est invalide.'
    })
    ville = serializers.CharField(required=True, max_length=100, error_messages={
        'required': 'La ville est obligatoire.',
        'max_length': 'Le nom de la ville ne doit pas dépasser 100 caractères.'
    })

    class Meta:
        model = Utilisateur
        fields = '__all__'
