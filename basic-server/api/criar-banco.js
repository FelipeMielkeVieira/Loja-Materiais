database(`CREATE TABLE IF NOT EXISTS USER (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(100),
    SENHA varchar(30)
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
    database(`INSERT INTO PRODUTOS VALUES 
    (NULL, 'Caderno Universitário capa dura 10x1 200fl Velozes e Furiosos 20523 Spiral Vel PT 1 UN', 'Acelere! Confira a nova linha Velozes e Furiosos! Com um material de qualidade, os cadernos possuem acabamento resistente, capa dura, cartela de adesivos e divisórias personalizadas.', 'Capa Dura ? Verniz localizado ? Adesivos personalizados ? Frontispício e divisória personalizada ? 200 folhas (10 matérias) ? Folhas pautadas ? Produto certificado FSC ? Formato: 200mm x 275mm ? Capa e contracapa: Papelão (750g/m²) e revestimento: Papel Couché (120gr/m²) e off-set (90g/m²) ? Miolo: Papel off-set (56g/m²) ? Divisórias 90g/m²', 'https://img.kalunga.com.br/fotosdeprodutos/136592d.jpg', 22.3, 0, 0, 'Cadernos Universitários'),
    (NULL, 'Caderno Universitário Capa Dura 10x1 200fl Minions 20489 Spiral Mim PT 1 UN', 'Os mais assustadores monstrinhos amarelos estão prontos para mais um ano de aventuras e momentos incríveis! Com um material de qualidade, o caderno Minions Monsters Spiral possui acabamento resistente, capa dura, uma linda cartela de adesivos e divisórias personalizadas.', 'Capa Dura ? Verniz localizado ? Adesivos personalizados ? Frontispício e divisórias personalizada ? Easy Pocket personalizado ? 200 folhas (10 matérias) ? Folhas pautadas ? Produto certificado FSC ? Formato: 200mm x 275mm ? Capa e contracapa: Papelão (750g/m²) ? Revestimento: Papel Couché (120g/m²) e Off-set (90g/m²) ? Miolo: Papel off-set (63g/m²)', 'https://img.kalunga.com.br/fotosdeprodutos/131421d.jpg', 26.8, 0, 0, 'Cadernos Universitários')
    `).then(result => {
        console.log('Adicionado aos produtos!')
    }).catch(erro => {
        console.log('Produtos com erro!')
    });

}).catch(erro => {
    console.log('Tabela Produtos com erro!')
});