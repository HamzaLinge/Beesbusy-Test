# Beesbusy Test

Une petite application pour la gestion des utilisateurs, faisant office d'un test.

## Prérequis

- Python 3.x
- Django 5.x
- Node.js 20.x
- npm ou yarn

## Installation

Pour mettre en place et lancer l'application, veuillez suivre ces étapes :

1. Clonez le dépôt Git :
   `git clone https://github.com/HamzaLinge/Beesbusy-Test`
2. Configuration du Backend :

```bash
cd Beesbusy-Test/backend
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

2. Configuration du Frontend :

```bash
cd Beesbusy-Test/frontend
npm install (yarn install)
yarn dev (npm run dev)
```

3. Lancer l'application :
   Après ces étapes, l'application sera accessible via http://localhost:3000.
