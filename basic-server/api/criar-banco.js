database(`CREATE TABLE IF NOT EXISTS USER (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(100),
    SENHA varchar(30),
    EMAIL varchar(100),
    TELEFONE varchar(20),
    CRIACAO DATE
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
    IMAGEM_NOME VARCHAR(500),
    VALOR DOUBLE,
    ESTRELAS DOUBLE,
    MARCA VARCHAR(50),
    CATEGORIA INT,
    FOREIGN KEY (CATEGORIA) REFERENCES CATEGORIA (CODIGO)
    ON DELETE CASCADE
    ON UPDATE CASCADE

)`).then(result => {

    console.log('Tabela Produtos Criada!')

}).catch(erro => {
    console.log('Tabela Produtos com erro!')
});

database(`CREATE TABLE IF NOT EXISTS PAGAMENTO (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    TITULAR VARCHAR(50),
    METODO VARCHAR(45),
    NUMERO INTEGER,
    VALIDADE DATE,
    CHAVE_SEGURANCA CHAR(3),
    USER_CODIGO INT,
    FOREIGN KEY (USER_CODIGO) REFERENCES USER (CODIGO)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)`).then(result => {

    console.log('Tabela Pagamento Criada!')

}).catch(erro => {
    console.log('Tabela Pagamento com erro!')
});

database(`CREATE TABLE IF NOT EXISTS VALE (
    CODIGO VARCHAR(20) PRIMARY KEY,
    USADO TINYINT,
    DESCONTO DOUBLE
)`).then(result => {
    console.log('Tabela Vale Criada!')
}).catch(erro => {
    console.log('Tabela Vale com erro!')
});

database(`CREATE TABLE IF NOT EXISTS AVALIACAO (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    AVALIACAO VARCHAR(500),
    USER_NOME VARCHAR(100),
    DATA DATE,
    NOTA INT,
    PRODUTO_CODIGO INT,
    FOREIGN KEY (PRODUTO_CODIGO) REFERENCES PRODUTO (CODIGO)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)`).then(result => {
    console.log('Tabela Avaliação Criada!')
}).catch(erro => {
    console.log('Tabela Avaliação com erro!')
});

database(`CREATE TABLE IF NOT EXISTS CATEGORIA (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME VARCHAR(50),
    DESCRICAO VARCHAR(200)
)`).then(result => {
    console.log('Tabela Categoria Criada!')
}).catch(erro => {
    console.log('Tabela Categoria com erro!')
});

database(`CREATE TABLE IF NOT EXISTS PAIS (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME VARCHAR(100),
    SIGLA VARCHAR(3)
)`).then(result => {
    console.log('Tabela País Criada!')
}).catch(erro => {
    console.log('Tabela País com erro!')
});

database(`CREATE TABLE IF NOT EXISTS ESTADO (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME VARCHAR(100),
    SIGLA CHAR(2),
    PAIS_CODIGO INT,
    FOREIGN KEY (PAIS_CODIGO) REFERENCES PAIS (CODIGO)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)`).then(result => {
    console.log('Tabela Estado Criada!')
}).catch(erro => {
    console.log('Tabela Estado com erro!')
});

database(`CREATE TABLE IF NOT EXISTS ENDERECO (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    CIDADE VARCHAR(50),
    BAIRRO VARCHAR(50),
    RUA VARCHAR(50),
    NUMERO INT,
    COMPLEMENTO VARCHAR(50),
    USER_CODIGO INT,
    ESTADO_CODIGO INT,
    FOREIGN KEY (USER_CODIGO) REFERENCES USER (CODIGO),
    FOREIGN KEY (ESTADO_CODIGO) REFERENCES ESTADO (CODIGO)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)`).then(result => {
    console.log('Tabela Endereço Criada!')
}).catch(erro => {
    console.log('Tabela Endereço com erro!')
});

database(`CREATE TABLE IF NOT EXISTS PEDIDO (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    DATA DATE,
    DATA_ENTREGA DATE,
    VALOR DOUBLE,
    EXCLUIDO TINYINT DEFAULT 0,
    USER_CODIGO INT,
    FOREIGN KEY (USER_CODIGO) REFERENCES USER (CODIGO)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)`)

database(`CREATE TABLE IF NOT EXISTS VENDA (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    CODIGO_PEDIDO INT,
    CODIGO_PRODUTO INT,
    QUANTIDADE INT,
    FOREIGN KEY (CODIGO_PEDIDO) REFERENCES PEDIDO (CODIGO),
    FOREIGN KEY (CODIGO_PRODUTO) REFERENCES PRODUTO (CODIGO)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)`)