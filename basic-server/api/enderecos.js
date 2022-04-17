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

    database(`SELECT * FROM ESTADO WHERE PAIS_CODIGO = ${dados.codigo}`)
        .then(result => {
            console.log('Usuário inserido com sucesso!')
            resposta(result)
        }).catch(erro => {
            console.log('Erro ao inserir usuário!')
            resposta(erro)
        });

    return resposta
})

inserirRota('/buscar_todos_estados', function (dados, resposta) {

    database(`SELECT * FROM ESTADO`)
        .then(result => {
            console.log('Usuário inserido com sucesso!')
            resposta(result)
        }).catch(erro => {
            console.log('Erro ao inserir usuário!')
            resposta(erro)
        });

    return resposta
})

inserirRota('/adicionar_estados', function (dados, resposta) {

    database(`INSERT INTO ESTADO VALUES
    (NULL, "Acre", "AC", 1),
    (NULL, "Alagoas", "AL", 1),
    (NULL, "Amapá", "AM", 1),
    (NULL, "Amazonas", "AM", 1),
    (NULL, "Bahia", "BA", 1),
    (NULL, "Ceará", "CE", 1),
    (NULL, "Espírito Santo", "ES", 1),
    (NULL, "Goiás", "GO", 1),
    (NULL, "Maranhão", "MA", 1),
    (NULL, "Mato Grosso", "MT", 1),
    (NULL, "Mato Grosso do Sul", "MS", 1),
    (NULL, "Minas Gerais", "MG", 1),
    (NULL, "Pará", "PA", 1),
    (NULL, "Paraíba", "PB", 1),
    (NULL, "Paraná", "PR", 1),
    (NULL, "Pernambuco", "PE", 1),
    (NULL, "Piauí", "PI", 1),
    (NULL, "Rio de Janeiro", "RJ", 1),
    (NULL, "Rio Grande do Norte", "RN", 1),
    (NULL, "Rio Grande do Sul", "RS", 1),
    (NULL, "Rondônia", "RO", 1),
    (NULL, "Roraima", "RR", 1),
    (NULL, "Santa Catarina", "SC", 1),
    (NULL, "São Paulo", "SP", 1),
    (NULL, "Sergipe", "SE", 1),
    (NULL, "Tocantins", "TO", 1)
    `).then(result => {
        console.log('Adicionado aos estados!')
        resposta(result)
    }).catch(erro => {
        console.log('Estados com erro!')
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

    return resposta;
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

inserirRota('/editar_endereco', function (dados, resposta) {

    database(`UPDATE ENDERECO SET CIDADE = '${dados.cidade}' WHERE CODIGO = ${dados.codigo}
    UPDATE TABLE ENDERECO SET BAIRRO = '${dados.bairro}' WHERE CODIGO = ${dados.codigo}
    UPDATE TABLE ENDERECO SET RUA = '${dados.rua}' WHERE CODIGO = ${dados.codigo}
    UPDATE TABLE ENDERECO SET NUMERO = ${dados.numero} WHERE CODIGO = ${dados.codigo}
    UPDATE TABLE ENDERECO SET COMPLEMENTO = '${dados.complemento}' WHERE CODIGO = ${dados.codigo}
    UPDATE TABLE ENDERECO SET ESTADO_CODIGO = ${dados.estado} WHERE CODIGO = ${dados.codigo}`)
        .then(result => {
            console.log('Endereço inserido com sucesso!')
            resposta({ message: 'Endereço inserido com sucesso!' })
        }).catch(erro => {
            console.log('Erro ao inserir endereço!')
            resposta({ erro: 'Erro ao inserir endereço!' })
        });
})

inserirRota('/buscar_enderecos', function (dados, resposta) {

    database(`SELECT * FROM ENDERECO WHERE USER_CODIGO = ${dados.codigo}`)
        .then(result => {
            console.log('Usuário inserido com sucesso!')
            resposta(result)
        }).catch(erro => {
            console.log('Erro ao inserir usuário!')
            resposta(result)
        });

    return resposta;
})

inserirRota('/buscar_endereco', function (dados, resposta) {

    database(`SELECT * FROM ENDERECO WHERE CODIGO = ${dados.codigo}`)
        .then(result => {
            console.log('Usuário inserido com sucesso!')
            resposta(result)
        }).catch(erro => {
            console.log('Erro ao inserir usuário!')
            resposta(result)
        });

    return resposta;
})

inserirRota('/buscar_enderecos_completo', function (dados, resposta) {

    database(`SELECT ENDERECO.CODIGO, ENDERECO.CIDADE, ENDERECO.BAIRRO, ENDERECO.RUA, ENDERECO.NUMERO, ENDERECO.COMPLEMENTO, ESTADO.NOME AS ESTADO, PAIS.NOME AS PAIS FROM ENDERECO 
    INNER JOIN ESTADO ON ENDERECO.ESTADO_CODIGO = ESTADO.CODIGO AND ENDERECO.USER_CODIGO = ${dados.codigo}
    INNER JOIN PAIS ON ESTADO.PAIS_CODIGO = PAIS.CODIGO`)
        .then(result => {
            console.log('Usuário inserido com sucesso!')
            resposta(result)
        }).catch(erro => {
            console.log('Erro ao inserir usuário!')
            resposta(result)
        });

    return resposta;
})

inserirRota('/buscar_estado', function (dados, resposta) {

    database(`SELECT ESTADO.NOME FROM ESTADO 
    INNER JOIN ENDERECO ON ESTADO.CODIGO = ENDERECO.ESTADO_CODIGO AND ENDERECO.CODIGO = ${dados.codigoEndereco}`)
        .then(result => {
            console.log('Usuário inserido com sucesso!')
            resposta(result)
        }).catch(erro => {
            console.log('Erro ao inserir usuário!')
            resposta(result)
        });

    return resposta;
})

inserirRota('/buscar_pais', function (dados, resposta) {

    database(`SELECT PAIS.NOME FROM PAIS 
    INNER JOIN ESTADO ON PAIS.CODIGO = ESTADO.PAIS_CODIGO
    INNER JOIN ENDERECO ON ESTADO.CODIGO = ENDERECO.ESTADO_CODIGO AND ENDERECO.CODIGO = ${dados.codigoEndereco}`)
        .then(result => {
            console.log('Usuário inserido com sucesso!')
            resposta(result)
        }).catch(erro => {
            console.log('Erro ao inserir usuário!')
            resposta(result)
        });

    return resposta;
})

inserirRota('/excluir_endereco', function (dados, resposta) {

    database(`DELETE FROM ENDERECO WHERE CODIGO = ${dados.codigo}`)
        .then(result => {
            console.log('Endereço inserido com sucesso!')
            resposta({ message: 'Endereço inserido com sucesso!' })
        }).catch(erro => {
            console.log('Erro ao inserir endereço!')
            resposta({ erro: 'Erro ao inserir endereço!' })
        });
})