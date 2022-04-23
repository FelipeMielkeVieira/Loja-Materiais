inserirRota('/buscar_todos_pedidos', function (dados, resposta) {

    database(`SELECT * FROM PEDIDO`).then(result => {
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao buscar usuário!')
    })

    return resposta;
});

inserirRota('/buscar_pedidos', function (dados, resposta) {

    database(`SELECT * FROM PEDIDO WHERE USER_CODIGO = ${dados.user}`).then(result => {
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao buscar usuário!')
    })

    return resposta;
});

inserirRota('/buscar_todas_vendas', function (dados, resposta) {

    database(`SELECT * FROM VENDA`).then(result => {
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao buscar usuário!')
    })

    return resposta;
});

inserirRota('/buscar_vendas', function (dados, resposta) {

    database(`SELECT * FROM VENDA WHERE CODIGO_PEDIDO = ${dados.pedido}`).then(result => {
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao buscar usuário!')
    })

    return resposta;
});

inserirRota('/adicionar_pedido', function (dados, resposta) {
    console.log(dados)

    database(`INSERT INTO PEDIDO VALUES (NULL, "${dados.data}", "${dados.data_entrega}", ${dados.valor}, ${dados.user})
        `)
        .then(result => {
            console.log('Pedido inserido com sucesso!')
            resposta({ message: 'Pedido inserido com sucesso!' })
        }).catch(erro => {
            console.log('Erro ao inserir pedido!')
            resposta({ erro: 'Erro ao inserir usuário!' })
        });
})

inserirRota('/excluir_pedido', function (dados, resposta) {
    console.log(dados)

    database(`DELETE FROM PEDIDO WHERE CODIGO = ${dados.codigo}
        `)
        .then(result => {
            console.log('Pedido inserido com sucesso!')
            resposta({ message: 'Pedido inserido com sucesso!' })
        }).catch(erro => {
            console.log('Erro ao inserir pedido!')
            resposta({ erro: 'Erro ao inserir usuário!' })
        });
})

inserirRota('/adicionar_venda', function (dados, resposta) {
    console.log(dados)

    database(`INSERT INTO VENDA VALUES (NULL, ${dados.pedido}, ${dados.produto}, ${dados.quantidade})
        `)
        .then(result => {
            console.log('Pedido inserido com sucesso!')
            resposta({ message: 'Pedido inserido com sucesso!' })
        }).catch(erro => {
            console.log('Erro ao inserir pedido!')
            resposta({ erro: 'Erro ao inserir usuário!' })
        });
})