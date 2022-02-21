### Práctica Final Despliegue de Aplicaciones Web

Esta página web estática contiene todas las tareas que hemos ido realizando en la práctica sobre el servidor de la clase.

## Listado de Componentes Necesarios y sus Responsables

- [Apache HTTPD Server](#httpd)
_Realizado por Emilio_

- [Apache Tomcat](#tomcat)
_Realizado por José Carlos_

- [Docker](#docker)
_Realizado por Jesús Ruiz_

- [FTP Server](#ftp)
_Realizado por Josema_

- [SSH](#ssh)
_Realizado por Jesús Roca_

- [PHP](#php)
_Realizado por Ahmed_

- [Mysql Server](#mysql)
_Realizado por Raúl Arce_

- [Github Page](#git)
_Realizado por Raúl Arce_

## Servidores a Desplegar | Requisitos

#### GLPI (Apache HTTP Server).
1. inventario.puertas.local
2. Sitio web seguro con certificado, sitio no seguro redirige al seguro.
3. Usuario: glpi, con contraseña glpi.Puertas que sirva para el usuario del
sistema (directorio home /var/www/glpi), FTP, SSH y para su base de datos
de MySQL.

---

#### Moodle (Apache HTTP Server).
1. cursos.puertas.local
2. Sitio web seguro con certificado, y sitio no seguro no redirige.
3. Usuario: moodle, con contraseña moodle.Puertas que sirva para el usuario
del sistema (directorio home /var/www/moodle), FTP, SSH y para su base de
datos de MySQL.

---

#### PHPMyAdmin.
1. mysql.puertas.local
2. Sitio web seguro con certificado, y sitio no seguro no redirige.
3. Usuario: bbdd, con contraseña mysql.Puertas que sirva para el usuario del
sistema (directorio home /var/www/phpmyadmin), FTP, SSH y para todas las
bases de datos de MySQL.

---

#### OpenCMS (Apache Tomcat).
1. opencms.puertas.local
2. Usuario: opencms, con contraseña opencms.Puertas que sirva para el
usuario del sistema, FTP, SSH y para su base de datos de MySQL.

---

#### Prestashop (imagen de Docker que genere una instancia de Prestashop con la creación de su base de datos al lanzar un contenedor). Generar cuatro tiendas.
1. tienda01.puertas.local
2. tienda02.puertas.local
3. tienda03.puertas.local
4. tienda04.puertas.local

---
---
---

<a name="httpd"></a>

## Apache HTTPD Server

<a name="tomcat"></a>

## Apache Tomcat
- Jose Carlos Vicario Cobos
  
#### Instalamos el servidor Tomcat y todos sus componentes mediante la terminal
   `sudo apt install tomcat9*`

![Comando_Tomcat](/tomcat/image4.png)

#### Modificamos el puerto por el que trabaja Tomcat al 8081

![Ventana_Server_Tomcat](/tomcat/image6.png)

#### Crear el usuario OpenCMS para Tomcat

![Ventana_Users_Tomcat](/tomcat/image3.png)

#### Modificar el tamaño máximo de subida de Tomcat manager

Es necesario modificar el tamaño máximo de subida del manager de Tomcat; el tamaño por defecto es 50MB, mientras que el archivo .war de OpenCMS es de unos 250MB. Por lo tanto, hasta que no se modifique este límite no se podrá subir y desplegar la aplicación.

![Primera_Ventana_Manager_Tomcat](/tomcat/image1.png)

![Segunda_Ventana_Manager_Tomcat](/tomcat/image10.png)

#### Subimos mediante el manager el archivo .war de OpenCMS

![ManagerWeb_Tomcat](/tomcat/image15.png)

Y una vez subido, aparece desplegado con el resto de aplicaciones...

![ManagerWeb_Tomcat2](/tomcat/image2.png)

#### Crear un usuario para OpenCMS en MySQL, instalación del conector de Java para MySQL
OpenCMS necesita un usuario para crear y gestionar sus bases de datos, lo creamos mediante el terminal.

![MySQL_Tomcat](/tomcat/image11.png)

Además, para comunicar Java con MySQL, necesitamos instalar un conector específico. Para poder instalar este paquete, primero necesitaremos añadirlo con el comando

`sudo dpkg -i mysql-connector-java_8.0.28-1ubuntu21.10_all.deb`

![MySQL_DPKGJava](/tomcat/image16.png)

![MySQL_Java](/tomcat/image9.png)

#### Instalación de OpenCMS

Accedemos a la configuración con la ruta

`/opencms/setup`

![Setup_OpenCMS](/tomcat/image12.png)

Se nos muestran las opciones del servidor...

![Setup_OpenCMSID](/tomcat/image7.png)

Conectamos OpenCMS con nuestra base de datos...

![Setup_OpenCMSDB](/tomcat/image8.png)

Esperamos a que se termine la instalación

![Setup_OpenCMSFinal](/tomcat/image5.png)

Y, por último, se nos redirige a la página principal de OpenCMS

![Setup_OpenCMSIntro](/tomcat/image13.png)

...Y añadimos un usuario opencms

![Setup_OpenCMSUser](/tomcat/image14.png)


<a name="docker"></a>

## Docker

<a name="ftp"></a>

## FTP + Creación de Usuarios

#### Creación de usuarios

Usuario GLPI
![usuario_glpi](/ftp/1.png)

Usuario Moodle
![usuario_moodle](/ftp/2.png)

Usuario Opencms
![usuario_opencms](/ftp/3.png)

#### Añadimos a los usuarios

Añadimos al uduario glpi, la ruta de home, debe apuntar a /var/www/carpeta. Esto pasa con todos.
![añadiendo_glpi](/ftp/4.png)

Añadimos al usuario moodle.
![añadiendo_moodle](/ftp/5.png)


<a name="ssh"></a>

## SSH, información, instalación y funcionamiento.
- Jesús Roca Obispo

#### Definición.

SSH es ampliamente conocido por ser el protocolo seguro para la administración remota de servidores, routers, switches y un largo etcétera de equipos. El protocolo SSH permite manejar por completo el servidor o dispositivo de red mediante un intérprete de órdenes, además, también podemos redirigir el tráfico de X para ejecutar programas gráficos a través de la propia sesión SSH.

#### Otras características fundamentales.

Podemos copiar de manera segura, tanto archivos como carpetas, a través del protocolo SFTP, un protocolo hecho desde cero y que no tiene nada que ver con FTPS o FTPES.

El protocolo SSH proporciona confidencialidad (datos encriptados, cifrados punto a punto), autenticación (con usuario/contraseña, claves pública/privada), integridad (si los datos se modifican o los modifica un usuario malintencionado se podrá detectar).

#### Instalación de OpenSSH y funcionamiento en ubuntu.

Primero actualizamos los paquetes:

`sudo apt update`

Para instalar SSH:

`sudo apt install openssh-server`

Configuración del servidor SSH, se ubica en /etc/ssh/sshd_config:

![captura fichero SSH](/ssh/SSH1.png)

Para configurar las claves criptográficas configuramos el directorio: /home/usuario/.ssh/

Para arrancar el servidor usamos el comando:

`sudo /etc/init.d/ssh start`

Para pararlo:

`sudo /etc/init.d/ssh stop`

Para reiniciar el servidor:

`sudo /etc/init.d/ssh restart`

Para acceder a otro equipo mediante SSH usamos el comando:

`ssh “nombre usuario”@”IP:servidor”`

Luego nos pedirá la contraseña del equipo al que queremos acceder.


<a name="php"></a>

## PHP

<a name="mysql"></a>

## Instalación y Configuración MySQL Server
- Raúl Fernández Arce

#### Instalamos MySQL-server por linea de comandos.

`sudo apt install mysql-server`

Nos saltará la siguiente imagen, solo debemos seguir las indicaciones.

![Primera_Ventana_mysqlServer](/mysqlServidor/mysqlserver1.png)

#### Realizamos la instalación segura de MySQL mediante el siguiente comando, para darle una contraseña al root y editar algunos parámetros:

`sudo mysql_secure_installation`

El resultado de escribir ese comando es la solicitud de una contraseña para el usuario root de MySQL

![Solicitud_passwd](/mysqlServidor/instalacionSegura.png)

Y al escribir la contraseña nos pedirá que confirmemos una serie de parámetros:

1. Nos pide confirmar si estamos seguros de usar esa contraseña.

2. Borrar los usuarios anónimos.

3. Deshabilitar el acceso remoto del root, algo que es recomendable aceptar, y crear nosotros mismos nuestros usuarios para acceder a mysql.

4. Eliminar las bases de datos de prueba.

![Instalación_segura](/mysqlServidor/mysqlserver4.png)

#### Iniciamos sesión y creamos los usuarios

Para iniciar sesión usamos el comando:

`sudo mysql -u root -p`

Tras esto nos solicitará la contraseña que hemos escrito al realizar la instalación segura, y al ingresarla nos abrirá la línea de comandos de mysql server.

Al crear usuarios, si queremos usar contraseñas no seguras, deberemos escribir el siguiente comando:

`UNINSTALL COMPONENT "file://component_validate_password";`

Y con esto podremos usar la contraseña que queramos, sin importar su seguridad, algo que hemos puesto en práctica para la creación de nuestros usuarios.

![Creación de usuarios](/mysqlServidor/users1.png)

Y con la consulta

`SELECT user FROM mysql.user;`

podemos visualizar los usuarios que tenemos creados

![lista de usuarios](/mysqlServidor/users2.png)

Y al finalizar la creación de usuarios instalamos el componente de validación de contraseñas de nuevo:

`INSTALL COMPONENT "file://component_validate_password"`

Ahora damos permisos a los usuarios para que puedan tener todos los permisos en el acceso y las bases de datos con el comando:

`GRANT ALL ON *.* TO "usuario"@"localhost";`

Y con esto ya hemos finalizado la instalación y configuración de los usuarios de MySQL server

<a name="git"></a>

## Creación de la Página en Github

#### Creación del Repositorio

Primero debemos crear un repositorio en nuestra cuenta de Github que tenga de nombre el nombre de la página seguido de github.io

Podemos añadir una descripción, la visibilidad de la página y el README, si lo creamos y no hay ningún index en el repositorio se visualizará automáticamente el README.md

![Creacion_Repositorio](/githubPage/github1.png)

Después podemos editar el fichero README.md, en mi caso lo he nombrado index para mayor comodidad.

![Edicion_Fichero](/githubPage/github4.png)

Hacemos el commit para guardar los cambios

![Commit_Fichero](/githubPage/github5.png)

Nos vamos a la configuración del repositorio y vamos a la sección Pages en la barra de navegación izquierda. y ponemos un tema, que es el que tendrá la página

![Tema_Repo](/githubPage/github7.png)

Nos creará un fichero que nos explica como se escribe en markdown y ese es el que se subirá

![Fichero_Page](/githubPage/github9.png)

#### Clonación del repositorio en VSCode

Pulsamos F1 cuando nos encontramos dentro del VSCode y escribimos clone

![Clona](/githubPage/github10.png)

Seleccionamos el repositorio a clonar

![Repo](/githubPage/github11.png)

Elegimos el directorio en que queremos clonarlo de nuestro equipo, y a partir de ahí ya podemos editar el fichero.

![FinVSCODE](/githubPage/github12.png)

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```
