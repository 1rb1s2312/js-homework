// 5. Создаем класс API
const dicCreate = 'POST'
const dicRead   = 'GET'
const dicUpdate = 'PUT'
const dicDelete = 'DELETE'

async function restApi (method = dicRead, path, data = null) {
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

export class apiCRUD {
    constructor(method, path, data){
        this.method = method
        this.path = path 
        this.data = data
    }

    create (method = dicCreate, path, data) {
        return createApi(method, path, data)
    }
    read (method, path, data) {
        return createApi(method, path)
    }
    update (method = dicUpdate, path, data) {
        return createApi(method, path, data)
    }
    delete (method = dicDelete, path, data) {
        return createApi(method, path, data)
    }
}