# Generated by Django 5.0.3 on 2024-03-29 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Utilisateur',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('prenom', models.CharField(max_length=100)),
                ('nom', models.CharField(max_length=100)),
                ('age', models.IntegerField()),
                ('genre', models.CharField(max_length=10)),
                ('ville', models.CharField(max_length=100)),
            ],
        ),
    ]
