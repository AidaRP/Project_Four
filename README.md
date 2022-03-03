# -------- PROYECTO NÚMERO 4️⃣: --------  


# TECNOLOGÍAS:








# RESUMEN:

El proyecto consiste en una simulación de un videoclub donde un usuario se puede registrar y puede hacer pedidos de peliculas para alquilarlas y que estás le lleguen a su domicilio.

En primer lugar instalamos las dependencias:  
.- Express --> que nos ayudará a construir la base del proyecto.

.- Axios --> nos pintará los datos en la parte frontal.

.- CORS --> para establecer seguridad en nuestro backend.

.- Nodemon --> para poder dar al servidor de activarse y         desactivarse   automaticamente.

.- Bcrypt --> para añadir seguridad a nuestra API.

.- Db --> Para establecer conexión con nuestra Base de Datos.

.- Dotenv -->

.- Jsonwebtoken --> Dandole seguridad a los datos del usuario.

.- Mysql2 --> Poder apuntar a nuestra Base de Datos correctamente.

.- Sequelize --> ORM de Javascript para poder utilizar los  comandos         SQL de forma más rápida.

En segundo lugar hacemos la creación del index.js donde pondremos todas las constantes de las dependencias instaladas para su uso. También crearemos el archivo .gitignore para que no se suban a git todas las dependecias de nodemodules.

En tercer lugar creamos la carpeta views donde irán las vistas (endpoints) de nuestro backend, con la /(ruta) que tendremos que poner en la URL(o endpoint) para consultar la zona del backend que queremos visitar. Como en este proyecto se nos pide simular un videoclub, las views disponibles serán Films, Orders & User.

A continucación Creamos la carpeta router.js donde irán almacenadas las diferentes rutas, declarando una constante donde almacenamos su ubicación (./*Carpeta donde están ubicadas*/*al controlador donde irán*); 

A continuación Creamos la carpeta controllers con sus archivos controladores correspondientes en este caso Films, Orders y User Controller donde se alamcenarán las funciones y lo que hacen de cada uno de sus controladores. 

También crearemos la carpeta de middlewares para almacenar dentro el codigo para la ejecución de JSWT y darle seguridad a los datos del usuario. 

# ![EndPoints](/img_ReadMe/EndPoints_SS.jpg) UTILIZADOS:


### Funciones Peliculas  --> 

-. getAllFilms == Nos trae todas las peliculas.

-. registerFilms == Registra 1 pelicula. 

-. findFilmsTitle  == Trae pelicula por título.  

-. getNews == Trae las peliculas más nuevas.    

-. peliculasId == Trae las peliculas x Id.

-. deleteFilmsById == Elimina las peliculas x Id.

### Funciones User   --> 

.- getUsers == Trae usuarios.

.- getUsersId == Trae a los usuarios por su ID.

.- registerUsers == Registra un usuario.

.- updateProfil == Actualiza los datos del perfil.

.- updatePassword == Cambia la contraseña.

.- deleteAll == Elimina a todos los usuarios.

.- deleteById == Elimina a los usuarios por ID.

.- logUsers == Logea un usuario.

### Funciones Orders -->

.- placeNewOrder == Creación de nuevo pedido.

.- allOrders == Muestra todos los pedidos.

creamos el archivo db.js para que podamos establecer la conexión con la BBDD. 


![DiagramaBBDD](/img_ReadMe/BBDD_PR4.jpg)

El proyecto posee 3 tablas: películas, orders y usuarios. Los usuarios podrán hacer un order de una sola película. Los usuarios podrán tener varios orders o ninguno, pero en un order solo podrá aparecer un usuario (1:N). Las películas podrán aparecer en varios orders o en ninguno, pero en un order solo podrá aparece una película (1:N).

