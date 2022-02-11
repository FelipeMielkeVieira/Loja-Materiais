inserirRota('/buscar_produto', function (dados, resposta) {

    database(`SELECT * FROM PRODUTOS`).then(result => {
        console.log(result)
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao buscar produtos!')
    })

    return resposta;
});