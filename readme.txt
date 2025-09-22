# Proyecto: Sorteo del Amigo Secreto

Este proyecto es una aplicación web simple desarrollada para gestionar y realizar el sorteo del "amigo secreto". Permite a los usuarios agregar nombres de participantes a una lista y luego seleccionar aleatoriamente un nombre como el ganador del sorteo.

## Descripción

La aplicación cuenta con una interfaz intuitiva donde los usuarios pueden introducir nombres uno por uno. Cada nombre agregado se visualiza en una lista. Una vez que todos los participantes han sido añadidos, el usuario puede iniciar el sorteo con un solo clic para revelar el "amigo secreto".

## Funcionalidades

* **Agregar nombres**: Un campo de texto permite a los usuarios escribir el nombre de un amigo. Al hacer clic en el botón "Añadir", el nombre se incorpora a una lista de participantes.
* **Validación de entrada**: El sistema verifica que el campo de texto no esté vacío antes de agregar un nombre a la lista. Si lo está, se notifica al usuario mediante una alerta.
* **Visualización de la lista**: Los nombres ingresados se muestran de forma clara en la página, permitiendo al usuario verificar quiénes participan en el sorteo.
* **Sorteo aleatorio**: Un botón "Sortear Amigo" inicia el proceso de selección. El sistema elige un nombre de la lista de forma completamente aleatoria y lo muestra como el resultado final.

## Cómo usar

1.  **Abrir el archivo `index.html`**: Para comenzar, abre el archivo `index.html` en cualquier navegador web moderno.
2.  **Ingresar nombres**: Escribe el nombre de un participante en el campo de texto provisto.
3.  **Añadir a la lista**: Haz clic en el botón "Añadir". El nombre aparecerá en la lista de participantes. Repite este paso para todos los amigos que desees incluir.
4.  **Realizar el sorteo**: Cuando todos los nombres hayan sido agregados, haz clic en el botón "Sortear Amigo".
5.  **Ver el resultado**: El nombre del amigo secreto seleccionado se mostrará en la pantalla.

## Tecnologías Utilizadas

* **HTML**: Estructura semántica del contenido de la página.
* **CSS**: Estilos para el diseño visual y la presentación de la aplicación.
* **JavaScript**: Lógica de programación para gestionar las funcionalidades de la aplicación, como agregar nombres, validar entradas y realizar el sorteo aleatorio.