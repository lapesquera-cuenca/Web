import os
import re

# Directorio actual
directorio_actual = os.getcwd()

# Patrón de búsqueda del bloque de código
patron_bloque = re.compile(r"<!-- Estadisticas -->[\s\S]*?<!-- fin Estadisticas -->")

# Recorrer todos los archivos en el directorio actual
for archivo in os.listdir(directorio_actual):
    # Verificar si el archivo es HTML
    if archivo.endswith(".html"):
        ruta_archivo = os.path.join(directorio_actual, archivo)

        # Leer el contenido del archivo
        with open(ruta_archivo, "r", encoding="utf-8") as archivo_html:
            contenido = archivo_html.read()

        # Eliminar el bloque de código utilizando el patrón de búsqueda
        contenido_modificado = re.sub(patron_bloque, "", contenido)

        # Escribir el contenido modificado de vuelta al archivo
        with open(ruta_archivo, "w", encoding="utf-8") as archivo_html:
            archivo_html.write(contenido_modificado)

print("Bloques de código eliminados exitosamente.")
