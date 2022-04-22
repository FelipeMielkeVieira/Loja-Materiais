inserirRota('/buscar_pagamentos', function(dados, resposta) {

    database(`SELECT * FROM PAGAMENTO WHERE USER_CODIGO = ${dados.codigo}`).then(result => {
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao buscar pagamentos!')
    })

    return resposta;
});

inserirRota('/adicionar_pagamento', function(dados, resposta) {

    database(`INSERT INTO PAGAMENTO (METODO, TITULAR, NUMERO, VALIDADE, CHAVE_SEGURANCA, USER_CODIGO) VALUES ("${dados.metodo}", "${dados.titular}", "${dados.numero}", "${dados.validade}", "${dados.chave_seguranca}", "${dados.user_codigo}")
        `)
        .then(result => {
            console.log('Usuário inserido com sucesso!')
            resposta({ message: 'Usuário inserido com sucesso!' })
        }).catch(erro => {
            console.log('Erro ao inserir usuário!')
            resposta({ erro: 'Erro ao inserir usuário!' })
        });
})

inserirRota('/excluir_pagamento', function(dados, resposta) {

    database(`DELETE FROM PAGAMENTO WHERE CODIGO = ${dados.codigo}
        `)
        .then(result => {
            console.log('Usuário inserido com sucesso!')
            resposta({ message: 'Usuário inserido com sucesso!' })
        }).catch(erro => {
            console.log('Erro ao inserir usuário!')
            resposta({ erro: 'Erro ao inserir usuário!' })
        });
})