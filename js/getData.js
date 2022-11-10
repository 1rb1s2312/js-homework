// 2. Получение данных с сервера
export default async function getData(callback) {
    const currentPath = '../server/data'
    let resultGetData
    try{
        const response = await fetch(currentPath);
        resultGetData = await response.json();
    }
    catch (error){
        return [error];
    }

    if (callback){
        callback(resultGetData)
    }else{
    return resultGetData
    }
}
