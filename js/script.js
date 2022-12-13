let api = 'https://the-cocktail-db.p.rapidapi.com/search.php',';
let productos = undefined;

class personajes {
    constructor (nombre, especie, imagen){
    this.nombre= nombre;
    this.especie= especie;
    this.imagen= imagen;
}
    get datos (){
        return `Mi nombres es ${this.nombre} soy de Especie ${this.especie}`
    }
}

import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://the-cocktail-db.p.rapidapi.com/search.php',
  params: {s: 'vodka'},
  headers: {
    'X-RapidAPI-Key': '083a596554msh4dbfeeb0f918555p125631jsn13669175a3c3',
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);


axios.get(api + '/character')
  .then((response) => {
    console.log(response);
    sujetos = response.data.results;
    sujetos.map((item) => {
    let sujeto1 = new personajes(item.name,item.species,item.image)
    show(sujeto1)
    });
})
  .catch((error) => {
    console.log(error);
    })

const show = (sujeto1) => {
    let id = document.querySelector('#tarjetas');
    id.innerHTML += `<div class="base"><div class="base__tarjeta"><div>${sujeto1.datos}</div><img src="${sujeto1.imagen}"/></div></div>`;
}

show ()
