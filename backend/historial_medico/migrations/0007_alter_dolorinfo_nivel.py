# Generated by Django 4.2.5 on 2023-11-01 22:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('historial_medico', '0006_dolorinfo_grado_de_enfermedad_alter_dolorinfo_area_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dolorinfo',
            name='nivel',
            field=models.IntegerField(blank=True, null=True, verbose_name='Grado de dolor'),
        ),
    ]