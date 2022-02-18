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
_Realizado por Jseús Roca_

- [PHP](#php)
_Realizado por Ahmed_

- [Mysql Server](#mysql)
_Realizado por Raúl Arce_

- Página de Github
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

<a name="docker"></a>

## Docker

<a name="ftp"></a>

## FTP + Creación de Usuarios

<a name="ssh"></a>

## SSH

<a name="php"></a>

## PHP

<a name="mysql"></a>

## Instalación y Configuración MySQL Server
- Raúl Fernández Arce

1. #### Instalamos MySQL-server por linea de comandos.

`sudo apt install mysql-server`

Nos saltará la siguiente imagen, solo debemos seguir las indicaciones.

![Primera_Ventana_mysqlServer](/mysqlServidor/mysqlserver1.png)

2. #### Realizamos la instalación segura de MySQL mediante el siguiente comando, para darle una contraseña al root y editar algunos parámetros:

`sudo mysql_secure_installation`

El resultado de escribir ese comando es la solicitud de una contraseña para el usuario root de MySQL

![Solicitud_passwd](/mysqlServidor/instalacionSegura.png)

Y al escribir la contraseña nos pedirá que confirmemos una serie de parámetros:

1. Nos pide confirmar si estamos seguros de usar esa contraseña.

2. Borrar los usuarios anónimos.

3. Deshabilitar el acceso remoto del root, algo que es recomendable aceptar, y crear nosotros mismos nuestros usuarios para acceder a mysql.

4. Eliminar las bases de datos de prueba.

![Instalación_segura](/mysqlServidor/mysqlserver4.png)

3. #### Iniciamos sesión y creamos los usuarios

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