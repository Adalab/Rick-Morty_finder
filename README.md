# EVALUACIÓN FINAL · REACT

Ejercicio de evalución final de programación para el módulo 3 de Adalab
El ejercicio consiste en desarrollar un buscador de personajes de la serie
![Rick and Morty](./src/images/logo.png)

## DESARROLLO

#### 1.Listado de personajes

Mediante una petición al API https://rickandmortyapi.com/documentation/#get-all-characters

#### 2.Pintar el listado de personajes

Recorriendo el array de datos

#### 3.Filtrar personajes

- por nombre que introduce el usuario
- por especie
  Se puede filtar por uno o ambos conceptos a la vez

#### 4.Detalle del personaje

Gracias a React Router podemos ver más información de cada personaje si cliclamos en el botón "+info"

## Estructura de componentes

src
├─ public
| ├─ favicon.ico
| └─ index.hmtl
|
├─ components
| ├─ App.js **\_\_** comp. principal
| ├─ CharacterCard.js **\_\_** detalle de cada personaje
| ├─ CharacterDetail.js **\_\_** tarjeta con info detallada de cada personaje
| ├─ CharacterList.js **\_\_** listado de personajes
| └─ Filters.js **\_\_** componente que contiene los filtrados
| └─ FilterName.js **\_\_** filtra por nombre
| └─ FilterSpecie.js **\_\_** filtra por especie
| ├─ Header.js **\_\_** cabecera con logo
| ├─ Footer.js **\_\_** pie de página con datos de autoría
| ├─ NotFound.js **\_\_** personaje no encontrado

|
├─ images
| └─ ...
|
├─ services
| └─ getDataFromApi.js **\_\_\_** solicitud fetch a API
|
├─ stylesheets
| ├─ CharacterCard.scss
| ├─ CharacterDetail.scss
| ├─ CharacterList.scss
| ├─ Filter.scss
| └─ ...
|
├─ index.js

## RESULTADO

http://beta.adalab.es/modulo-3-evaluacion-final-EstLopCor/#/
