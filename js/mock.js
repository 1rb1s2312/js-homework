// 1. Делаем mock (рандомные дата)
// Общие константы
const strings = [
    'Веницианский карнавал танцев и богохульных плясок: смотрим вместе',
    'Солнцестоим вместе или как провести выходные продуктивно',
    'Бредовые макеты и как с ним работать: спитч о проблемах друзей-фронтендеров',
    'Аукцион: лоснящаяся шкура золотого дракона Монина. Что скрывается в повале офиса Нагатино?',
    'К посещению приглашаются сотрудники 18-',
    'Если вы люите солнце и стоять - то данный курс вам очень подойдет. Мы вместе будем стоять и смотреть на солнце. Чистый кайф.',
    'Что делать если в дизайне, который вам отправил дизайнер написаны бредовые тексты? Посмеяться?! Это что для вас шуточки?!',
    'Если у вас еще осталась зарплата - приходите, мы будем рады ее забрать'
    ]
    const names = ['Петр', 'Василий', 'Николай', 'Олег', 'Павел']
    const surnames = ['Иванов', 'Петров', 'Гагарин', 'Сюткин', 'Грозный']

//случайное булевое число
export const getRandomBool = () =>{
    return Math.floor(Math.random() * 2) == 1 ? true : false
}

//случайная дата
export const getRandomDate =() => {
    const begDate = new Date(1);
    const endDate = new Date();
    return new Date(Math.floor(Math.random() * (endDate - begDate)) + 1);
}

//случайное целое число в диапазоне от min-max
export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//случайная строка из заданного абзаца
export const getRandomString = () => {
    const index = getRandomInt(0, strings.length - 1)
    return strings[index];
}

//случайная комбинация имени из набора
export const getRandomFullName = () => {
    const indexNames = getRandomInt(0, names.length - 1)
    const indexSurnames = getRandomInt(0, surnames.length - 1)
    return `${names[indexNames]} ${surnames[indexSurnames]}`
}


// напишите функцию возвращающую объект (event) с полями
export const getRandomObject =() => ({
    date: getRandomDate(),
    title: getRandomString(),
    description: getRandomString(),
    countLikes: getRandomInt(0,999),
    names: getRandomFullName(),
    registrationDisabled: getRandomBool(),
})

// напишите функцию возвращающую массив с 10 событиями
export const events = () => {
    const arrayEvents = [];
    for (let i=0; i<9; i++){
        arrayEvents.push(getRandomObject());
    }
    return arrayEvents;
}