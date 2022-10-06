//3.2 Работа с DOM popup

export const openPopup = () => {
    const body = document.querySelector('body')
    body.style.overflowY = 'hidden'
    
    const popup = document.querySelector('.popup-bgr')
    popup.className = 'popup-bgr'
}

export const closePopup = (e) => {
    console.log(e)
    if (e.code !== 'Escape' && e.type !== 'click'){
        return 
    }

    const body = document.querySelector('body')
    body.style.overflowY = '' 

    const popup = document.querySelector('.popup-bgr')
    popup.className = 'popup-bgr hidden'
}

const buttonClose = document.querySelector('.popup-but-close')
buttonClose.addEventListener('click', closePopup)  
// const popup = document.querySelector('.popup')
// popup.addEventListener('keydown',closePopup)
const body = document.querySelector('body')
body.addEventListener('keydown',closePopup)