let padre = (hijo1, hijo2, hijo3) => {
  setTimeout(hijo1, 2000);
  setTimeout(hijo2, 4000);
  setTimeout(hijo3, 6000);
};
let fun1 = () => {
  console.log("yo soy la funcion hijo 1");
};
let fun2 = () => {
  console.log("yo soy la funcion hijo 2");
};
let fun3 = () => {
  console.log("yo soy la funcion hijo 3");
};

padre(fun1, fun2, fun3);

