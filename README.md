# AngularJS Pruebas unitarias y EndToEnd con Jasmine y Protractor

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.0.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

Run `npm install && bower install` for installing modules and dependences.

## Unit Testing

Running `karma start karma.conf.js` will run the unit tests with karma.

## End To End (e2e)

Running `protractor protractor.conf.js` will run End To End tests with Protractor.

# ESCENARIOS (e2e) para pruebas e2e con Protractor 

Página Inicio

1) Al iniciar la app la lista debe estar vacia

2) Al ingresar una tarea y darle clic al boton Add, se debe agregar el item digitado

3) Al darle click al botón de eliminar, debe eliminar el item


**************************************************

Página Uno

1) Debe tener el saludo "Hello, World!" al iniciar la app

2) Al darle click al botón 'Change!' el texto del saludo debe cambiar por el que se digitó

3) Al darle click al botón 'Change!' el texto del saludo NO debe cambiar si no se digitó ningun texto

**************************************************

Página Dos

1) El valor inicial del Total debe ser igual a 6

2) El valor del Total se debe actualizar cuando se agregue un número

3) No debe actualizar el Total cuando no se haya insertado un valor


**************************************************

Página Tres

1) Al abrir la ventana modal debe tener un valor inical igual a "1"

2) Al darle clic en el botóon "Iterate" de la ventana modal se debe aumentar en 1 el numero.

**************************************************

Página Cuatro

1) Al darle clic al botón "Load!" se debe asegurar que se pinta el listado con el resultado del WebService
