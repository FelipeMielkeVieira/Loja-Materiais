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

inserirRota('/buscar_enderecos', function (dados, resposta) {

    database(`SELECT * FROM ENDERECO WHERE ENDERECO.USER_CODIGO = ${dados.codigo}`)
    .then(result => {
        console.log('Usuário inserido com sucesso!')
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao inserir usuário!')
        resposta(result)
    });

    return resposta;
})