### Práctica Final Despliegue de Aplicaciones Web

Esta página web estática contiene todas las tareas que hemos ido realizando en la práctica sobre el servidor de la clase.

## Listado de Componentes Necesarios y sus Responsables

- Apache HTTPD Server
_Realizado por Emilio_

- Apache Tomcat
_Realizado por José Carlos_

- Docker
_Realizado por Jesús Ruiz_

- FTP Server
_Realizado por Josema_

- SSH
_Realizado por Jseús Roca_

- PHP
_Realizado por Ahmed_

- Mysql Server
_Realizado por Raúl Arce_

- Página de Github
_Realizado por Raúl Arce_

## Servidores a Desplegar y sus Tutoriales | Requisitos

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

## Instalación y Configuración MySQL Server
- Raúl Fernández Arce

1. Instalamos MySQL-server por linea de comandos.

`sudo apt install mysql-server`

Nos saltará la siguiente imagen, solo debemos seguir las indicaciones.

![Primera_Ventana_mysqlServer](./mysqlServidor/mysqlserver1)


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