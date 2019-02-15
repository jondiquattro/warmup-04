'use strict';

const superAgent = require('superagent'); 
const peopleArr=[];
const promiseArr =[];

let url ='https://swapi.co/api/people';

function fetchWithPromises(url){
   superAgent.get(url)
   
   .then( (idx)=>{
      idx.body.results.forEach( (idx)=>{
         peopleArr.push(idx.url);

      })
      peopleArr.forEach( url =>{
         promiseArr.push(superAgent.get(url));
      })
      Promise.all(promiseArr)
      .then(
         (person)=>{
            for(let i =0; i< person.length; i++){
               console.log(person[i].body.name);
            }
         }
      )
   })

   return peopleArr;
}

async function fetchPeopleWithAsync(url){
   let SA =await superAgent.get(url);
   
   SA.body.results.forEach( (idx)=>{
      console.log(idx.name);
   })
   
}

fetchWithPromises(url);


// fetchPeopleWithAsync(url);