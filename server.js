'use strict';

const superAgent = require('superagent'); 


function fetchPeopleWithPromises(){
   const peopleArr=[];
   const promiseArr =[];
   
   superAgent.get('https://swapi.co/api/people')
   .then( (idx)=>{

      idx.body.results.forEach( (idx)=>{
         peopleArr.push(idx.url);

      })
      peopleArr.forEach( url =>{

         promiseArr.push(superAgent.get(url));
         
      })
      Promise.all(promiseArr)
      .then(
         (idx)=>{

            for(let i =0; i< result.length; i++){
               console.log(idx[i].body.name);
            }
         }
      )
   })

   return peopleArr;
}




fetchPeopleWithPromises();


