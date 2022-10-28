// Объединяем файлы js
import {events} from '/js/mock.js'
import getData from '/js/getData.js'
import renderDataTable from '/js/renderList.js'
import {openPopup, closePopup} from '/js/popup.js'
import {ApiCrud} from '/js/api.js'


    console.log(events())
    
    const data = getData();
    console.log(data);
    
    const appendSection = getData(renderDataTable)