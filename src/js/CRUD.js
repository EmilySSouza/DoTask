// INICIALIZAÇÃO DO ARRAY
let usuarios = ["Daniel", "Tábata", "Gabriel Reis"];

//CREATE - C
function criarUsuario(nome) {
  usuarios.push(nome);
  document.write(`<h1> Usuário Criado com Sucesso!: ${nome} </h1>`);
}

//READ - R
function lerUsuarios() {
  document.write(`<h1> Lista de usuários: ${usuarios} </h1>`);
}

function lerUsuarioPorIndice(indice) {
  if (indice >= 0 && indice < usuarios.length) {
    document.write(`<h1> Usuário Encontrado: ${usuarios[indice]} </h1>`);
  } else {
    alert("USUÁRIO NÃO ENCONTRADO.");
  }
}

//UPDATE - U
function atualizarUsuario(indice, novoNome) {
  if (indice >= 0 && indice < usuarios.length) {
    const nomeAntigo = usuarios[indice];
    usuarios[indice] = novoNome;
    document.write(
      `<h1> Usuário Atualizado: de ${nomeAntigo} para ${novoNome} </h1>`
    );
  } else {
    alert("USUÁRIO NÃO ENCONTRADO.");
  }
}

//DELETE - D
function deletarUsuario(indice) {
  if (indice >= 0 && indice < usuarios.length) {
    const usuarioRemovido = usuarios.splice(indice, 1);
    document.write(`<h1> Usuário Removido:${usuarioRemovido[0]} </h1>`);
  } else {
    alert("USUÁRIO NÃO ENCONTRADO.");
  }
}
