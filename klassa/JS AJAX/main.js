//  AJAX - fetch()
// pobiera dane jako json
// fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => console.log(response));


//  wyświetlamy dane jako tablicę
/* fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(response => console.log(response)); */

//  2. AJAX - $.getJSON() (mamy dane stringowe i tworzymy tabele czyli inny metod, który opisany powyżej)
/* $.getJSON('https://jsonplaceholder.typicode.com/posts', response => {
    console.log(response);
}) */

// 3. AJAX - $.getJSON() (jeszcze jedna metoda) w przypadku błędu pokaże gdzie konkretnie nie działa funkcja (jeżeli usunąć ze słowa users na koncu linka s, to pokaże bląd)

/* $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    dataType: "json",
    success: function(resultJSON) {
        console.log(resultJSON);
    },
    onerror: function(msg) {
        console.log(msg);
    }
}); */
//  4. Piszemy sami funkcje do pobrania danych na czystym JS

const ajax = (method, url) => {
    console.log(method, url);
    let httpReq = new XMLHttpRequest();
    // otwieramy polączenie
    httpReq.open(method, url);
    // console.log(httpReq);
    // jeśli w momencie dotarcia do serwera
    httpReq.onreadystatechange = () => {
        // jeśli wszystko poszlo dobrze i dane zostałe zwrócone (dane znajdują się w responseText: w consoli)
        if (httpReq.readyState === 4 && httpReq.status === 200) {
            //    wrzucamy gotowe dane do zmiennej
            let response = httpReq.responseText;
            // tworzymy ze stringa, który otrzymaliśmy tabele
            response = JSON.parse(response);
            console.log(response);
            // zerujemy połączenie
            httpReq = null;
        }
    }

    //wywołujemy .onreadystatechange() (WYSYŁAMY POŁĄCZENIE)
    httpReq.send();
}
ajax('GET', 'https://jsonplaceholder.typicode.com/users');
// możemy zrobić tak żeby było odswieżane eventualnie do kursów walut, odnawiać dane
/* setInterval(() => {
    ajax('GET', 'https://jsonplaceholder.typicode.com/users');
}, 3000); */