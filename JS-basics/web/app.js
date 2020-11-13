
const titre = document.querySelector('h1')
const btn = document.querySelector('.btn')
const a = document.querySelector('a')
const p = document.querySelector('p')
const domPosts = document.getElementById('posts')
const pyramid = document.getElementById('pyramid')


const ctaPosts = document.getElementById('cta-posts')
// const showPosts = document.getElementById('show-posts')

const countPosts = document.getElementById('count-posts')

titre.innerText = "Le Louvre"
a.innerText = "Google"

let POSTS = []

const API = 'https://jsonplaceholder.typicode.com/posts';

btn.addEventListener('click',() => {
  const initialHeight = pyramid.clientHeight;
  pyramid.style.height = `${initialHeight - 50}px`;
})

pyramid.addEventListener('mouseenter', ({screenX})=> {
  console.log(screenX);
  titre.style.textTransform = 'uppercase';
})
pyramid.addEventListener('mouseleave', (event)=> {
  console.log(event);
  titre.style.textTransform = 'none';
})

p.style.color = '#de322c'

// EXO
// au click  ctaPosts   fetch data , data => posts
// ctaPosts.addEventListener('click',()=> {
// })

async function fetchPosts(){
  // appelle le serveur sur url API, et j'attends une reponse que je charge dans response
  const response = await fetch(API)  // 5 sec.
  // j'attends la transformation de response , puis j'affect le tout a POSTS
  POSTS = await response.json()
  showPosts();
}

function showPosts() {
  //  transformer POSTS avec uniquement les titles
  const titles = POSTS.map(post => post.title)
  // pour chaque title dans titles
  titles.forEach(title => {
    // creer un element DOM de type li <li></li>
    const el = document.createElement('li')
    // inject dans cet element le text de title
    el.innerText = title;
    // monter dans le DOM (HTML) cet element
    domPosts.appendChild(el)
  });
}



countPosts.addEventListener('click', (e)=> {
  e.preventDefault()
  alert(POSTS.length)
  console.log(POSTS);
})
// click    clg POSTS




// modifier le titre en " Le louvre"
//  changer le text du a => Google
// button click => alert "🔫 PAN"
//  changer le style p , color : red
