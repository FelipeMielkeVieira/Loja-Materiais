inserirRota('/buscar_pagamentos', function (dados, resposta) {

    database(`SELECT * FROM PAGAMENTO`).then(result => {
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao buscar pagamentos!')
    })

    return resposta;
});

inserirRota('/adicionar_pagamento', function (dados, resposta) {
    console.log(dados)

    database(`INSERT INTO PAGAMENTO (METODO, NUMERO, VALIDADE, CHAVE_SEGURANCA, USER_CODIGO) VALUES ("${dados.metodo}", "${dados.numero}", "${dados.validade}", "${dados.chave_seguranca}", "${dados.user_codigo}")
        `)
        .then(result => {
            console.log('Usuário inserido com sucesso!')
            resposta({ message: 'Usuário inserido com sucesso!' })
        }).catch(erro => {
            console.log('Erro ao inserir usuário!')
            resposta({ erro: 'Erro ao inserir usuário!' })
        });
})