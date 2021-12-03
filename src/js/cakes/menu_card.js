class MenuCard {
    constructor(src, srcBig = "img/cakes/cakes/cake9.jpg", alt, text, price, wt, parentSelector) {
        this.src = src;
        this.alt = alt;
        this.text = text;
        this.price = price;
        this.wt = wt;
        this.parent = document.querySelector(parentSelector);
        this.srcBig = srcBig;
    }
    render(i = 0/*, className*/) {
        const element = document.createElement('div')
        //let pathToBigImg = "img/cakes/cakes/cake9.jpg"
        let pathToBigImg = this.srcBig;
        let foxy="", foxyTarget="";
        if (this.alt==="flower_fox_nsk logo"){
            foxy="foxy"
            foxyTarget="_blank"
        }
        if (i === 0) { //для вкладок
            element.innerHTML = `
            <div class="img_item view view-first">
                <a href=${pathToBigImg} target="${foxyTarget}">

                    <img src=${this.src} alt=${this.alt} class="cake-img flash">
                    <div class="mask">
                        <div class="flash data-flash ${foxy}">
                            <svg width="320px" height="320px"  class="border">
                                <polyline points="319,1 319,319 1,319 1,1 319,1"  />
                            </svg>
    <!--                        <h2>Заголовок</h2>-->
    <!--                        <h3>Текст</h3>-->
                            <div class="price">${this.price}</div>
                            <div class="wt">${this.wt}</div>
                        </div>
                    </div>
                </a>  
                <div class="descr"><p>${this.text}</div>         
            </div>
        `;
        } else { //для рандома
            element.innerHTML = `
            <div class="img_item view view-first flash">
                <img src=${this.src} alt=${this.alt} class="cake-img">
                <div class="descr"><p>${this.text}</div>
                <div class="mask2">
<!--                        <h2>Заголовок</h2>-->
<!--                        <h3>Текст</h3>-->
                    <div class="price">${this.price}</div>
                    <div class="wt">${this.wt}</div>
                </div>
            </div>
        `;
        }
        this.parent.append(element)
    }
}

export default MenuCard;