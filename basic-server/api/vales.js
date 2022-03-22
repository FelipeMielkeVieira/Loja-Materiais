inserirRota('/adicionar_vales', function (dados, resposta) {

    database(`INSERT INTO VALE VALUES
    ("E45Y86F95", 0, 20, NULL),
    ("H69K63L63", 0, 10, NULL),
    ("N65C21X04", 0, 30, NULL),
    `).then(result => {
        console.log('Adicionado aos produtos!')
    }).catch(erro => {
        console.log('Produtos com erro!')
    });
})

inserirRota('/buscar_todos_vales', function (dados, resposta) {

    database(`SELECT * FROM VALE`).then(result => {
        console.log(result)
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao buscar produtos!')
    })

    return resposta;
})

inserirRota('/buscar_vale', function (dados, resposta) {

    database(`SELECT * FROM VALE WHERE CODIGO = '${dados.codigo}'`).then(result => {
        console.log(result)
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao buscar produtos!')
    })

    return resposta;
})