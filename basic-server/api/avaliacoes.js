inserirRota('/buscar_avaliacoes', function (dados, resposta) {

    database(`SELECT * FROM AVALIACAO WHERE USER_NOME = '${dados.nome}'`).then(result => {
        console.log(result)
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao buscar avaliações!')
    })

    return resposta;
})