'use strict';

const express = require('express');
const cors = require('cors');//imports cors into this variable
const superAgent = require('superagent'); //This is what opens the server up to external api servers
const PORT = 3000;

const app = express;


app.get('/starNames', (request, response) => {
   const nameData = getStarWars(request.query.data)
     .then(nameData => response.send(nameData))
     .catch(error => handleError(error, response));
 });


function getStarWars(query) {
   const starData = `https://swapi.co/api/people/`;
   return superagent.get(starData)
     .then(data => {
       if (!data.body.results.length) {
         throw 'No Data';
       } else {
         console.log(data)
       }
     })
 }





//listener
