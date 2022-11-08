// Объединяем файлы js
import {events} from './mock.js'
import getData from './getData.js'
import renderDataTable from './renderList.js'
import {openPopup, closePopup} from './popup.js'
import {ApiCrud} from './api.js'


    console.log(events())
    
    const data = getData();
    console.log(data);
    
    const appendSection = getData(renderDataTable)