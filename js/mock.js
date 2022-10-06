// 1. Делаем mock (рандомные дата)

//случайное булевое число
export const randomBool = () =>{
    return Math.floor(Math.random() * 2); //упрощенная схема для целых чисел
}

//случайная дата
export const randomDate =() => {
    const begDa = new Date(1);
    const endDa = new Date();
    return new Date(Math.floor(Math.random() * (endDa - begDa)) + 1);
}

//случайное целое число в диапазоне от min-max
export const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//случайная строка из заданного абзаца
export const randomString = () => {
    const strings = [
    'Веницианский карнавал танцев и богохульных плясок: смотрим вместе',
    'Солнцестоим вместе или как провести выходные продуктивно',
    'Бредовые макеты и как с ним работать: спитч о проблемах друзей-фронтендеров',
    'Аукцион: лоснящаяся шкура золотого дракона Монина. Что скрывается в повале офиса Нагатино?',
    'К посещению приглашаются сотрудники 18-',
    'Если вы люите солнце и стоять - то данный курс вам очень подойдет. Мы вместе будем стоять и смотреть на солнце. Чистый кайф.',
    'Что делать если в дизайне, который вам отправил дизайнер написаны бредовые тексты? Посмеяться?! Это что для вас шуточки?!',
    'Если у вас еще осталась зарплата - приходите, мы будем рады ее забрать'
    ];

    const index = Math.floor(Math.random() * strings.length );
    return strings[index];
}

//случайная комбинация имени из набора
export const randomCombi = () => {
    const names = ['Петр', 'Василий', 'Николай', 'Олег', 'Павел'];
    const surnames = ['Иванов', 'Петров', 'Гагарин', 'Сюткин', 'Грозный'];
    const indexNames = Math.floor(Math.random() * names.length );
    const indexSurnames = Math.floor(Math.random() * surnames.length );
    return `${names[indexNames]} ${surnames[indexSurnames]}`;
}


// напишите функцию возвращающую объект (event) с полями
export const randomObject =() => {
    let event = { 
        // date, title, description, countLikes, names, registrationDisabled
    }
    event.date = randomDate();
    event.title = randomString();
    event.description = randomString();
    event.countLikes = randomInt(0,999);
    event.names = randomCombi();
    event.registrationDisabled = randomBool();
    return event;
}

// напишите функцию возвращающую массив с 10 событиями
export const events = () => {
    const arrayEvents = [];
    for (let i=0; i<9; i++){
        arrayEvents.push(randomObject());
    }
    return arrayEvents;
}

// выведите в консоль результат выполнения функции
export const print = () => {
    let resultEvents = [];
    resultEvents = events();
    console.log(resultEvents);
}