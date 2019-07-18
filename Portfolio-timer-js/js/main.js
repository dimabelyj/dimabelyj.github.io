window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // !!! Added timer !!!

    let deadLine = '2019-07-19';

    const getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        // if somebody needs with days and hours
        /* hours = Math.floor((t/1000/60/60) % 24),
           days = Math.floor((t/(1000*60*60*24))); */

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        };
        
    };

    const setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
            

        const updateClock = () => {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

           /*  if (t.hours < 10) {
                hours.textContent = '0' + t.hours;
            }
            if (t.minutes < 10){
                minutes.textContent = '0' + t.minutes;
            }
            if (t.seconds < 10){
                seconds.textContent = '0' + t.seconds;
            } */

            const addZero = (num) => {
                if (num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            };
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        };
        
        let timeInterval = setInterval(updateClock, 1000);
    };
    setClock('timer', deadLine);

    //   Tabs

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    console.log(tab);

    const hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hideTabContent(1);

    const showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    

});