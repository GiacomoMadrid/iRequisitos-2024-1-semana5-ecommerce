from django.contrib import admin
from .models import *

class TranstornosAdmin(admin.ModelAdmin):
    list_display = ('id', 'vasculares', 'afasia', 'disartria', 'disfagia', 'disfonia')

class AntecedentesAdmin(admin.ModelAdmin):
    list_display = ('id', 'diabetes', 'hta', 'cardiaco', 'respiratorio', 'operaciones')

class ExamenFisicoAdmin(admin.ModelAdmin):
    list_display = ('id', 'grado_funcional', 'actitud_postural', 'reflejos', 'actividades_motoras', 'coordinacion')

class ObservacionesAdmin(admin.ModelAdmin):
    list_display = ('id', 'traqueostomia', 'control_esfinteres', 'upp', 'sentidos', 'pruebas_especiales')

class DolorInfoAdmin(admin.ModelAdmin):
    list_display = ('id', 'grado_de_enfermedad', 'nivel', 'area', 'palpacion', 'punto_gatillo', 'distribucion', 'ocurrencia')

class EvaluacionAdmin(admin.ModelAdmin):
    list_display = ('id', 'fecha', 'paciente', 'dado_de_alta', 'enfermedad_actual', 'tiempo_enfermedad', 'plan_de_tratamiento')

class EvaluacionCorporalAdmin(admin.ModelAdmin):
    list_display = ('id', 'esquema_corporal', 'sensibilidad_superficial', 'nivel_fuerza', 'rangos_articulares')



# Register your models here.
admin.site.register(EvaluacionCorporal, EvaluacionCorporalAdmin)
admin.site.register(Trastornos, TranstornosAdmin)
admin.site.register(ExamenFisico, ExamenFisicoAdmin)
admin.site.register(Observaciones, ObservacionesAdmin)
admin.site.register(DolorInfo, DolorInfoAdmin)
admin.site.register(Antecedentes, AntecedentesAdmin)
admin.site.register(Evaluacion, EvaluacionAdmin)