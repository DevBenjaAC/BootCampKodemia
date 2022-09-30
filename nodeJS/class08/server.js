const http = require("https"); //importar mudolo http

// para crear el servidor recibe un requestListener-> dentro de el existe la requesicion y nos da una respuesta
const server = http.createServer((request, response) => {
  const url = request.url;
  console.log("url:", url);
  const method = request.method;
  console.log("method:", method);
  // response.write("hola desde mi servidor en node 🔥🔥");

  if (method === "GET" && url === "/koders") {
    response.write("Aqui estan todos los koders 👦🏻👦🏻👦🏻");
  } else if (method === "POST" && url === "/koders") {
    response.write("Aqui puedes crear un koder 👦🏻");
  } else {
    response.write("👻 No conozco esta solicitud 👻");
  }

  response.end(); //Cerramos la respuesta
});

/*
El puerto 8080 se usa para ambiente de desarollo 
http corre en el puerto 80 implicitamente 
https corre en puerto 443 
*/

//Una vez creado el servidor debe :
//Escuchar las requisisiones en un puerto

server.listen(8080, () => {
  console.log("server listening on port 8080");
});
