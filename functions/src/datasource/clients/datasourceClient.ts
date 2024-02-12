import * as admin from "firebase-admin"
const firestore = admin.firestore()

import { Client, MessageTreatment } from "../../interfaces/exportInterfaces"
import { messageTreatmentBusiness } from '../../business/exportBusiness'


class clientDatasource{

    getClientById = async (idClient: string): Promise<MessageTreatment> =>{
        const collection = firestore.collection('clients')
        return await collection
         .doc(idClient)
         .get()
        .then( async (result)=>{
            return await messageTreatmentBusiness.sucessMsg("Cliente encontrado",result.data())
        })
        .catch((error)=>{
            return messageTreatmentBusiness.errorMsg('Falha ao buscar cliente, tente novamente', error)
        })
    }
    getClients = (): MessageTreatment =>{
        const client: Client = {id: '1', name: 'Bruno', email: 'bruno@gmail.com', sucess: true}
        return messageTreatmentBusiness.sucessMsg('Alguns clientes foram encontrados', client)
    }
    createClients = async (client: Client) : Promise<MessageTreatment> =>{        
        const setDoc = await firestore.collection('clients').doc().set(client);
        return messageTreatmentBusiness.sucessMsg(`Cliente ${client.email} adicionado`, setDoc)
    }
    updateClients = async (idClient:string, client: Client) : Promise<MessageTreatment> =>{        
        const setDoc = await firestore.collection('clients').doc(idClient).set(client);
        return messageTreatmentBusiness.sucessMsg(`Cliente ${client.email} atualizado`, setDoc)
    }
    deleteClients = async (idClient: string): Promise<MessageTreatment> =>{
        return await firestore.collection("clients")
        .doc(idClient)
        .delete({exists:true}).then(async () => {
            return await messageTreatmentBusiness.sucessMsg(`Cliente com o id ${idClient} removido`)
        }).catch((error) => {
            return messageTreatmentBusiness.errorMsg('Falha ao buscar cliente, tente novamente', error)
        });
    }

}

export const clienteDatasource = new clientDatasource()