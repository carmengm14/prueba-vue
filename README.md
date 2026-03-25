# vue-pruebas-vue2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Organización de Ramas del Proyecto
Este proyecto sigue una estrategia de ramas basada en Git Flow, un modelo muy utilizado en entornos profesionales para mantener un flujo de trabajo claro, ordenado y escalable.

## Ramas principales
### main
- Contiene el código estable y listo para producción.
- No se desarrollan funcionalidades directamente aquí.
- Solo recibe merges desde `release/*` o `hotfix/*`.

### develop
- Rama de integración donde se combinan todas las nuevas funcionalidades.
- Es la base para crear nuevas ramas de desarrollo.
- Representa el estado actual del desarrollo.

## Ramas secundarias
### feature/*
- Se utilizan para desarrollar nuevas funcionalidades.
- Se crean a partir de `develop`.
- Ejemplos:
  - `feature/login`
  - `feature/user-card`
- Una vez completada la funcionalidad, se hace merge a `develop`.

### release/*
- Se utilizan para preparar una nueva versión del proyecto.
- Se crean a partir de `develop`.
- Aquí se realizan ajustes finales, documentación y pruebas.
- Al finalizar, se hace merge a `main` y se etiqueta la versión.

### hotfix/*
- Se utilizan para corregir errores críticos detectados en producción.
- Se crean a partir de `main`.
- Una vez solucionado el problema, se hace merge tanto a `main` como a `develop`.

## Flujo de trabajo resumido
1. Crear una nueva funcionalidad  
   → `git checkout -b feature/nueva-feature develop`

2. Terminar la funcionalidad  
   → merge a `develop`

3. Preparar una versión  
   → `git checkout -b release/1.0.0 develop`

4. Publicar la versión  
   → merge a `main` + tag

5. Arreglar un error urgente  
   → `git checkout -b hotfix/arreglo main`

Este sistema permite mantener un desarrollo limpio, organizado y fácil de escalar.
