inserirRota('/buscar_usuario', function (dados, resposta) {

    database(`SELECT * FROM USER`).then(result => {
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao buscar usuário!')
    })

    return resposta;
});

inserirRota('/login', function (dados, resposta) {

    console.log(dados);
    database(`SELECT * FROM USER WHERE NOME = "${dados.nome}" AND SENHA = "${dados.senha}" LIMIT 1`)
        .then(result => {

            console.log('result:', result);
            resposta({ user: result[0] });

        }).catch(erro => {
            resposta({ erro: "Erro ao buscar os usuários!" });
        });
});

inserirRota('/coletar_codigo', function (dados, resposta) {

    database(`SELECT CODIGO FROM USER WHERE NOME = "${dados.nome}"`)
        .then(result => {

            console.log('result:', result);
            resposta({ user: result[0] });

        }).catch(erro => {
            resposta({ erro: "Erro ao buscar os usuários!" });
        });
})

inserirRota('/criar_usuario', function (dados, resposta) {
    console.log(dados)

    database(`INSERT INTO USER (NOME, SENHA, EMAIL, TELEFONE, CRIACAO) VALUES ("${dados.nome}", "${dados.senha}", "${dados.email}", "${dados.telefone}", "${dados.data}")
        `)
        .then(result => {
            console.log('Usuário inserido com sucesso!')
            resposta({ message: 'Usuário inserido com sucesso!' })
        }).catch(erro => {
            console.log('Erro ao inserir usuário!')
            resposta({ erro: 'Erro ao inserir usuário!' })
        });
})

inserirRota('/usuario_especifico', function (dados, resposta) {

    database(`SELECT * FROM USER WHERE NOME = "${dados.nome}"`)
        .then(result => {
            console.log('Usuário inserido com sucesso!')
            resposta(result)
        }).catch(erro => {
            console.log('Erro ao inserir usuário!')
            resposta(result)
        });
})

inserirRota('/excluir_usuario', function (dados, resposta) {

    database(`DELETE FROM USER WHERE NOME = "${dados.nome}"`)
        .then(result => {
            console.log('Usuário excluído com sucesso!')
            resposta({ message: 'Usuário excluído com sucesso!' })
        }).catch(erro => {
            console.log('Erro ao excluir usuário!')
            resposta({ erro: 'Erro ao excluir usuário!' })
        });
})

inserirRota('/editar_usuario', function (dados, resposta) {

    database(`UPDATE USER SET "${dados.valorEditar}" = "${dados.novoValor}" WHERE NOME = "${dados.nome}"`)
        .then(result => {
            console.log('Usuário editado com sucesso!')
            resposta({ message: 'Usuário editado com sucesso!' })
        }).catch(erro => {
            console.log('Erro ao editar usuário!')
            resposta({ erro: 'Erro ao editar usuário!' })
        });
})