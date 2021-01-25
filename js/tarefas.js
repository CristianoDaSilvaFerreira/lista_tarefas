let inputNovaTarefa = document.querySelector('#inputNovaTarefa');
let btnAddTarefa = document.querySelector('#btnAddTarefa');
let listaTarefa = document.querySelector('#listaTarefa');

// Gerar metodo de adicionar evendo a tecla ENTER 
inputNovaTarefa.addEventListener('keypress', (e) => {

    if(e.keyCode == 13) {
        let tarefa = {
            nome: inputNovaTarefa.value,
            id: gerarID(),
        }

        adicinarTarefa(tarefa);
    }
});


// Gerando o evento do cliquei no botão
btnAddTarefa.addEventListener('click', (e) => {
    let tarefa = {
        nome: inputNovaTarefa.value,
        id: gerarID(),
    }

    adicinarTarefa(tarefa);
    
});


// Criando uma função para gerar ID aletoriamente
function gerarID() {
    return Math.floor(Math.random() * 3000);
}

// Função para adicinoar tarefas
function adicinarTarefa(tarefa) {

    let li = criarTagLI(tarefa);
    listaTarefas.appendChild(li);
    inputNovaTarefa.value = '';
}

// Função para criar tabelas dinamicamente
function criarTagLI(tarefa) {

    let li = document.createElement('li');

    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div');

    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcao');
    btnEditar.innerHTML = '<i class="fa fa-pencil"></i>';
    btnEditar.setAttribute('onclick', 'editar('+tarefa.id+')');

    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnAcao');
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
    btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')');

    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);
    return li;
}

// Função Editar
function editar(idTarefa) {
    alert(idTarefa);
}


// Função Excluir
function excluir(idTarefa) {
    alert(idTarefa);
}