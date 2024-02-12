````Javascript
/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";


// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello World!");
});

export const statusServer = onRequest((request, response) => {
  logger.info("Two_Hello logs!", {structuredData: true});
  response.send("Servidor online na porta 5000");
});

/* exemplo 1 ---------------------------------------------------------------------------------------------------------------------*/
import * as functions from 'firebase-functions'

export const helloWorld = functions.https.onRequest((req,res)=>{
  res.send("Hello World")
})

export const statusServer = functions.https.onRequest((req,res)=>{
  res.send("Servidor online")
})

/* exemplo 2 ------------------------------------------------------------------------------------------------------------------*/

import * as functions from 'firebase-functions'
import * as express from 'express'

const api = express()

//Rotas

api.get('/',(req, res)=>{
    res.send('Hello World')
})

//Exports apps
exports.api = functions.https.onRequest(api)

/* exemplo 3 ------------------------------------------------------------------------------------------------------------------*/
````