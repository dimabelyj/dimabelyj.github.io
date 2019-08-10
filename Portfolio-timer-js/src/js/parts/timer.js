function timer () {

    let deadLine = '2019-08-12';

    const getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        // if somebody needs with days and hours just comment upper string
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
}

module.exports = timer;