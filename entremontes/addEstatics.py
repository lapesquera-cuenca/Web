import os
import re

# Directorio actual
directorio_actual = os.getcwd()

# Bloque de código a insertar
bloque_codigo = """
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Z732XRPB18"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Z732XRPB18');
</script>
"""

# Recorrer todos los archivos en el directorio actual
for archivo in os.listdir(directorio_actual):
    # Verificar si el archivo es HTML
    if archivo.endswith(".html"):
        ruta_archivo = os.path.join(directorio_actual, archivo)

        # Leer el contenido del archivo
        with open(ruta_archivo, "r", encoding="utf-8") as archivo_html:
            contenido = archivo_html.read()

        # Buscar la posición de </head>
        pos_head = contenido.find("</head>")

        # Verificar si se encontró la etiqueta
        if pos_head != -1:
            # Insertar el bloque de código después de </head>
            contenido_modificado = contenido[:pos_head] + "</head>" + bloque_codigo + contenido[pos_head:]

            # Escribir el contenido modificado de vuelta al archivo
            with open(ruta_archivo, "w", encoding="utf-8") as archivo_html:
                archivo_html.write(contenido_modificado)

print("Bloque de código añadido exitosamente.")
