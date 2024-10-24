
function pegar_dados() {

    var tasks = document.getElementById('text_task').value;

    const frases = localStorage.getItem('BD') ? JSON.parse(localStorage.getItem('BD')) : [];
    
    // ? -> Operador ternário
    // Se for encontrado alguma para em 'BD', execute o comando JSON.parse... . Se for falso, corre para o [] e cria uma array de objetos;

    arrayItens(tasks, frases);
}

const arrayItens = function (frases, mensagens) {

    const BD = {
        id: mensagens.length + 1,
        msg: frases 
    
    };
    mensagens.push(BD);
    
    localStorage.setItem('BD', JSON.stringify(mensagens));

    const nomes = mensagens.map(item => item.msg);
    
    localStorage.setItem('nomes', JSON.stringify(nomes));

    arrayExibir(frases);
}

function arrayExibir(exibir) {

    let main = document.getElementById("aqui");

    if (exibir && exibir.trim() !== "") {
        let section02 = document.createElement("section");
        section02.className = "section02";
        section02.innerHTML = `<p type="text" id="text_recebe">${exibir}</p> <button id="button_excluir" onclick="excluirElemento(this)">🗑</button>`;
        
        main.appendChild(section02);
    } else {
        console.log("Tentativa de exibir mensagem vazia ou inválida.");
    }
    
}

function excluirElemento(button) {
    let btn = document.getElementById('button_excluir');

    btn.addEventListener("mousemove", function(){

        const riscar = document.getElementById('text_recebe');

        riscar.style.textDecoration = "line-through";

    });

    btn.addEventListener("dblclick", function(){
        const section = button.parentElement;
        section.remove();
    });

    localStorage.removeItem('nome');
}