from rest_framework.views import exception_handler
from rest_framework.response import Response
from rest_framework import status


def custom_exception_handler(exc, context):
    # Appelle le gestionnaire d'exceptions par défaut pour obtenir la réponse standard
    response = exception_handler(exc, context)

    # Si le gestionnaire par défaut a renvoyé une réponse, personnalisez-la
    if response is not None:
        # Vous pouvez modifier la structure de la réponse ici
        custom_response_data = {
            'message': 'Un problème est survenu',
            'errors': response.data,  # Gardez les détails d'erreur originaux
            # 'status': 'error',  # Ajoutez un statut d'erreur personnalisé ou tout autre champ
            # Message d'erreur générique ou personnalisé
        }
        response.data = custom_response_data
        response.status_code = response.status_code

    return response
