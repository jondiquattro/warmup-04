'use strict';

const superAgent = require('superagent'); //This is what opens the server up to external api servers


function fetchPeopleWithPromises(){
   const peopleArr=[];
   const promiseArr =[];
   
   superAgent.get('https://swapi.co/api/people')
   .then( (result)=>{
      result.body.results.forEach( (idx)=>{
         peopleArr.push(idx.url);
      })
      peopleArr.forEach( url =>{
         promiseArr.push(superAgent.get(url));//creates array of promises
         // console.log(promiseArr);
      })
      Promise.all(promiseArr)
      .then(
         (result)=>{
            for(let i =0; i< result.length; i++){
               console.log(result[i].body.name);
            }
         }
      )
   })

   return peopleArr;
}




fetchPeopleWithPromises();


