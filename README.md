# Chat

Crear una app de Express que:<br>

● Imprima en consola cuando se establece una conexión socket.<br>
● Imprima en consola cuando recibe un evento de tipo new-message con el contenido<br>
del mismo y los difunde al resto de los usuarios conectados al mismo socket.<br>
● Imprima en consola cuando un usuario se desconecta (documentación).<br>
Crear una app de Front-End (HTML, CSS y JS) que:<br>
● Se conecte a un Websocket.<br>
● Envíe eventos new-message, cuyo contenido es introducido en un input por el<br>
usuario (incluir un botón llamado “Enviar”). Al hacer esto se debe reenviar el mensaje<br>
hacia el resto de los usuarios conectados.<br>
● Cuando detecta nuevos mensajes, los agrega a la pantalla (DOM).<br>

Opcionales:<br>
● Agregar soporte para nombres de usuario.<br>
● Agregar fecha y hora en la que se envió el mensaje.<br>
● Informar cuando alguien se conecta o desconecta, en el cliente.<br>
● Persistir mensajes más allá de la sesión usando MongoDB y Mongoose.<br>
