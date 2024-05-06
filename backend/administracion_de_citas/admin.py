from django.contrib import admin
from .models import *

class PacienteAdmin(admin.ModelAdmin):
    list_display = ('dni', 'nombre', 'apellido', 'genero', 'telefono', 'ocupacion')

class TerapistaAdmin(admin.ModelAdmin):
    list_display = ('dni', 'nombre', 'apellido', 'genero', 'telefono', 'activo')

class CitaAdmin(admin.ModelAdmin):
    list_display = ('id', 'inicio', 'fin', 'terapista', 'paciente', 'asistido')



# Register your models here.
admin.site.register(Terapista, TerapistaAdmin)
admin.site.register(Paciente, PacienteAdmin)
admin.site.register(Cita, CitaAdmin)
