inserirRota('/buscar_categorias', function (dados, resposta) {

    database(`SELECT * FROM CATEGORIA`).then(result => {
        console.log(result)
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao buscar categorias!')
    })

    return resposta;
})

inserirRota('/adicionar_categorias', function (dados, resposta) {

    database(`INSERT INTO CATEGORIA VALUES
    (NULL, 'Cadernos', 'Caderno é um artigo escolar e domiciliar, geralmente vendido em papelarias e livrarias, cujo uso é didático ou de lembrete.'),
    (NULL, 'Lápis', 'Um lápis é um instrumento de escrever, pintar, desenhar e das mais variadas coisas, concebido para marcar, riscar.'),
    (NULL, 'Apontador', 'Um apontador de lápis ou apara-lápis, também conhecido no Brasil como apontadora, em Portugal também como afiadeira, afia-lápis ou apenas afia, aguça, aguçadeira, afiador ou, em algumas regiões do Brasil, lapiseira, é um objeto cuja função é criar ou manter uma ponta afiada e funcional para um lápis.'),
    (NULL, 'Caneta', 'A caneta é um instrumento utilizado para aplicar tinta sobre uma superfície, normalmente de papel, com o objetivo de formar desenhos ou palavras escritas.'),
    (NULL, 'Borracha', 'A borracha natural é o produto primário da coagulação do látex da seringueira. Hoje, a borracha sintética, cotômero natural em algumas aplicações e complementar em outras, é produzida a partir de derivados de petróleo.'),
    (NULL, 'Cola', 'Adesivo é qualquer substância aplicada na superfície, ou em ambas as superfícies, de dois objetos separados que os une e oferece resistência à sua separação. Dependendo do contexto, há vários termos usados com o mesmo significado, como cola ou cimento.'),
    (NULL, 'Papel', 'Substância de origem vegetal e consistência pastosa que, seca sob a forma de folha, pode ser usada de várias maneiras: lenço de papel; papel de parede.'),
    (NULL, 'Estojo', 'Chama-se estojo escolar ao estojo (como uma bolsinha ou uma caixa) usado por crianças e jovens para armazenar lápis, canetas, canetinhas, borracha e outros materiais escolares.'),
    (NULL, 'Mochila', 'Uma mochila é, em sua forma mais simples, um saco de lona ou tecido sintético resistente que é carregado nas costas de uma pessoa, e apoiada através de quatro alças que passam por cima dos ombros.'),
    (NULL, 'Lancheira', 'Lancheira ou merendeira é uma maleta de mão de tamanho reduzido para transportar refeições e bebidas. Seu uso é feito sobretudo por escolares e operários fabris e da construção civil.'),
    (NULL, 'Kit Escolar', 'O kit é gratuito e inclui materiais como mochila, estojo ecológico, lápis, borracha, régua, canetas, cadernos e esqueeze para a realização diária das atividades pedagógicas.')
    `).then(result => {
        console.log('Adicionado às categorias!')
    }).catch(erro => {
        console.log('Categorias com erro!')
    });
})