## Descripción

Proyecto **Frontend DEV Challenge** para aplicar al puesto de diseñador y maquetador web (Frontend).

## Figma

Como parte del Challenge, se envía link del Figma realizado con base en los requerimientos solicitados:

https://www.figma.com/file/p8GfdYRu8jmOCtigmOb8jQ/WeRemote-Test?node-id=0%3A1

En Figma se cuenta con las funcionalidades de:

- Menú desplegable
- Hero Rotatorio
- FAQ tipo acordeón
- Caja de testimonios slider
- Contenido
- Formulario

## Requerimiento

La aplicación fue realizada con node v16.14.0 y React 18.

1. Clonar el repositorio

2. Ejecutar el comando npm i para instalar los node_modules

3. Ejecutar el comando npm start

4. Ejecutar Control + C para detener el proceso

## Acerca del proyecto

El proyecto fue realizado con React + typescript para el renderizado de componentes y Sass como procesador CSS.

El proyecto cuenta con una sola vista llamada Home, donde se muestran todos los requerimientos solicitados.

1. Cuenta con un menú (hamburguesa) desplegable, donde se incluyo un input search.
2. Hero rotatorio de imágenes, se puede hacer manualmente o automático cada 5 segundos.
3. Contenido, cuenta con dos secciones de contenido, una principal y otra secundaria( donde se pueden mostrar 2
   contenidos en menor tamaño).
4. Testimonios con funcionalidad slider, animado con un drag(arrastrar) para interactuar con la vista.
5. FAQ de preguntas tipo acordeón.
6. Formulario de consultas, los campos cuentan con validación para no enviar un formulario vacío, al enviar el formulario
   se agregó un MODAL con el fin de mostrar esa funcionalidad, cuando se confirma el envío, se añadió una notificación animada de 3 segundos.
7. Se trabajó aplicando el concepto First Mobile, para ello se configuró un mixin con los media queries y los break points
   para facilitar el responsive.

# Glosario de carpetas

1. Carpeta Components, carpeta donde se encuentran los componentes utilizados en la vista Home.
2. Carpeta Page, carpeta donde se ubican todas las vistas de la aplicación.
3. Carpeta assets/styles, carpeta donde se administran los archivos SASS.
4. Carpeta "mocks", en esta carpeta se encuentran todos los datos usados en el renderizado, se realizó de
   esta manera para facilitar el cambio cuando se requieran renderizar datos de una base de datos.
5. Carpeta Interface, carpeta donde se encuentran las interfaces, necesario para el tipado de variables en typescript.
