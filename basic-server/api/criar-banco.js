database(`CREATE TABLE IF NOT EXISTS USER (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    NICKNAME varchar(30)
    )`)
    .then(result => {
    console.log('Tabela User Criada!')
}).catch(erro => {
    console.log('Tabela User com erro!')
});