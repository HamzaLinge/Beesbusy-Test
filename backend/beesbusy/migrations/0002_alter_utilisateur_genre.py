# Generated by Django 5.0.3 on 2024-03-29 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beesbusy', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='utilisateur',
            name='genre',
            field=models.CharField(choices=[('Homme', 'Homme'), ('Femme', 'Femme'), ('Autre', 'Autre')], max_length=10),
        ),
    ]