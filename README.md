*ESTE ES EL REPOSITORIO PARA EL ACA DE PROGRAMACIÓN AVANZADA*

-> GESTIÓN DE ESTUDIANTES CON NODE.js Y EXPRESS
-------------------------------------------------------------

PARA EJECUTAR

1.- Se debe tener previamente instalado Node.js.

2.- Descargar el proyecto desde la terminal a través de

     *git clone https://github.com/zarahmdm/proyecto-estudiantes*
     
     y luego ejecutar 
     
     *cd proyecto-estudiantes*.
     
3.- Instalar Express si anteriormente no se habia instalado.

     Con:

     *npm install*

     (Acá se debería instalar lo que dice el archivo *package.json*).

4.- Se ejecuta *node app.js*, este se puede usar todas las veces que queramos
    volver a hacer el proceso.

5.- Debe aparecer toda información de *app.js* + el link para el local host (Express).

(Más info en el texto sobre los contenidos y rutas para el local host abajo)

------------------------------------------------------------------------------------

CONTENIDOS

(Rutas más abajo)

1.- app.js 

  *Este es el archivo donde está el código principal + el reto adicional*
  
  - ¿Qué hace este código?
  
    ~ Puede listar los estudiantes que fueron proporcionados.
    
    ~ Buscar estudiantes por su número de ID.
    
    ~ Buscar estudiantes según la carrera.
    
    ~ Identificar los estudiantes aprobados.
    
    ~ Ïdentificar los estudiantes reprobados.
    
    ~ Calcular el promedio de las notas en general.
    
    ~ Identificar el mejor estudiante.
    
    ~ Iedntificar el peor estudiante.
    
    ~ Calcular la cantidad de estudiantes que hay en cada carrera.
    
    ~ Buscar estudiantes por el semestre de elección.
    
    ~ Identificar los estudiantes mayores de edad.
    
    ~ Generar un reporte con la información anterior.
    
    ~ El reto adicional.


2.- CONSOLA

  *En este archivo se encuentra la información que debería aparecer cuando ejecutamos "app.js"**

3.- pruebasLocalHost.json

  *Es este archivo se encuentra la información que debería aparecer cuando hacemos busquedas con*
  *las rutas para el local host*

4.- package.json

  *Sirve para guardar el nombre, la versión y las dependencias de express, así sabemos cual es*
  *la versión que se uso para el proyecto*

5.- package-lock.json

  *Sirve para guardar las versiones exactas de express + los paquetes internos, así cuando*
  *querramos instalarlo en otracomputadora sale identico*

--------------------------------------------------------------------------------------------------

RUTAS PARA EL LOCAL HOST

(Estas se colocan después de *https://localhost:3000*)

    GET /estudiantes                    -> listar todos los estudiantes
    GET /estudiantes/:id                -> buscar por ID
    GET /estudiantes/carrera/:carrera   -> buscar por carrera
    GET /aprobados                      -> promedio menor que 3.0
    GET /reprobados                     -> promedio mayor que 3.0
    GET /promedio-general               -> promedio entre todos los estudiantes
    GET /mejor                          -> mejor estudiante
    GET /peor                           -> menor promedio
    GET /conteo-carreras                -> contar estudiantes por carrera
    GET /semestre/:semestre             -> buscar cantidad de estudiantes por semestre
    GET /edad/:edad                     -> estudiantes mayores de edad 
    GET /reporte                        -> reporte general
    GET /ranking                        -> ranking de los estudiantes por promedio

NOTA INTERNA: Se ignora el GET.

------------------------------------------------------------------------------------------------
