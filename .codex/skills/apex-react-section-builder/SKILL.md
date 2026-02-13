---
name: apex-react-section-builder
description: Construir o modificar secciones React del frontend Apex con el patron actual del proyecto (carpetas por componente con JSX y CSS, React-Bootstrap y FontAwesome), e integrar cambios en App.js. Usar cuando se pidan nuevas secciones, reorden de bloques o refactors visuales leves.
---

# Apex React Section Builder

## Objetivo

Crear o ajustar secciones sin romper el flujo de la pagina principal ni la coherencia del codigo existente.

## Ejecutar este flujo

1. Revisar `src/App.js` para entender composicion y orden de renderizado.
2. Crear o actualizar `src/Components/<Nombre>/<Nombre>.jsx` y `src/Components/<Nombre>/<Nombre>.css`.
3. Reutilizar `Container` y utilidades de Bootstrap antes de sumar nuevas dependencias.
4. Reusar clases globales (`titulo`, `parrafo`, `detalle-tarifas`) cuando aporten consistencia.
5. Importar e insertar el componente en `App.js` en el punto solicitado.

## Reglas del proyecto

- Mantener componentes funcionales con `export default`.
- Importar iconos FontAwesome de forma explicita por icono.
- Evitar cambios de arquitectura (routing, estado global) en tareas de seccion simple.
- Evitar mover archivos o renombrar carpetas salvo pedido explicito.

## Checklist de salida

- Verificar imports validos en `App.js`.
- Verificar ausencia de desborde horizontal en mobile.
- Verificar que el nuevo bloque respete espaciado y tono visual existentes.
