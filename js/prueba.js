

guardarLocalStorage();
obtenerLocalStorage();
function guardarLocalStorage(){
  let persona={
    nombre:"Alexis",
    edad:31,
    correo:"vale.alexis18@gmail.com",
    coords:{
      lat:10,
      lgn:-10
    }
  };

  localStorage.setItem("nombre","alexis");
  localStorage.setItem("persona", JSON.stringify(persona));
}

function obtenerLocalStorage(){
  const array=[];
  if(localStorage.getItem("nombre")){
    let nombre = localStorage.getItem("nombre");
    let persona = JSON.parse(localStorage.getItem("persona"));
    console.log(nombre);
    console.log(persona);
  }else{
    console.log("No hay datos en el LocalStorage");
  }
  let person={
    nombre:"Fernando",
    vale:"Vale"
  }
  let person2 = {
    nombre: "Toti",
    vale: "Villagran",
  };
 array.push(person);
 console.log(array);
 array.push(person2);
 console.log(array[1].nombre);
 console.log(array[1].vale);
 console.log(array)
 localStorage.setItem("personas", JSON.stringify(array));
}