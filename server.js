'use strict';

const superAgent = require('superagent'); 
const peopleArr=[];
const promiseArr =[];

function fetchPeopleWithPromises(){

   
   superAgent.get('https://swapi.co/api/people')
   .then( (idx)=>{

      // console.log(idx.body.results.length);

      idx.body.results.forEach( (idx)=>{
         peopleArr.push(idx.url);

      })
// console.log(peopleArr);
      peopleArr.forEach( url =>{

         promiseArr.push(superAgent.get(url));
         
      })
      Promise.all(promiseArr)
      .then(
         (idx)=>{
            // console.log(idx[0].body.name)
            for(let i =0; i< idx.length; i++){
               console.log(idx[i].body.name);
            }
         }
      )
   })

   return peopleArr;
}


async function fetchPeopleWithAsync(){
   let SA =await superAgent.get('https://swapi.co/api/people');
   
   SA.body.results.forEach( (idx)=>{
      console.log(idx.name);
   })
   
}

// fetchPeopleWithPromises();


fetchPeopleWithAsync();