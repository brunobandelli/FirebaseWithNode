import {clienteDatasource} from '../../datasource/exportDatasource'
import { Client } from '../../interfaces/exportInterfaces'

class ClientBusiness{

    getClientById = (idClient: string) =>{
        return clienteDatasource.getClientById(idClient)
    }
    getClients = () =>{
        return clienteDatasource.getClients()
    }
    createClients = (client: Client) =>{
        return clienteDatasource.createClients(client)
    }
    updateClients = (client: Client) =>{
        const idClient: any = client.id;
        delete client.id;
        return clienteDatasource.updateClients(idClient, client)
    }
    deleteClients = (idClient:string) =>{
        return clienteDatasource.deleteClients(idClient)
    }

}

export const clientBusiness = new ClientBusiness()