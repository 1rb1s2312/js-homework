// 2. Получение данных с сервера
import 'whatwg-fetch';

export default () => {
    const result = await getData();
}

async function getData() {
    try{
        const response = await fetch('/Data');
        const result = response.json;
        return result;
    }
    catch (error){
        return [];
    }
}