database(`CREATE TABLE IF NOT EXISTS USER (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(100),
    SENHA varchar(30),
    EMAIL varchar(100),
    TELEFONE varchar(20),
    CRIACAO varchar(30)
    )`)
    .then(result => {
        console.log('Tabela User Criada!')
    }).catch(erro => {
        console.log('Tabela User com erro!')
    });

database(`CREATE TABLE IF NOT EXISTS PRODUTOS (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME VARCHAR(100),
    DESCRICAO VARCHAR(300),
    ESPECIFICACOES VARCHAR(500),
    URL VARCHAR(500),
    VALOR DOUBLE,
    AVALIACOES INTEGER,
    ESTRELAS DOUBLE,
    CATEGORIA VARCHAR(30)

)`).then(result => {

    console.log('Tabela Produtos Criada!')

}).catch(erro => {
    console.log('Tabela Produtos com erro!')
});