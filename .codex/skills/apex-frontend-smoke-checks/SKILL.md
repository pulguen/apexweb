---
name: apex-frontend-smoke-checks
description: Ejecutar chequeos rapidos del frontend Apex (instalacion, arranque y build de Create React App) para detectar errores de compilacion, imports rotos o regresiones basicas despues de cambios. Usar cuando se editen componentes, estilos o contenido y se necesite verificacion tecnica inmediata.
---

# Apex Frontend Smoke Checks

## Objetivo

Validar rapidamente que el frontend siga compilando y arrancando tras cambios.

## Ejecutar este flujo

1. Verificar dependencias y scripts en `package.json`.
2. Ejecutar `npm run build` para validar compilacion de produccion.
3. Ejecutar `npm start` o `npm run dev` segun entorno para validar arranque local.
4. Revisar errores de import, JSX, CSS y assets faltantes.
5. Reportar fallas con archivo y accion concreta de correccion.

## Alcance del proyecto

- Proyecto CRA ubicado en `apexweb/`.
- Scripts esperados: `start`, `build`, `test`.
- Dependencias UI clave: `react-bootstrap`, `@fortawesome/*`.

## Reglas

- No introducir cambios de codigo durante el smoke check salvo pedido explicito.
- Si el entorno bloquea ejecucion, reportar limitacion y dejar comando exacto para repetir.

## Checklist de salida

- Confirmar resultado de `build`.
- Confirmar resultado de arranque o motivo del bloqueo.
- Listar riesgos residuales si no se pudo ejecutar todo.
