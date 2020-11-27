//  USe fetch API

// https://developer.mozilla.org/fr/docs/Web/API/Fetch_API


// APP naviguateur

// DB => data => API =>  JSON

// =================================


// FRONT   vue react html   => CDN

//        ||||||  API  |||||   JSON   graphql  REST  soap   rpc

// BACK  php GO c++ JS python ruby    => server

//  DB sql nosql    => database


// =================================


const URL = 'https://jsonplaceholder.typicode.com/users'

// PROMISE based
fetch(URL)
  .then(response => { 
    // faire un truc avec response
  })
  .catch(error => {
    // faire X avec error
  })

  // async-await
  

// callBack   Hell

// function ABC() {
//   dewwdedwedwd
// }

// ABC(  , callback {
//   ABC(  , callback {
//     ABC(  , callback {
//       ABC(  , callback { })
//   })
  
//   })
  
// })
  
// promise then

// async await ES6  ecmac2016

