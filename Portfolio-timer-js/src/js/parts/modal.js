function modal () {

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        modalBtn = document.querySelectorAll('.description-btn');
    // console.log(modalBtn);

    const openModal = () => {

        overlay.style.display = 'block';
        this.className = 'more-splash';
        document.body.style.overflow = 'hidden';
    };

    const modalClickOnTabs = () => {

        for (let i = 0; i < modalBtn.length; i++) {
            modalBtn[i].addEventListener('click', openModal);
        }
    };

    modalClickOnTabs();

    more.addEventListener('click', openModal);

    close.addEventListener('click', () => {
        
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
}

module.exports = modal;