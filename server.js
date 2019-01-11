'use strict';

const superAgent = require('superagent'); //This is what opens the server up to external api servers


function fetchPeopleWithPromises(){
   const peopleArr=[];
   
   superAgent.get('https://swapi.co/api/people')
   .then( (result)=>{
      result.body.results.forEach( (idx)=>{
         peopleArr.push(idx.url);
      })

      console.log(peopleArr);


   })
}


fetchPeopleWithPromises();