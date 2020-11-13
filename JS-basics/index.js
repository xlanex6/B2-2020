const movies = require('./movies-light.json')




function salutation(name) {
  console.log(`Salut ${name} !`);
}

function quelType(data) {
  console.log(`c'est un ${ typeof(data) }`);
}

function titleOnly (){
  const titles = movies.map(film => film.title)
  console.log(titles);
}
function posterOnly (){
  const posters = movies.map(film => film.poster)
  console.log(posters);
}
function first (){
  const first = movies.slice(0,5)
  console.log(first);
}
function last (){
  const last = movies.slice(-5)
  console.log(last);
}

function sorted () {
  const sorted = movies.sort((a,b)=> b.release_date - a.release_date)
  console.log(sorted);
}

function genre() {
  
}

// le nombre d'item 
//  return QUE les TITRE
//  return QUE les POster
//  les premier 5 
//  les dernier 5 
// tri par ordre de sorti, retourner TOUS les movies
// filter par genre

// titleOnly()
// posterOnly()
// sorted()
// first()
// last()

// salutation(432424234)
// 'Salut Alex'

// console.log(movies.length);


