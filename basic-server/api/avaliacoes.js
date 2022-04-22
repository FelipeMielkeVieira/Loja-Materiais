inserirRota('/buscar_avaliacoes', function (dados, resposta) {

    database(`SELECT * FROM AVALIACAO WHERE PRODUTO_CODIGO = ${dados.produto}`).then(result => {
        console.log(result)
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao buscar avaliações!')
    })

    return resposta;
})

inserirRota('/adicionar_avaliacao', function (dados, resposta) {

    database(`INSERT INTO AVALIACAO VALUES (NULL, '${dados.texto}', '${dados.user}', '${dados.data}', ${dados.nota}, ${dados.produto})`).then(result => {
        console.log("Avaliação Adicionada!")
        resposta({ message: "Avaliação Cadastrada!"})
    }).catch(erro => {
        console.log('Erro ao buscar avaliações!')
        resposta({ message: "Avaliação Com problemas!"})
    })
    return resposta;

})

inserirRota('/excluir_avaliacao', function (dados, resposta) {

    database(`DELETE FROM AVALIACAO WHERE CODIGO = ${dados.codigo}`)
        .then(result => {
            console.log('Endereço inserido com sucesso!')
            resposta({ message: 'Endereço inserido com sucesso!' })
        }).catch(erro => {
            console.log('Erro ao inserir endereço!')
            resposta({ erro: 'Erro ao inserir endereço!' })
        });
})