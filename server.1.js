'use strict';

const superAgent = require('superagent'); //This is what opens the server up to external api servers


let url = 'https://swapi.co/api/people';

let fetchPeopleWithPromises = (url)=>{
   return superAgent.get(url).then( response =>{
      let wholeThing = response.body;
      return response.body.results.map( person => {
         return superAgent.get(person.url)
      })
   }).then( peoplePromises =>{
      return Promise.all(peoplePromises)
      .then( people =>{
         let names =[];
         for(let data of people){
            names.push(data.body.name)
         }
         return names;
      })
   })
   .catch(console.error)
} 

// fetchPeopleWithPromises(url)
// .then(people => console.log(people));

let fetchPeopleWithAsync = async (url) =>{
   try{

   
   let peopleSet = await superAgent.get(url)
   let people = (peopleSet.body && peopleSet.body.results) || [];
   let peopleRequests = people.map( (person)=> {
      return superAgent.get(person.url);
   })
   let swapinames = await Promise.all(peopleRequests)
   .then( people =>{
      let names = [];
      for (let data of people){
         names.push(data.body.name)
      }
      return names;
   })
   return swapinames;
}//end try

catch(e){console.error(e)};

}
fetchPeopleWithAsync(url)
.then( people =>{
   console.log(people)
})