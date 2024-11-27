# CRUD con Angular v18 usando Docker Compose

## Requisitos

Tener instalado Node.js version ^18.19.1 o más reciente.

https://nodejs.org/en/learn/getting-started/how-to-install-nodejs

>NOTA: Para sistemas basados en UNIX como Linux y macOS recomiendo instalar y usar el gestor de versiones de Node NVM.
> 
> https://github.com/nvm-sh/nvm

Tener instalado Docker y Docker Compose

https://docs.docker.com/get-started/get-docker/

https://docs.docker.com/compose/install/

## Paso 1

Instalar las dependencias del servicio back.

```shell
$ cd back
$ npm install
```

>NOTA: No escribir el símbolo del dollar.

## Paso 2

Instalar las dependencias del servicio front.

```shell
$ cd front
$ npm install
```

>NOTA: No escribir el símbolo del dollar.

## Paso 3

Levantar servicios con Docker compose.

```shell
$ docker compose up
```

>NOTA: El comando anterior debe ejecutarse desde la carpeta raíz del proyecto.

## Paso 4

Acceder a la aplicación desde el navegador usando la siguiente dirección:

http://localhost:4200/

Este enlace mostrará una lista de productos de prueba.

## Detener los contenedores

Si hemos levantado los contenedores usando:

```shell
$ docker compose up
```

Podemos detener los contenedores usando la combinación de teclas:

```shell
CTRL + C
```

En cambio, si levantamos los contendores usando:

```shell
$ docker compose up -d
```

>-d es la opción detached mode, es decir que ejecutará los contenedores en background y la salida de los logs no se mostrará en la consola actual.

En este caso podemos detener los contenedores situándonos en la carpeta del proyecto y ejecutando:

```shell
$ docker compose stop
```

>NOTA: Es importante recordar que los comandos `docker compose up` y `docker compose stop` deben ser ejecutados desde la carpeta raíz del proyecto.