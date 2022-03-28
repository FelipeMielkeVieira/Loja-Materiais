inserirRota('/adicionar_vales', function (dados, resposta) {

    database(`INSERT INTO VALE VALUES
    ("E45Y86F95", 0, 20),
    ("H69K63L63", 0, 10),
    ("N65C21X04", 0, 30)
    `).then(result => {
        console.log('Adicionado aos vales!')
    }).catch(erro => {
        console.log('Vales com erro!')
    });
})

inserirRota('/buscar_todos_vales', function (dados, resposta) {

    database(`SELECT * FROM VALE`).then(result => {
        console.log(result)
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao buscar vales!')
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

inserirRota('/resgatar_vale', function (dados, resposta) {

    console.log(dados)
    database(`UPDATE VALE SET USADO = 1 WHERE CODIGO = '${dados.codigo}'`).then(result => {
        console.log('Vale de código ' + dados.codigo + ' resgatado!')
    }).catch(erro => {
        console.log('Vales com erro!')
    });
})