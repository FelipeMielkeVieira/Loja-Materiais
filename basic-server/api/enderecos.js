inserirRota('/adicionar_endereco', function (dados, resposta) {

    database(`INSERT INTO ENDERECO VALUES 
    (NULL, "${dados.cidade}", "${dados.bairro}", "${dados.rua}", "${dados.numero}", "${dados.complemento}", "${dados.usuario}", "${dados.estado}")`)
    .then(result => {
        console.log('Endereço inserido com sucesso!')
        resposta({ message: 'Endereço inserido com sucesso!' })
    }).catch(erro => {
        console.log('Erro ao inserir endereço!')
        resposta({ erro: 'Erro ao inserir endereço!' })
    });
})

inserirRota('/buscar_enderecos', function (dados, resposta) {

    database(`SELECT * FROM ENDERECO`)
    .then(result => {
        console.log('Usuário inserido com sucesso!')
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao inserir usuário!')
        resposta(result)
    });
})