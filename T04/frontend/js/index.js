const main = document.querySelector('.row');

async function getTask() {
  // const id = '';
  const id = new URLSearchParams(window.location.search).get("id")
  const extra = id ? `${id}/` : '';
  console.log(id);

  try {
    const response = await fetch(`http://127.0.0.1:8000/api/v2/todos/${extra}`);
    const data = await response.json();
    id ? renderTodo(data) : renderTasks(data);
  } catch (error) {
    console.log(error);
  }
}

function renderTasks(data) {
  main.innerHTML = '';
  main.innerHTML += `      
  <div class="mb-5">
    <a href="./post.html" class="btn btn-primary">Crear</a>
  </div>`
  data.forEach((task) => {
    main.innerHTML += `
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <h4>${task.title}</h2>
          <p>
            ${task.body}
          </p>
          <a href="./detail.html?id=${task.id}" class="btn btn-primary">Revisar</a>
        </div>
      </div>
    </div>`;
  });
}

function renderTodo(data){
  main.innerHTML = `<div class="col-4">
  <div class="card">
    <div class="card-body">
      <h4>Detalle</h2>
      <p>
        Título: ${data.title}
      </p>
      <p>
        ${data.body}
      </p>
      <p class="card-text"><small class="text-muted">Fecha de creación: ${data.created_at}</small></p>
        <a href="/" class="btn btn-primary">Regresar</a>
        <a href="#" class="btn btn-primary">Editar</a>
        <a href="#" class="btn btn-danger">Eliminar</a>
    </div>
  </div>
</div>`
}

getTask();
