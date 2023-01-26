let todos = []

for (let i = 0; i < 0; i++) {
    todos.push({
        name: "name " + i
    })
    
}

let listTugas = document.getElementById('todos') // <ul id="todos"> </ul>
listTugas.style.fontFamily = 'Poppins';
const inputTodo = document.getElementById('input-todo')
inputTodo.addEventListener("keyup",function(event){
    if(event.key === 'Enter'){
        ketikaTombolSubmitDiklik()
    }
})

renderUlangTodo();

document
    .getElementById('submit-button') // <button type="button" id="submit-button">add</button>
    .addEventListener('click', ketikaTombolSubmitDiklik)



// ending baca
function ketikaTombolSubmitDiklik() {
    const tugasBaru = inputTodo.value;

    // tambah tugas ke list tugas
    todos.push({
        name: tugasBaru
    })

    renderUlangTodo()

    inputTodo.value = ''
}

function renderUlangTodo() {
    listTugas.innerHTML = '';

    if(todos.length > 0){
        for (let index = 0; index < todos.length; index = index + 1) {
            // <ul id="todos">
            //  <li>Tugas 1</li>
            //  <li>Tugas 2</li>
            // </ul>
            listTugas.innerHTML = listTugas.innerHTML +
                `<li class="list">${todos[index].name} <button onclick="tugasSelesai('${index}')"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
             </svg></button></li>`
        }
    }else{
        listTugas.innerHTML = '<p class="not_data">Data not exist</p>';
    }
}



function tugasSelesai(index) {
    todos = todos.filter(function (val, indexFilter) {
        return indexFilter != index
    })

    renderUlangTodo()
}







