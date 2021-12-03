const popupBigImages = () => {

    const  imgPopup = document.createElement('div'),
        workSection = document.querySelector('.menulist'),
        bigImage = document.createElement('img');

    // console.log("imgPopup=",imgPopup);
    // console.log("workSection=",workSection);
    // console.log("bigImage=",bigImage);

    imgPopup.classList.add('popup')
    workSection.appendChild(imgPopup)

    imgPopup.style.display = 'none';
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.zIndex = '50'
    //imgPopup.classList.add("popup_img");
    //imgPopup.style.width = '80%';

    imgPopup.appendChild(bigImage)

    workSection.addEventListener('click',(event) => {
        //
        let target = event.target

        if (target.classList.contains('button-more-menulist') // исключение на кнопку в инсту
            || target.classList.contains('fa-instagram')
            || target.classList.contains('text')
            || target.classList.contains('foxy')    //исключение на fox_nsk
        ){console.log("click button-more-menulist");}
        else {
            event.preventDefault()
            let windowWide = window.innerWidth
            console.log("target=", target);
            // console.log("windowWide=", typeof (windowWide), windowWide);
            if ((windowWide > 767) && (target && (target.classList.contains('cake_img'))
                || (target.classList.contains('mask'))
                || (target.classList.contains('data-flash'))
            )) {
                console.log('1-1');
                imgPopup.style.display = 'flex';
                const path = target.parentNode.parentNode.getAttribute('href');
                // console.log("path=", target.parentNode.parentNode)
                bigImage.setAttribute('src', path)
            } else {
                console.log("else");
                //console.log('1-2');
            }
            //console.log("1-3");
            if (target && target.matches('div.popup') || target.matches('img')) {
                //console.log('1-4');
                //if (target.matches('div.popup') && target.matches('popup')){
                imgPopup.style.display = 'none';
            }
        }
    })
}


export default popupBigImages;