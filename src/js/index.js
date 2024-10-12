
function pegar_dados() {
    var tasks = document.getElementById('text_task').value;
    
    // Adiciona a nova tarefa no localStorage
    const frases = localStorage.getItem('BD') ? JSON.parse(localStorage.getItem('BD')) : [];

    // ? -> Operador ternário
    // Se for encontrado alguma para em 'BD', execute o comando JSON.parse... . Se for falso, corre para o [] e cria uma array de objetos;


    arrayItens(tasks, frases);
}

function arrayItens(frases, mensagens) {

    const BD = {
        id: mensagens.length + 1,
        msg: frases
    
    };
    mensagens.push(BD);
    
    localStorage.setItem('BD', JSON.stringify(mensagens));

    // Coleta todas as mensagens para exibição
    const nomes = mensagens.map(item => item.msg);
    
    // Para cada item no array mensagens, ele pega apenas o valor da mensagem 'item.msg'
    localStorage.setItem('nomes', JSON.stringify(nomes));

    arrayExibir(nomes);
}

function arrayExibir(nomes) {
    document.getElementById('text_recebe').textContent = nomes.join(', ');
}
