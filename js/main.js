// Объединяем файлы js
import {print} from '/js/mock.js'
import getData from '/js/getData.js'
import renderDataTable from '/js/renderList.js'
import {openPopup, closePopup} from '/js/popup.js'
import {apiCRUD} from '/js/api.js'

export default () =>{
    print();
    
    const data = getData();
    console.log(data);
    
    const appendSection = getData(renderDataTable)
}