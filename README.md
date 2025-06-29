# Título del Proyecto

Prueba tecnica de TCIC para Senior level Full Stack developer

## Comenzando 🚀

Descarga el repo

### Pre-requisitos 📋

Programas / dependencias necesarias

```
* Node
* Vite
* VSCode
```

### Instalación 🔧

El programa se puede ejecutar usando docker-compose o en desarrollo. para ambas se necesita docker

#### 1. Entorno desarrollo


#### Base de datos

Levantar el container que contiene la base de datos

```
docker container run  -p 5432:5432 -e POSTGRES_DB=postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres  --name postgres postgres
```

##### Backedn

Ubicado en la carpeta raiz ejecutar en consola con permisos de admin

```
cd .\backend\
npm i
npm run dev
```
##### Frotend

Ubicado en la carpeta raiz ejecutar en consola con permisos de admin

```
cd .\frontend\
npm i
npm run dev
```


### Consideraciones

 - El puerto para la base de datos debe ser el mismo que en ./backend/.env  
 - Se dispone intencionalmente de los .env.template con sus respectivos datos para hacer las pruebas
 
 (Ver imagen a continuacion)

### DEMO

![alt text](image.png)


## Pendientes ...

- Pruebas unitarias en Jest
- Crear un dockercompose para simplificar el desarrollo/despliegue del proyecto
- incluir librerias como formik para manejo eficiente de formularios
- CI/CD en github para las imagenes


## Construido con 🛠️

- [NPM](https://www.npmjs.com/) - Gestor de paquetes
- [Vite](https://vite.dev/) - Servidor desarrollo
- [React](https://es.react.dev/) - Libreria JS
- [Node](https://nodejs.org/en) - Runtime JS
- [PostgreSQL](https://www.postgresql.org/) - Base de datos
- [Docker](https://www.docker.com/) - Containers
- [Prisma](https://www.prisma.io/) - ORM
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS


## Versionado 📌

Usamos [GIT](http://github.com/) para el versionado, directo en rama master. Por temas practicos, no me guie en Gitflow
## Autores ✒️

- **Sebastian Monsalve** - Desarrollo full stack - [Seba Monsalve](https://github.com/Seba-Monsalve)

## Expresiones de Gratitud 🎁

- A [Villanuevand](https://github.com/Villanuevand) por esta genial plantilla de readme

---
