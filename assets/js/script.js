function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon-mobile').src = "/assets/responsive/menu_white_36dp.svg"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon-mobile').src = "/assets/responsive/close_white_36dp.svg"
    }
}