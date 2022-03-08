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

    database(`INSERT INTO USER (NOME, SENHA, EMAIL, TELEFONE, CRIACAO) VALUES ("${dados.nome}", "${dados.senha}", "${dados.email}", "${dados.telefone}", "${dados.data}")
        `)
        .then(result => {
        console.log('Usuário inserido com sucesso!')
        resposta({message: 'Usuário inserido com sucesso!'})
    }).catch(erro => {
        console.log('Erro ao inserir usuário!')
        resposta({erro: 'Erro ao inserir usuário!'})
    });
})

inserirRota('/usuario_especifico', function (dados, resposta) {

    database(`SELECT * FROM USER WHERE NOME = "${dados.nome}"`)
    .then(result => {
        console.log('Usuário inserido com sucesso!')
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao inserir usuário!')
        resposta(result)
    });
})

inserirRota('/excluir_usuario', function (dados, resposta) {

    database(`DELETE * FROM USER WHERE NOME = "${dados.nome}"`)
    .then(result => {
        console.log('Usuário inserido com sucesso!')
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao inserir usuário!')
        resposta(result)
    });
})