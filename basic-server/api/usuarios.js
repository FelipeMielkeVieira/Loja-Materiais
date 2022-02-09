inserirRota('/buscar_usuario', function (dados, resposta) {

    database(`SELECT * FROM USER`).then(result => {
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao buscar usuário!')
    })

    return resposta;
});

inserirRota('/criar_usuario', function (dados, resposta) {
    console.log(dados)

    database(`INSERT INTO USER (NOME, SENHA, EMAIL, TELEFONE) VALUES ("${dados.nome}", "${dados.senha}", "${dados.email}", "${dados.telefone}")
        `)
        .then(result => {
        console.log('Usuário inserido com sucesso!')
        resposta({message: 'Usuário inserido com sucesso!'})
    }).catch(erro => {
        console.log('Erro ao inserir usuário!')
        resposta({erro: 'Erro ao inserir usuário!'})
    });
})