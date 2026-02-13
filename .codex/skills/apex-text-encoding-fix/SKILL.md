---
name: apex-text-encoding-fix
description: Corregir texto con problemas de codificacion en el frontend Apex (mojibake como Â¿, Ã³, mÃ¡s, DÃAS) en archivos JSX y CSS, preservando logica y clases existentes. Usar cuando se vean acentos rotos, signos invertidos corruptos o caracteres ilegibles en contenido visible.
---

# Apex Text Encoding Fix

## Objetivo

Restaurar texto legible en espanol sin introducir cambios funcionales.

## Ejecutar este flujo

1. Detectar patrones mojibake frecuentes (`Â¿`, `Â¡`, `Ã¡`, `Ã©`, `Ã­`, `Ã³`, `Ãº`, `Ã±`).
2. Editar solo literales de texto visibles y comentarios; no alterar nombres de variables ni APIs.
3. Mantener clases, estructura JSX y props intactas.
4. Guardar archivos en UTF-8 para evitar reintroducir corrupcion.
5. Revisar secciones de alto riesgo en este proyecto:
- `src/Components/Location/Location.jsx`
- `src/Components/Tafiras/Tarifas.jsx`
- `src/Components/Contact/Contact.jsx`

## Reglas

- Preferir texto correcto en espanol rioplatense cuando aplique al contenido comercial.
- No mezclar en una misma tarea refactor visual o de logica.
- Si un string es ambiguo, mantener el sentido original del mensaje.

## Checklist de salida

- Confirmar ausencia de mojibake en los archivos tocados.
- Confirmar que los cambios fueron solo de texto.
