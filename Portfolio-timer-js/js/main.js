window.addEventListener('DOMContentLoaded', () => {
  
   'use strict';

   // !!! Added timer !!!

   let deadLine = '2019-08-01';

   const getTimeRemaining = (endtime) => {
       let t = Date.parse(endtime) - Date.parse(new Date()),
           seconds = Math.floor((t/1000) % 60),
           minutes = Math.floor((t/1000/60) % 60),
           hours = Math.floor((t/(1000*60*60)));
        // if somebody needs with days and hours
        /* hours = Math.floor((t/1000/60/60) % 24),
           days = Math.floor((t/(1000*60*60*24))); */

        return {
            'total' : t,
            'seconds' : seconds,
            'minutes' : minutes,
            'hours' : hours
        };
   };

   //   Tabs

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    console.log(tab);

    const hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }; 

    hideTabContent(1);

    const showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show'); 
        }
    };

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < tab.length; i++){
                if (target == tab[i]){
                    hideTabContent(0); 
                    showTabContent(i);
                    break;
                }
            }
        }
    });

});