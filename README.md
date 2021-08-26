# Backend Hospital-Digital
Repositorio de actividad de Back-end, simulando un hospital digital con ingreso a niños.

### Instalación
1. Es necesario tener instalado [MySQL](https://www.mysql.com/downloads/), es recomendado contar con cliente de SQL. En este caso XAMPP, activando `Apache` y `MySQL` funciona correctamente.
2. Ejecutar `npm i` para instalar todas las dependencias utilizadas en el back-end.
3. Rellenar las variables que se encuentran en `.env.example`, creando las variables propias acorde a los datos del usuario y su base de datos.
4. Ejecutar el comando `npm run dev` para inicializar la base de datos

>Es necesario contar con Node.JS
>En caso de ser necesario, revisar el archivo `ormconfig.js` para ajustar los datos del `username`.

### Características del Back-end
- Cuenta con uso de Postman para la documentación de las rutas, las cuales se pueden encontrar en el siguiente [enlace](https://github.com/EyderACM/Back-HospitalDigital/blob/develop/resources/Digital-Hospital.postman_collection.json), las cuales se pueden 
observar de la siguiente forma:

![image](https://github.com/EyderACM/Back-HospitalDigital/blob/develop/images/postman.png)

- Se hace uso de TypeORM para la creación de entidades.
- Se realizaron diagramas para la planeación de las entidades, las cuales pueden verse ilustradas de la siguiente forma:
![image](https://github.com/EyderACM/Back-HospitalDigital/blob/develop/images/image.png)
