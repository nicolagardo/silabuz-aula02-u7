console.log("Soy post");
const formTodo = document.getElementById("form");
const title = document.getElementById("title");
const body = document.getElementById("body");
const status = document.getElementById("status");


formTodo.addEventListener('submit', async event => {
    event.preventDefault();
    const data = {
        'title': title.value,
        'body': body.value,
        'status': status.value,
        //'author': 1
    }
    await fetch('http://127.0.0.1:8000/api/v2/todos/', {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        
    })
});