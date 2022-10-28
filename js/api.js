// 5. Создаем класс API
const dicCreate = 'POST'
const dicRead   = 'GET'
const dicUpdate = 'PUT'
const dicDelete = 'DELETE'

async function createApi (method = dicRead, path, data = null) {
    const headers = {}
    let valueStr

    if (data){
        headers['Contenr-Type'] = 'application/json'
        valueStr = JSON.stringify(data)
    }

    try{
        const response = fetch(path, {
            method,
            headers,
            valueStr,
        })

        return (await response).json()
    }
    catch(error){
        console.warn('Error ', error.message)
    }
}

export class ApiCrud {
    constructor(path, data){
        this.path = path 
        this.data = data
    }

    create (path, data) {
        return createApi(dicCreate, path, data)
    }
    read (path, data) {
        return createApi(dicRead, path)
    }
    update (path, data) {
        return createApi(dicUpdate, path, data)
    }
    delete (path, data) {
        return createApi(dicDelete, path, data)
    }
}

export default ApiCrud