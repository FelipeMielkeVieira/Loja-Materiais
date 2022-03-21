inserirRota('/adicionar_paises', function (dados, resposta) {

    database(`INSERT INTO PAIS VALUES
    (NULL, "Brasil", "BR")`
    ).then(result => {
        console.log('Adicionado aos produtos!')
    }).catch(erro => {
        console.log('Produtos com erro!')
    });

return resposta;
})

inserirRota('/buscar_estados', function (dados, resposta) {

    database(`SELECT * FROM ESTADO WHERE ESTADO.PAIS_CODIGO = ${dados.codigo}`)
    .then(result => {
        console.log('Usuário inserido com sucesso!')
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao inserir usuário!')
        resposta(result)
    });
}) 

inserirRota('/adicionar_estados', function (dados, resposta) {

    database(`INSERT INTO ESTADO VALUES
    (NULL, "Santa Catarina", "SC", 1)`
    ).then(result => {
        console.log('Adicionado aos produtos!')
    }).catch(erro => {
        console.log('Produtos com erro!')
    });

return resposta;
})

inserirRota('/buscar_paises', function (dados, resposta) {

    database(`SELECT * FROM PAIS`)
    .then(result => {
        console.log('Usuário inserido com sucesso!')
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao inserir usuário!')
        resposta(result)
    });
}) 

inserirRota('/adicionar_endereco', function (dados, resposta) {

    database(`INSERT INTO ENDERECO VALUES 
    (NULL, '${dados.cidade}', '${dados.bairro}', '${dados.rua}', '${dados.numero}', '${dados.complemento}', '${dados.usuario}', '${dados.estado}')`)
    .then(result => {
        console.log('Endereço inserido com sucesso!')
        resposta({ message: 'Endereço inserido com sucesso!' })
    }).catch(erro => {
        console.log('Erro ao inserir endereço!')
        resposta({ erro: 'Erro ao inserir endereço!' })
    });
})

inserirRota('/buscar_enderecos', function (dados, resposta) {

    database(`SELECT * FROM ENDERECO WHERE ENDERECO.USER_CODIGO = ${dados.codigo}`)
    .then(result => {
        console.log('Usuário inserido com sucesso!')
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao inserir usuário!')
        resposta(result)
    });

    return resposta;
})