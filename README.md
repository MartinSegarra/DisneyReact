
<img  alt="Logo" align="right"  src="https://seeklogo.com/images/D/disney-store-logo-2B54E2F619-seeklogo.com.png"  width="28%"  />

  

# Disney Shop - React

  

El proyecto es un sitio que actúa como un e-commerce de **Disney**, incluyendo productos como **películas, merchandising y entradas a los parques**. Cada categoría cuenta con su propio URL path y al clickear en los productos se navega a un detalle de los mismos, donde el usuario puede añadirlos al carrito para finalmente concretar la compra luego de completar sus datos.


Los productos provienen de **Firestore** y su stock se actualiza en tiempo real. Para grabar la compra, el usuario llena un formulario con sus datos y la orden queda guardada en una colección aparte.

<p align='center'>
<img src='https://gifyu.com/image/oFw0' alt='demo'>
</p>

  

## Inicializar proyecto

  

Para inicializar el proyecto, deberemos descargar los archivos del repositorio y guardarlos en la carpeta que queramos utilizar.

  

Luego nos dirigimos a nuestra consola de preferencia y, asegurándonos de estar parados en la carpeta correcta, utilizaremos el siguiente comando:

  

```

npm install

```

Esto instalará las dependencias necesarias.

  

Finalmente, podremos visualizar la app en nuestro navegador utilizando:

  

```

npm run start

```

Así, cualquier cambio que realicemos y guardemos se verá reflejado en tiempo real.

  

## Librerías adicionales

  

- Los productos de la tienda se alojan en Firestore, uno de los servicios que ofrece **Firebase**, instalado con el comando:

```

npm install --save firebase

```

  

- Para darle una mejor responsividad al sitio, se utilizó **Bootstrap**, instalado con el siguiente comando:

```

npm install react-bootstrap bootstrap@4.6.0

```

  

- Adicionalmente, para asegurar un funcionamiento más limpio de algunos componentes, se incluyó tambien **JQuery** y **Popper**:

```

npm install jquery popper.js

```

- Para implementar animaciones de carga y visualización, se utilizó **Animate on Scroll** y **Lottie**:

```

npm install aos --save

npm install react-lottie --save

```

- Finalmente, para algunos iconos se hizo uso de la libreria **FontAwesome**, preparada con los siguientes comandos:

```sh

npm i --save @fortawesome/fontawesome-svg-core

npm install --save @fortawesome/free-solid-svg-icons

npm install --save @fortawesome/react-fontawesome

```