const input = document.querySelector('input');
console.log(input);
console.log(input.__proto__);
console.log(input.value);
//Eventos: Acciones que el usuario hace en el viewport
input.addEventListener('keypress', (event)=>{
  console.log(event);
  console.log(`alguien presiono la tecla:${key} y el valor del input se actualizo a ${value}`);
})

const button = document.getElementById('00');
button.addEventListener('click', (event) =>{
  const id = button.id;
  console.log(id);
})