# Proyecto 2 - Sistemas y tecnologías Web
 
## Contenidos
- [Descripción](https://github.com/Wachuuu15/Proyecto2_web#descripci%C3%B3n)
- [Tecnologías usadas](https://github.com/Wachuuu15/Proyecto2_web#tecnolog%C3%ADas-usadas)
   - [Angular](https://github.com/Wachuuu15/Proyecto2_web#-angular)
   - [TypeScript](https://github.com/Wachuuu15/Proyecto2_web#-typescript)
   - [CSS](https://github.com/Wachuuu15/Proyecto2_web#-css)
   - [HTML](https://github.com/Wachuuu15/Proyecto2_web#-html)
- [Comandos importantes](https://github.com/Wachuuu15/Proyecto2_web#comandos-importantes)
   - [Preparación](https://github.com/Wachuuu15/Proyecto2_web#preparaci%C3%B3n)
   - [Compilación del proyecto](https://github.com/Wachuuu15/Proyecto2_web#compilaci%C3%B3n-del-proyecto)
- [Estructura](https://github.com/Wachuuu15/Proyecto2_web#estructura)
- [Juego en servidor](https://github.com/Wachuuu15/Proyecto2_web#juego-en-servidor)
- [Manual de usuario](https://github.com/Wachuuu15/Proyecto2_web#manual-de-usuario)
- [Soporte](https://github.com/Wachuuu15/Proyecto2_web#soporte)
- [Autores](https://github.com/Wachuuu15/Proyecto2_web#autores)

## Descripción
Este es un proyecto de inspiración libre, es decir, cada grupo de programadores escoge un proyecto distinto.

En este caso, este proyecto se trata de la creación de la lógica y la réplica de la apariencia del clásico juego **"Buscaminas"** implementado en las versiones antiguas del sistema operativo Windows, tomando especial inspiración de la versión originaria del _Windows XP_ que se puede ver en esta [foto](https://www.google.com.gt/url?sa=i&url=https%3A%2F%2Fbuscaminas-pro.com%2F&psig=AOvVaw1r8MGAJahH1YGlP5NUsW5r&ust=1684978241844000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCqsZ7njP8CFQAAAAAdAAAAABAE).

## Tecnologías usadas

### -Angular
Como el principal framework para el desarrollo de este proyecto se utilizó [Angular](https://angular.io/start) el cual permitela utilización de herramientas y estructuras robustas que permiten la fácil construcción de aplicaciones web interactivas.

### -TypeScript
[TypeScript](https://www.typescriptlang.org/) es un superconjunto perteneciente a JavaScript el cual agrega características de tipado estático y mejoras en el desarrollo de la aplicación y su desempeño en la productividad. Dentro de este proyecto, TypeScript se utiliza para la realización de la lógica que se encuentra detrás del proyecto en sí.

### -CSS
Por sus siglas en inglés, el Cascading Style Sheets, o también llamado [CSS](https://developer.mozilla.org/es/docs/Web/CSS), es un lenguaje de estilos que permite definir el aspecto y la apariencia visual que tienen los elementos HTML que componen el proyecto que se está trabajando.

### -HTML
[HTML](https://developer.mozilla.org/es/docs/Web/HTML) (HyperText Markup Language) es un lenguaje estándar que se utiliza para crear páginas web con el cual se definen las estructuras y los elementos que componen la interfaz de usuario. Dentro del proyecto, HTML se utiliza para marcar el contenido de la aplicación y crear los elementos a utilizar.

## Comandos importantes

### Preparación
Entre los pasos más importantes para usar el proyecto está el instalar _Angular_.

Este comando nos permite instalar la dependencia _"@angular-devkit/build-angular"_ la cual se usa comúnmente para la construcción y la ejecución de la aplicación que estamos haciendo.

La parte del comando de _"dev-server"_ indica la instalación de una versión específica de la dependencia que incluye características como la recarga automática del proyecto al guardar los cambios que se hacen en el código.
```bash
npm install @angular-devkit/build-angular:dev-server
```

Dentro del archivo **package.json** que se encuentra del proyecto se encuentra una lista de todas las dependencias y las respectivas versiones que se necesitan para utilizar el proyecto. Cuando se ejecuta el comando _npm install_ en el directorio raíz del proyecto se busca dicha lista de dependencias y se pasa a descargar e instalar las dependencias correspondientes en un directorio denominda 'node_modules'

Es importante recalcar el hecho de que _npm install_ revisa e instala las dependencias que se utilicen por otras dependencias, haciendo este proceso de forma recursiva y asegurando que se intalen las dependencias necesarias y el proyecto funcione de manera correcta.
```bash
npm intall
```

### Compilación del proyecto
En este caso, la carpeta donde se encuentra toda la lógica del proyecto se llama _"Minesweeper"_, este es un subdirectorio de la carpeta general.

Con este comando se cambia el directorio actual en el que se está trabajando para permitir trabajar en el proyecto específico o acceder a archivos específicos dentro de este subdirectorio.
```bash
cd .\Minesweeper\
```

Este comando se utiliza cuando se está ejecutando la aplicación por la primera vez. Cuando este se ejecuta, Angular CLI busca el proyecto nombrado y empieza a compilar el código proporcionado para construir la aplicación.

Una vez la solución ya se encuentra compilada, se habilita un servidor web local que permite abrir la aplicación en el navegador web al cual se ingresa mediante un URL que nos proporciona la consola de la aplicación.
```bash
ng serve Minesweeper
```

Cuando el proyecto ya fue ejecutado una vez y se necesita volver a abrir el servidor se utiliza únicamente el comando _"ng serve"_ el cual, al igual que la otra versión donde indica el nombre del proyecto, compila el código proporcionado y construye la aplicación para posteriormente habilitar el servidor local y mostrar la aplicación compilada.

En ambos casos, el uso del comando _ng serve_ permite que, al realizar cambios y guardar el código del proyecto, estos se detecten de forma automática y el servidor se actualice en tiempo real.
```bash
ng serve 
```

## Estructura

### src
- app
  - authors-girls
    - authors-girls.component.css
    - authors-girls.component.html
    - authors-girls.component.spec.ts
    - authors-girls.component.ts
  - board
    - board.component.css
    - board.component.spec.ts
    - board.component.ts
  - game
    - board.ts
    - cell.ts
  - photo
    - photo.component.css
    - photo.component.html
    - photo.component.spec.ts
    - photo.component.ts
  - app.comenent.css
  - app.comenent.html
  - app.comenent.ts
  - app.comenent.spec.ts
  - app.module.ts

- assets

  Aquí se encuentran todos los archivos .png que se utilizan en el proyecto
- index.html
- main.ts
- styles.css


## Juego en servidor
Para acceder al juego en línea haz click [Aquí](https://minesweeper-824cd.web.app)

## Manual de usuario
Para acceder al manual de usuario haz click [Aquí](https://docs.google.com/document/d/1ISm6zjf7h1rNE57-bgc2l2JACaUzgubJOGXbRRj5D_0/edit?usp=sharing)

## Soporte
Para cualquier duda relacionada con el malfuncionamiento de uno o más archivos del proyecto por favor comunicarse con las creadoras a los correos:

-Diana Fernández (Front-end)

fer21747@uvg.edu.gt

-Jennifer Toxcón (Back-end)

tox21276@uvg.edu.gt

## Autores
Diana Lucía Fernández Villatoro - 21747

Jennifer Michelle Toxcón Ordoñez - 21276
