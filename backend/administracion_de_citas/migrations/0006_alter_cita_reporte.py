# Generated by Django 4.2.5 on 2023-11-02 02:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('administracion_de_citas', '0005_alter_cita_evaluacion'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cita',
            name='reporte',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]
