/**
 * API Applications Programming Interface
 * !API es un acronimo
 * 
 * una interfaza capas de comunicar dos entidades
 *  En donde se plasma la capa de negocio.
 * el mesero es la api
 * cliente-> necesito tal platillo
 * mesero -> toma el pedido
 * Cocina -> Prepara el pedido
 * mesero -> regresa con el pedido
 * ! La API nos conecta con la base de datos.
 * 
 * Conjunto de funciones y procedimientos que cumplen una o muchas funciones con el fin
 *  de ser utilizadas por otro software
 * 
 * Diferentes tipos de API
 *  REST ->  Es la separación entre cliente y servidor:
 *  el cliente no debe modificar directamente la lógica del servidor, 
 *  solo puede hacer consultas que el servidor decida cómo procesar; y el servidor 
 *  tampoco debe interferir con el funcionamiento del cliente, solo proporcionar información 
 *  cuando el cliente la requiera.
 * !PROTOCOLO HTTP -> 
 * Un protocolo sin estado-> el servidor no sabe quienes somos.
 * 
 * 
 * !características:
 * -protocolo cliente servidor sin estado HTTP
 * -Conjunto de operaciones bien definidas ( GET, POST, PUT, DELETE)
 * -sintaxis uiversal
 * -Uso de Hipermedios(HTML, XML, JSON)
 * RESTful -!  un servicio que implementa REST
 * 
 * !Hipermedio -> TEXTO con habilidades Extendidas
 * UNA api implementa REST
 *  Cliente -> browser
 * 
 * HIPER 
 * TEXT
 * TRANSFER
 * PROTOCOL
 * !HTTP
 * 
 * Cliente -> PAQUETE HTTP -> SERVIDOR
 * Cliente <- PAQUETE HTTP <- SERVIDOR
 *  
 * HEADER 
 * !Tipo de informacion que se envia
 * BODY
 * !contenido de la informacion codificada
 * 
 * !METODOS HTTP ->
 * GET->Obtener Informacion / Koders
 * POST->Enviar Informacion / Koders
 * PUT->Remplazar/ sustituir Info /koders/:id
 * PATCH->Actualizacion Parcial / Koders/:id
 * DELETE->Borrar algun recurso / koder/:id  
 * 
 * 
 * !LINK RECURSOS: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
 * 
 * ESTADOS HTTP:
 * 100-199- INFORMATIVOS
 * 200-299- SATISFACTORIOS
 * 300-399- REDIRECCIONES
 * 400-499- ERRORES DEL CLIENTE
 * 500-599-ERRORES DEL SERVIDOR
 * 
 */


