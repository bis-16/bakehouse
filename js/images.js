const images = () => {
//всплывашка фото на весь экран по щелчку
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.js_cakes'),
        bigImage = document.createElement('img');

    imgPopup.classList.add('popup')
    workSection.appendChild(imgPopup)

    imgPopup.style.display = 'none';
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';

    imgPopup.appendChild(bigImage)

    workSection.addEventListener('click',(event) => {
        event.preventDefault()

        let target = event.target
        if (target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src',path)
        }
        if (target && target.matches('div.popup')){
            imgPopup.style.display = 'none';
        }

    })
}

export default images;