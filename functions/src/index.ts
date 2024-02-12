import * as admin from "firebase-admin"
var serviceAccount = require("../src/config/dldb-3c141-firebase-adminsdk-p1zs2-4e76a66475.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
import * as functions from 'firebase-functions'
import * as express from 'express'

import { clientController } from './constroller/exportControllers'




const appApi = express()
const appClients = express()

//Rotas

//Rota - API

appApi.get('/',(req, res)=>{
    res.send(`Hello World ${clientController.getClients()}`)
})

//Rota - Clients
appClients.get("/:idClient", async (req, res)=> {res.json( await clientController.getClientById(req.params.idClient))})
appClients.route('/')
    .get((req,res)=>{res.json( clientController.getClients())})
    .post(async(req,res)=>{res.json(await clientController.createClients(req.body))})
    .put(async (req,res)=>{res.json(await clientController.updateClients(req.body))})
    .delete(async (req,res)=>{res.json(await clientController.deleteClients(req.body.id))})



//Exports apps
exports.api = functions.https.onRequest(appApi)
exports.clients = functions.https.onRequest(appClients)
