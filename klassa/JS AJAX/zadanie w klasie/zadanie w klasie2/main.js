const getData = () => {
        if (window.scrollY + window.innerHeight > document.body.offsetHeight) {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => {
                    data.forEach(user => {
                        const container = document.getElementById('container');
                        container.innerHTML += `
                    <p>ID: ${user.id}</p>
                    <p>User Name: ${user.name}</p>
                    <p>User URL: ${user.website}</p>
                    <p>-------------------</p>
                    `;
                    });
                })
        }
    }
    // console.log(window);
window.addEventListener('scroll', getData)