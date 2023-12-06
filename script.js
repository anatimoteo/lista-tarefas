
const tarefaInput = document.getElementById("tarefa"); // campo de input para novas tarefas
const adicionarBotao = document.getElementById("adicionar"); // botão para adicionar novas tarefas
const listaTarefas = document.getElementById("tarefas"); // lista para as tarefas
const listaTarefasFinalizadas = document.getElementById("tarefasFinalizadas"); // lista para as tarefas concluídas

// event listeners
adicionarBotao.addEventListener("click", adicionarTarefa);
tarefaInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        adicionarTarefa();
    }
});

// função para adicionar uma nova tarefa
function adicionarTarefa() {
    // pega o texto do input
    const tarefaTexto = tarefaInput.value;

    // verifica se não está vazio
    if (tarefaTexto.trim() !== "") {
        // cria um novo elemento li para a tarefa
        const novaTarefa = document.createElement("li");

        // adiciona o texto da tarefa e os botões
        novaTarefa.innerHTML = `
          ${tarefaTexto}
          <button class="concluir" onclick="concluirTarefa(this)">Concluir</button>
          <button class="excluir" onclick="excluirTarefa(this)">Excluir</button>
        `;

        // adiciona a nova tarefa à lista
        listaTarefas.appendChild(novaTarefa);

        // limpa o campo de input
        tarefaInput.value = "";
    } else {
        // alert caso esteja vazio
        alert(`Digite uma tarefa!`);
    }
}

// função para concluir uma tarefa
function concluirTarefa(botaoConcluir) {
    // obtém o elemento pai do botão (o li que contém a tarefa)
    const tarefa = botaoConcluir.parentElement;

    // move a tarefa para a lista de tarefas finalizadas
    listaTarefasFinalizadas.appendChild(tarefa);

    // remove o botão concluir para tarefas já concluídas
    botaoConcluir.remove();
}

// função para excluir uma tarefa
function excluirTarefa(botaoExcluir) {
    const tarefa = botaoExcluir.parentElement;
    // remove a tarefa
    tarefa.remove();
}
