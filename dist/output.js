/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/api.js":
/*!*******************!*\
  !*** ./js/api.js ***!
  \*******************/
/*! exports provided: ApiCrud, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiCrud\", function() { return ApiCrud; });\n// 5. Создаем класс API\nconst dicCreate = 'POST'\nconst dicRead   = 'GET'\nconst dicUpdate = 'PUT'\nconst dicDelete = 'DELETE'\n\nasync function createApi (method = dicRead, path, data = null) {\n    const headers = {}\n    let valueStr\n\n    if (data){\n        headers['Contenr-Type'] = 'application/json'\n        valueStr = JSON.stringify(data)\n    }\n\n    try{\n        const response = fetch(path, {\n            method,\n            headers,\n            valueStr,\n        })\n\n        return (await response).json()\n    }\n    catch(error){\n        console.warn('Error ', error.message)\n    }\n}\n\nclass ApiCrud {\n    constructor(path, data){\n        this.path = path \n        this.data = data\n    }\n\n    create (path, data) {\n        return createApi(dicCreate, path, data)\n    }\n    read (path, data) {\n        return createApi(dicRead, path)\n    }\n    update (path, data) {\n        return createApi(dicUpdate, path, data)\n    }\n    delete (path, data) {\n        return createApi(dicDelete, path, data)\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ApiCrud);\n\n//# sourceURL=webpack:///./js/api.js?");

/***/ }),

/***/ "./js/getData.js":
/*!***********************!*\
  !*** ./js/getData.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getData; });\n// 2. Получение данных с сервера\nasync function getData(callback) {\n    const currentPath = '../server/data'\n    let resultGetData\n    try{\n        const response = await fetch(currentPath);\n        resultGetData = await response.json();\n    }\n    catch (error){\n        return [error];\n    }\n\n    if (callback){\n        callback(resultGetData)\n    }else{\n    return resultGetData\n    }\n}\n\n\n//# sourceURL=webpack:///./js/getData.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock.js */ \"./js/mock.js\");\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData.js */ \"./js/getData.js\");\n/* harmony import */ var _renderList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderList.js */ \"./js/renderList.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup.js */ \"./js/popup.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.js */ \"./js/api.js\");\n// Объединяем файлы js\n\n\n\n\n\n\n\n    console.log(Object(_mock_js__WEBPACK_IMPORTED_MODULE_0__[\"events\"])())\n    \n    const data = Object(_getData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    console.log(data);\n    \n    const appendSection = Object(_getData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_renderList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/mock.js":
/*!********************!*\
  !*** ./js/mock.js ***!
  \********************/
/*! exports provided: getRandomBool, getRandomDate, getRandomInt, getRandomString, getRandomFullName, getRandomObject, events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomBool\", function() { return getRandomBool; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomDate\", function() { return getRandomDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomInt\", function() { return getRandomInt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomString\", function() { return getRandomString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomFullName\", function() { return getRandomFullName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomObject\", function() { return getRandomObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"events\", function() { return events; });\n// 1. Делаем mock (рандомные дата)\n// Общие константы\nconst strings = [\n    'Веницианский карнавал танцев и богохульных плясок: смотрим вместе',\n    'Солнцестоим вместе или как провести выходные продуктивно',\n    'Бредовые макеты и как с ним работать: спитч о проблемах друзей-фронтендеров',\n    'Аукцион: лоснящаяся шкура золотого дракона Монина. Что скрывается в повале офиса Нагатино?',\n    'К посещению приглашаются сотрудники 18-',\n    'Если вы люите солнце и стоять - то данный курс вам очень подойдет. Мы вместе будем стоять и смотреть на солнце. Чистый кайф.',\n    'Что делать если в дизайне, который вам отправил дизайнер написаны бредовые тексты? Посмеяться?! Это что для вас шуточки?!',\n    'Если у вас еще осталась зарплата - приходите, мы будем рады ее забрать'\n    ]\n    const names = ['Петр', 'Василий', 'Николай', 'Олег', 'Павел']\n    const surnames = ['Иванов', 'Петров', 'Гагарин', 'Сюткин', 'Грозный']\n\n//случайное булевое число\nconst getRandomBool = () => Math.random() * 2 == 1;\n\n//случайная дата\nconst getRandomDate =() => {\n    const begDate = new Date(1);\n    const endDate = new Date();\n    return new Date(Math.floor(Math.random() * (endDate - begDate)) + 1);\n}\n\n//случайное целое число в диапазоне от min-max\nconst getRandomInt = (min, max) => {\n    return Math.floor(Math.random() * (max - min + 1) ) + min;\n}\n\n//случайная строка из заданного абзаца\nconst getRandomString = () => {\n    const index = getRandomInt(0, strings.length - 1)\n    return strings[index];\n}\n\n//случайная комбинация имени из набора\nconst getRandomFullName = () => {\n    const indexNames = getRandomInt(0, names.length - 1)\n    const indexSurnames = getRandomInt(0, surnames.length - 1)\n    return `${names[indexNames]} ${surnames[indexSurnames]}`\n}\n\n\n// напишите функцию возвращающую объект (event) с полями\nconst getRandomObject =() => ({\n    date: getRandomDate(),\n    title: getRandomString(),\n    description: getRandomString(),\n    countLikes: getRandomInt(0,999),\n    names: getRandomFullName(),\n    registrationDisabled: getRandomBool(),\n})\n\n// напишите функцию возвращающую массив с 10 событиями\nconst events = () => {\n    const arrayEvents = [];\n    for (let i=0; i<9; i++){\n        arrayEvents.push(getRandomObject());\n    }\n    return arrayEvents;\n}\n\n//# sourceURL=webpack:///./js/mock.js?");

/***/ }),

/***/ "./js/popup.js":
/*!*********************!*\
  !*** ./js/popup.js ***!
  \*********************/
/*! exports provided: openPopup, closePopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openPopup\", function() { return openPopup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closePopup\", function() { return closePopup; });\n//3.2 Работа с DOM popup\n\nconst openPopup = () => {\n    const body = document.querySelector('body')\n    body.style.overflowY = 'hidden'\n    \n    const popup = document.querySelector('.popup-bgr')\n    popup.className = 'popup-bgr'\n}\n\nconst closePopup = (e) => {\n    console.log(e)\n    if (e.code !== 'Escape' && e.type !== 'click'){\n        return \n    }\n\n    const body = document.querySelector('body')\n    body.style.overflowY = '' \n\n    const popup = document.querySelector('.popup-bgr')\n    popup.className = 'popup-bgr hidden'\n}\n\nconst buttonClose = document.querySelector('.popup-but-close')\nbuttonClose.addEventListener('click', closePopup)  \n// const popup = document.querySelector('.popup')\n// popup.addEventListener('keydown',closePopup)\nconst body = document.querySelector('body')\nbody.addEventListener('keydown',closePopup)\n\n//# sourceURL=webpack:///./js/popup.js?");

/***/ }),

/***/ "./js/renderList.js":
/*!**************************!*\
  !*** ./js/renderList.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./js/popup.js\");\n// 3.1 Работа с DOM\n\n\n\nconst postAuthor = 'Author'\nconst postDate = 'Date'\nconst postHeader = 'Header'\nconst postLike = 'Like'\nconst postRegistrartion = 'Registration'\n\nconst appendDataInHTML = (appendData) => {\n    const containerHTML = document.querySelector('.container')\n    containerHTML.append(appendData)\n}\n\nconst createPostCol = (nameColumn) => {\n    const column = document.createElement('div')\n    column.className = `news-post-${nameColumn.toLowerCase()}`\n    return column\n}\n\nconst createNewPostDate = (dataPost) => {\n    const date = createPostCol(postDate)\n    const label = document.createElement('label')\n    label.className = 'news-post-date-label'\n    const colDate = dataPost.date.split('-')\n    label.textContent = `${colDate[2]}.${colDate[1]}.${colDate[0]}`\n    // label.textContent = format(parse(dataPost.date, 'yyyy-MM-dd', new Date()), 'MM.dd.yyyy')\n    \n    date.append(label)\n    return date\n}\n\nconst createNewPostHeader = (dataPost) => {\n    const header = createPostCol(postHeader);\n\n    const title = document.createElement('p')\n    title.className = 'news-post-header-title'\n    title.textContent = dataPost.title\n    header.append(title)\n\n    const descr = document.createElement('p')\n    descr.className = 'news-post-header-text'\n    descr.textContent = dataPost.description\n    header.append(descr)\n\n    return header\n}\n\nconst createNewPostLike = (countLike) => {\n    const like = createPostCol(postLike);\n\n    const img = document.createElement('img')\n    img.className = 'news-post-like-img'\n    img.src = 'image/shape.png'\n    like.append(img)\n\n    const label = document.createElement('label')\n    label.className = 'news-post-like-count'\n    label.textContent = countLike\n    like.append(label)\n\n    return like\n}\n\nconst createNewPostAuthor = (arrayAuthor) => {\n    const author = createPostCol(postAuthor);\n    let text = '';\n    const label = document.createElement('label')\n    label.className = 'news-post-author-label'\n    text = label.innerText\n    arrayAuthor.forEach(author => text = text + author + '\\n')\n    label.innerText = text\n    // label.textContent = label.textContent.trim()\n    author.append(label)\n\n    return author\n}\n\nconst createNewPostRegistration = (isReg) => {\n    const registration = createPostCol(postRegistrartion);    \n\n    const button = document.createElement('button')\n    button.className = isReg? 'news-but-registr_close' : 'news-but-registr'\n    button.textContent = isReg ? 'Регистрация закрыта':'Зарегистрироваться'\n    registration.append(button)\n    if (!isReg) {\n        button.addEventListener('click', (e) => {\n        Object(_popup_js__WEBPACK_IMPORTED_MODULE_0__[\"openPopup\"])()\n    })\n}\n\n    return registration\n}\nconst createNews = (data) =>{\n    const count = data.length - 1\n    const section  = document.createElement('section')\n    section.classList.add('news')\n    \n    // создаем строку новостного поста\n        for (let i = 0; i <= count; i++){\n            const newsPost = document.createElement('div')\n            newsPost.className = 'news-post'\n\n            // создаем столбец Дата\n            const postDate = createNewPostDate(data[i]);\n            newsPost.append(postDate)\n            \n            const postHeader = createNewPostHeader(data[i]);\n            newsPost.append(postHeader)\n\n            const postLike = createNewPostLike(data[i].countLikes);\n            newsPost.append(postLike)\n\n            const postAuthor = createNewPostAuthor(data[i].names);\n            newsPost.append(postAuthor)\n\n            const postReg = createNewPostRegistration(data[i].registrationDisabled);\n            newsPost.append(postReg)\n\n            section.append(newsPost)\n        }\n        return section\n    } \n\nconst renderDataTable = (data) => {\n    // Создаем секцию Новости\n    const appendHTML = createNews(data)\n    appendDataInHTML(appendHTML)\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderDataTable);\n\n//# sourceURL=webpack:///./js/renderList.js?");

/***/ })

/******/ });