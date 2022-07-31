# chat

Crear una app de Express que:
● Imprima en consola cuando se establece una conexión socket.
● Imprima en consola cuando recibe un evento de tipo new-message con el contenido
del mismo y los difunde al resto de los usuarios conectados al mismo socket.
● Imprima en consola cuando un usuario se desconecta (documentación).
Crear una app de Front-End (HTML, CSS y JS) que:
● Se conecte a un Websocket.
● Envíe eventos new-message, cuyo contenido es introducido en un input por el
usuario (incluir un botón llamado “Enviar”). Al hacer esto se debe reenviar el mensaje
hacia el resto de los usuarios conectados.
● Cuando detecta nuevos mensajes, los agrega a la pantalla (DOM).

Opcionales:
● Agregar soporte para nombres de usuario.
● Agregar fecha y hora en la que se envió el mensaje.
● Informar cuando alguien se conecta o desconecta, en el cliente.
● Persistir mensajes más allá de la sesión usando MongoDB y Mongoose.
