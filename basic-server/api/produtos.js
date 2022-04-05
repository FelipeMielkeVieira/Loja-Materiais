inserirRota('/buscar_produto', function (dados, resposta) {

    database(`SELECT * FROM PRODUTOS`).then(result => {
        console.log(result)
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao buscar produtos!')
    })

    return resposta;
});

inserirRota('/adicionar_automatico', function (dados, resposta) {

    database(`INSERT INTO PRODUTOS VALUES 
        (NULL, 'Caderno Universitário capa dura 10x1 200fl Velozes e Furiosos 20523 Spiral Vel PT 1 UN', 'Acelere! Confira a nova linha Velozes e Furiosos! Com um material de qualidade, os cadernos possuem acabamento resistente, capa dura, cartela de adesivos e divisórias personalizadas.', 'Capa Dura ? Verniz localizado ? Adesivos personalizados ? Frontispício e divisória personalizada ? 200 folhas (10 matérias) ? Folhas pautadas ? Produto certificado FSC ? Formato: 200mm x 275mm ? Capa e contracapa: Papelão (750g/m²) e revestimento: Papel Couché (120gr/m²) e off-set (90g/m²) ? Miolo: Papel off-set (56g/m²) ? Divisórias 90g/m²', 'https://img.kalunga.com.br/fotosdeprodutos/136592d.jpg', 22.3, 0, 0, 'Spiral', 1),
        (NULL, 'Caderno Universitário Capa Dura 10x1 200fl Minions 20489 Spiral Mim PT 1 UN', 'Os mais assustadores monstrinhos amarelos estão prontos para mais um ano de aventuras e momentos incríveis! Com um material de qualidade, o caderno Minions Monsters Spiral possui acabamento resistente, capa dura, uma linda cartela de adesivos e divisórias personalizadas.', 'Capa Dura ? Verniz localizado ? Adesivos personalizados ? Frontispício e divisórias personalizada ? Easy Pocket personalizado ? 200 folhas (10 matérias) ? Folhas pautadas ? Produto certificado FSC ? Formato: 200mm x 275mm ? Capa e contracapa: Papelão (750g/m²) ? Revestimento: Papel Couché (120g/m²) e Off-set (90g/m²) ? Miolo: Papel off-set (63g/m²)', 'https://img.kalunga.com.br/fotosdeprodutos/131421d.jpg', 26.8, 0, 0, 'Spiral', 1)
        `).then(result => {
            console.log('Adicionado aos produtos!')
        }).catch(erro => {
            console.log('Produtos com erro!')
        });

    return resposta;
});