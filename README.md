# APi_Qatar2022

La APi tiene 2 endpoints principales
/paises
/users

dentro del endpoint /paises podemos filtrar a los paises por:
/paises (muestra todos)
/paises/id/ (numero)
/paises/equipo/ (string)
/paises/dt (por nombre de director técnico)

podemos editar (lo hacemos a través del nombre del país), eliminar y agregar un pais
   
   *************
    
En cuanto a los users podenmos n filtrarlos por:
/users (muestra todos)
/users/id (numero)

A traves del método post, podemos:
users/login (registrarnos) 
  *Hay algunos campos obligatorios como el nombre, el mail y el password.
  *La contraseña está encriptada.

users/register (nuevo usuario) hay que tener en cuenta que necesitamos ciertas validaciones, como por ejemplo, el nombre debe tener un min y un máx de cantidad letars

En cuanto a la carga de imágenes, no pude hacerla. Me tira un error 500, como van a poder ver y no lo pude solucionar, (de igaulnmanera lo entrego así, para que puedan guiarme con el error)
y por eso no segui con la recuperación de contraseña, que era algo que particularmente me interesaba (siempre olvido las mías)
