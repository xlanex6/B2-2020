//  USe fetch API

// https://developer.mozilla.org/fr/docs/Web/API/Fetch_API


// APP naviguateur

// DB => data => API =>  JSON

// FRONT 
// API
// BACK
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
  
