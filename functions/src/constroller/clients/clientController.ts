import {clientBusiness} from '../../business/exportBusiness'
import { Client } from '../../interfaces/exportInterfaces'
// import { Client } from '../../interfaces/exportInterfaces'

class ClientController{

    getClientById = (idClient: string) =>{
        return clientBusiness.getClientById(idClient)
    }
    getClients = ()  =>{
        return clientBusiness.getClients()
    }
    createClients = (client:Client) =>{
        return clientBusiness.createClients(client)
    }
    updateClients = (client: Client) =>{
        return clientBusiness.updateClients(client)
    }
    deleteClients = (idClient:string) =>{
        return clientBusiness.deleteClients(idClient)
    }

}

export const clientController = new ClientController()