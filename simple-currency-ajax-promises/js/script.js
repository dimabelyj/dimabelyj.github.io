
let inputPln = document.getElementById('pln'),
    inputUsd = document.getElementById('usd');

inputPln.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            request.open("GET", "js/current.json");
        
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
        
            request.onload = function() {
                if(request.readyState === 4) {
                        if(request.status == 200) {
                            resolve(request.response)
                        }
                        else {
                            reject();                        
                        }
                }
            };
        });
    }

    catchData()
    .then(response => {
        console.log(response);
        let data = JSON.parse(response);
        inputUsd.value = inputPln.value / data.usd;
    })
    .catch(() => inputUsd.value = "Something wrong");


    /* let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputPln.value / data.usd;
        } else {
            inputUsd.value = "Something wrong";
        }
    }); */

});