import { MessageTreatment } from "../../interfaces/exportInterfaces"

class MessageTreatmentBusiness {

    sucessMsg = (message: string, response?: any): MessageTreatment => {
        const _message: MessageTreatment = { message: `Sucess: ${message}`, status: 200, response: response}
        console.log(_message)
        return _message
    }

    infoMsg = (message: string, info?: any) => {
        const _message: MessageTreatment = { message: `info: ${message}`, status: 250, response: info}
        console.log(_message)
        return _message
    }

    errorMsg = (message: string, error?: any) => {
        const _message: MessageTreatment = { message: `error: ${message}`, status: 400, response: error}
        console.log(_message)
        return _message
    }

}

export const messageTreatmentBusiness = new MessageTreatmentBusiness()