>[!IMPORTANT] Proyect on development , documentation be ready on relese.

[![CI Pipeline](https://github.com/SergioAnastacio/api-anasty/actions/workflows/main.yml/badge.svg)](https://github.com/SergioAnastacio/api-anasty/actions/workflows/main.yml)
# Proyecto API Anasty

## Descripción
Este proyecto es una API diseñada para acortar urls Proporciona dos endpoints  para el acortar la url y para obtener una url y está destinada para ser eficiente , soportar alta carga y ser fiable.

## Características
- Acortar una url: el usuario registrara una url para procesar y devolver una url acortada.
- Redireccion de una url acortada: Al obtener una url acortada ser capaz de redireccionar a la url original
- Registrar usuarios: Usuarios pueden registrarse y gestionar sus urls

## Cómo usarlo
1. Clonar el repositorio:

## formatter 
Para ejecutar el linter, ejecuta:

```bash
    node --run format
```
## linter 
Para ejecutar el linter, ejecuta:

```bash
    node --run lint
```
## docker 
Para construir y ejecutar la aplicación usando Docker:
1. Construir la imagen Docker:
```bash
    docker build -t api-anasty .
```
2. Ejecutar el contenedor Docker:
```bash
    docker run -p 3000:3000 api-anasty
```
3. Ejecutar el DockerCompose de desarollo
```bash
    docker-compose -f docker-compose.dev.yml up
```
4. Ejecutar el DcokerCompose de producion
```bash
    docker-compose -f docker-compose.dev.yml up
```
## pruebas
para ejecutar las pruebas:
1. Ejecutar las pruebas unitarias:
```bash
    npm test
```
2. Ejecutar las pruebas de covertura
```bash
    npm run test:coverage
```
## contribucion
Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama `git checkout -b feature/nueva-caracteristica`.
3. Realiza tus cambios y haz commit `git commit -am 'Añadir nueva característica'`.
4. Sube tus cambios `git push origin feature/nueva-caracteristica`.
5. Abre un Pull Request.

¡Gracias por contribuir!