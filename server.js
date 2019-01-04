'use strict';

const superAgent = require('superagent'); //This is what opens the server up to external api servers

function fetchPeopleWithPromises(){
   const urlArr=[];
   superAgent.get('https://swapi.co/api/people')
   .then( (result)=>{
      result.body.results.forEach( (idx)=>{
         urlArr.push(idx.url);
      })
      console.log(urlArr);


   })
}

fetchPeopleWithPromises();