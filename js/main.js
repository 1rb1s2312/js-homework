// Объединяем файлы js
import _ from 'lodash' //TO_DO
import {print} from '/js/mock.js'
import getData from '/js/getData.js'
import renderDataTable from '/js/renderList.js'
import {openPopup, closePopup} from '/js/popup.js'
import {apiCRUD} from '/js/api.js'


    print();
    
    const data = getData();
    console.log(data);
    
    const appendSection = getData(renderDataTable)