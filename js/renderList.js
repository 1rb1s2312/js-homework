// 3.1 Работа с DOM

import { openPopup } from "./popup.js"

const postAuthor = 'Author'
const postDate = 'Date'
const postHeader = 'Header'
const postLike = 'Like'
const postRegistrartion = 'Registration'

const appendDataInHTML = (appendData) => {
    const containerHTML = document.querySelector('.container')
    containerHTML.append(appendData)
}

const createPostCol = (nameColumn) => {
    const column = document.createElement('div')
    column.className = `news-post-${nameColumn.toLowerCase()}`
    return column
}

const createNewPostDate = (dataPost) => {
    const date = createPostCol(postDate)
    const label = document.createElement('label')
    label.className = 'news-post-date-label'
    const colDate = dataPost.date.split('-')
    label.textContent = `${colDate[2]}.${colDate[1]}.${colDate[0]}`
    // label.textContent = format(parse(dataPost.date, 'yyyy-MM-dd', new Date()), 'MM.dd.yyyy')
    
    date.append(label)
    return date
}

const createNewPostHeader = (dataPost) => {
    const header = createPostCol(postHeader);

    const title = document.createElement('p')
    title.className = 'news-post-header-title'
    title.textContent = dataPost.title
    header.append(title)

    const descr = document.createElement('p')
    descr.className = 'news-post-header-text'
    descr.textContent = dataPost.description
    header.append(descr)

    return header
}

const createNewPostLike = (countLike) => {
    const like = createPostCol(postLike);

    const img = document.createElement('img')
    img.className = 'news-post-like-img'
    img.src = 'image/shape.png'
    like.append(img)

    const label = document.createElement('label')
    label.className = 'news-post-like-count'
    label.textContent = countLike
    like.append(label)

    return like
}

const createNewPostAuthor = (arrayAuthor) => {
    const author = createPostCol(postAuthor);
    let text = '';
    const label = document.createElement('label')
    label.className = 'news-post-author-label'
    text = label.innerText
    arrayAuthor.forEach(author => text = text + author + '\n')
    label.innerText = text
    // label.textContent = label.textContent.trim()
    author.append(label)

    return author
}

const createNewPostRegistration = (isReg) => {
    const registration = createPostCol(postRegistrartion);    

    const button = document.createElement('button')
    button.className = isReg? 'news-but-registr_close' : 'news-but-registr'
    button.textContent = isReg ? 'Регистрация закрыта':'Зарегистрироваться'
    registration.append(button)
    if (!isReg) {
        button.addEventListener('click', (e) => {
        openPopup()
    })
}

    return registration
}
const createNews = (data) =>{
    const count = data.length - 1
    const section  = document.createElement('section')
    section.classList.add('news')
    
    // создаем строку новостного поста
        for (let i = 0; i <= count; i++){
            const newsPost = document.createElement('div')
            newsPost.className = 'news-post'

            // создаем столбец Дата
            const postDate = createNewPostDate(data[i]);
            newsPost.append(postDate)
            
            const postHeader = createNewPostHeader(data[i]);
            newsPost.append(postHeader)

            const postLike = createNewPostLike(data[i].countLikes);
            newsPost.append(postLike)

            const postAuthor = createNewPostAuthor(data[i].names);
            newsPost.append(postAuthor)

            const postReg = createNewPostRegistration(data[i].registrationDisabled);
            newsPost.append(postReg)

            section.append(newsPost)
        }
        return section
    } 

const renderDataTable = (data) => {
    // Создаем секцию Новости
    const appendHTML = createNews(data)
    appendDataInHTML(appendHTML)

}

export default renderDataTable;