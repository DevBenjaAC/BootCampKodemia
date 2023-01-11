/**
 * Generar un programa que nos muestre la 
fecha del dia de hoy con el siguiente formato: "YYYY MM DD"

 */
const diaHoy = () => {
  //Genere un objeto de tipo Date
  const hoy = new Date();
  //Obtuve el dia del mes a partir del objeto que gebere
  const dia = hoy.getDate();
  //obtener el numero del mes
  const mes = hoy.getMonth;
  //obtener el numero de año
  const anio = hoy.getFullYear;
  
  const fecha = (`${anio} ${mes} ${dia}`);
  console.log(fecha);
};

diaHoy()