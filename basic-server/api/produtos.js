inserirRota('/buscar_produto', function (dados, resposta) {

    if(dados.ordenar == 1) {
        database(`SELECT * FROM PRODUTOS`).then(result => {
            console.log(result)
            resposta(result)
        }).catch(erro => {
            console.log('Erro ao buscar produtos!')
        })
    }
    if(dados.ordenar == 2) {
        database(`SELECT * FROM PRODUTOS ORDER BY AVALIACOES DESC`).then(result => {
            console.log(result)
            resposta(result)
        }).catch(erro => {
            console.log('Erro ao buscar produtos!')
        })
    }
    if(dados.ordenar == 3) {
        database(`SELECT * FROM PRODUTOS ORDER BY VALOR DESC`).then(result => {
            console.log(result)
            resposta(result)
        }).catch(erro => {
            console.log('Erro ao buscar produtos!')
        })
    }
    if(dados.ordenar == 4) {
        database(`SELECT * FROM PRODUTOS ORDER BY VALOR`).then(result => {
            console.log(result)
            resposta(result)
        }).catch(erro => {
            console.log('Erro ao buscar produtos!')
        })
    }
    if(dados.ordenar == 5) {
        database(`SELECT * FROM PRODUTOS ORDER BY NOME`).then(result => {
            console.log(result)
            resposta(result)
        }).catch(erro => {
            console.log('Erro ao buscar produtos!')
        })
    }
    if(dados.ordenar == 6) {
        database(`SELECT * FROM PRODUTOS ORDER BY NOME DESC`).then(result => {
            console.log(result)
            resposta(result)
        }).catch(erro => {
            console.log('Erro ao buscar produtos!')
        })
    }
    if(dados.ordenar == 7) {
        database(`SELECT * FROM PRODUTOS LIMIT 3`).then(result => {
            console.log(result)
            resposta(result)
        }).catch(erro => {
            console.log('Erro ao buscar produtos!')
        })
    }

    return resposta;
});

inserirRota('/buscar_produto_especifico', function (dados, resposta) {

    database(`SELECT * FROM PRODUTOS WHERE CODIGO = ${dados.codigo}`).then(result => {
        console.log(result)
        resposta(result)
    }).catch(erro => {
        console.log('Erro ao buscar produtos!')
    })

    return resposta;
});

inserirRota('/adicionar_automatico', function (dados, resposta) {

    database(`INSERT INTO PRODUTOS VALUES 
        (NULL, 'Caderno Universit??rio capa dura 10x1 200fl Velozes e Furiosos 20523 Spiral Vel PT 1 UN', 'Acelere! Confira a nova linha Velozes e Furiosos! Com um material de qualidade, os cadernos possuem acabamento resistente, capa dura, cartela de adesivos e divis??rias personalizadas.', 'Capa Dura ? Verniz localizado ? Adesivos personalizados ? Frontisp??cio e divis??ria personalizada ? 200 folhas (10 mat??rias) ? Folhas pautadas ? Produto certificado FSC ? Formato: 200mm x 275mm ? Capa e contracapa: Papel??o (750g/m??) e revestimento: Papel Couch?? (120gr/m??) e off-set (90g/m??) ? Miolo: Papel off-set (56g/m??) ? Divis??rias 90g/m??', 'https://img.kalunga.com.br/fotosdeprodutos/136592d.jpg', 22.3, 0, 'Velozes e Furiosos', 1),
        (NULL, 'Caderno Universit??rio Capa Dura 10x1 200fl Minions 20489 Spiral Mim PT 1 UN', 'Os mais assustadores monstrinhos amarelos est??o prontos para mais um ano de aventuras e momentos incr??veis! Com um material de qualidade, o caderno Minions Monsters Spiral possui acabamento resistente, capa dura, uma linda cartela de adesivos e divis??rias personalizadas.', 'Capa Dura ? Verniz localizado ? Adesivos personalizados ? Frontisp??cio e divis??rias personalizada ? Easy Pocket personalizado ? 200 folhas (10 mat??rias) ? Folhas pautadas ? Produto certificado FSC ? Formato: 200mm x 275mm ? Capa e contracapa: Papel??o (750g/m??) ? Revestimento: Papel Couch?? (120g/m??) e Off-set (90g/m??) ? Miolo: Papel off-set (63g/m??)', 'https://img.kalunga.com.br/fotosdeprodutos/131421d.jpg', 26.8, 0, 'Ilumination', 1),
        (NULL, 'Caderno universit??rio capa dura 10x1 160 folhas, Brief Preto, Spiral, 211957 - PT 1 UN', 'O Caderno Espiral Capa Dura Universit??rio 10 Mat??rias Brief 160 Folhas, possui capa dura com a parte interna decorada, bolsa de papel para guardar trabalhos e anota????es e folhas pautadas padr??o.', 'Formato: 200mm x 275mm ? N??mero de folhas: 160 folhas ? N??mero de mat??rias: 10 mat??rias ? Capa e contracapa: Dura com papel??o 820g/m??, com verniz, Revestimento em papel couch?? 120g/m?? com parte interna da capa padr??o em papel offset 120g/m?? ? Bolsa personalizada em papel 110g/m?? ? Divis??ria em papel offset 90g/m?? ? Miolo pautado padr??o em papel offset 56g/m?? ? Produto certificado FSC ??', 'https://img.kalunga.com.br/fotosdeprodutos/136662d.jpg', 18.5, 0, 'Brief', 1),
        (NULL, 'Caderno universit??rio capa polipropileno 10x1 160 folhas, Lumi Preto, Spiral, 211796 - PT 1 UN', 'Conhe??a a nova linha de cadernos Lumi Spiral. Anime seu dia a dia com cores intensas e divertidas!', 'Formato: 200mm x 275mm ? N??mero de folhas: 160 folhas ? N??mero de mat??rias: 10 mat??rias ? Capa de polipropileno com serigrafia ? Contracapa dura com papel??o 820g/m?? com revestimento em papel couch?? 120g/m?? ? Parte interna da contracacapa padr??o em papel offset 120g/m?? ? Folha de rosto padr??o em papel Triplex 350g/m?? ? Bolsa padr??o em papel 110g/m?? ? Divis??ria em papel offset 90g/m?? ? Miolo pautado em papel offset 56g/m?? ? El??stico para prender a capa', 'https://img.kalunga.com.br/fotosdeprodutos/139241d.jpg', 28.9, 0, 'Lumi', 1),
        (NULL, 'Caderno universit??rio capa dura 10x1 160 folhas, Brief Azul, Spiral, 211955 - PT 1 UN', 'O Caderno Espiral Capa Dura Universit??rio 10 Mat??rias Brief 160 Folhas, possui capa dura com a parte interna decorada, bolsa de papel para guardar trabalhos e anota????es e folhas pautadas padr??o.', 'Formato: 200mm x 275mm ? N??mero de folhas: 160 folhas ? N??mero de mat??rias: 10 mat??rias ? Capa e contracapa: Dura com papel??o 820g/m??, com verniz, Revestimento em papel couch?? 120g/m?? com parte interna da capa padr??o em papel offset 120g/m?? ? Bolsa personalizada em papel 110g/m?? ? Divis??ria em papel offset 90g/m?? ? Miolo pautado padr??o em papel offset 56g/m?? ? Produto certificado FSC ??', 'https://img.kalunga.com.br/fotosdeprodutos/136601d.jpg', 18.5, 0, 'Brief', 1),
        (NULL, 'Caderno universit??rio capa dura 10x1 160 folhas, Brief Cinza, Spiral, 211956 - PT 1 UN', 'O Caderno Espiral Capa Dura Universit??rio 10 Mat??rias Brief 160 Folhas, possui capa dura com a parte interna decorada, bolsa de papel para guardar trabalhos e anota????es e folhas pautadas padr??o.', 'Formato: 200mm x 275mm ? N??mero de folhas: 160 folhas ? N??mero de mat??rias: 10 mat??rias ? Capa e contracapa: Dura com papel??o 820g/m??, com verniz, Revestimento em papel couch?? 120g/m?? com parte interna da capa padr??o em papel offset 120g/m?? ? Bolsa personalizada em papel 110g/m?? ? Divis??ria em papel offset 90g/m?? ? Miolo pautado padr??o em papel offset 56g/m?? ? Produto certificado FSC ??', 'https://img.kalunga.com.br/fotosdeprodutos/136661d.jpg', 18.5, 0, 'Brief', 1),
        (NULL, 'Caderno universit??rio capa polipropileno 10x1 160 folhas, Soothing Rosa, Spiral, 2228471 - PT 1 UN', '', 'Formato: 200mm x 275mm ? N??mero de folhas: 160 folhas ? N??mero de mat??rias: 10 mat??ria ? Capa de polipropileno com serigrafia ? Contracapa dura em papel??o 820g/m?? ? Revestimento em papel couch?? 120g/m?? ? Parte interna da contracapa padr??o em papel offset 120g/m?? ? Folha de rosto padr??o em papel Triplex 350g/m?? ? Bolsa padr??o em papel 110g/m?? ? Divis??ria em papel offset 90g/m?? ? Miolo pautado em papel offset 56g/m??', 'https://img.kalunga.com.br/fotosdeprodutos/139354d.jpg', 28.9, 0, 'Soothing', 1),
        (NULL, 'Caderno Espiral Capa Dura West Village, Tilibra, 80 folhas, Colegial (19x24 cm), Capa Sortida', '', 'Possui formato inovador e compacto, ideal para quem gosta de praticidade ? Vem com folha de adesivos fofos e divertidos ? Possui bolsa de papel decorada para guardar pequenos acess??rios ? Os ??ndices/separador de mat??rias s??o todos decorados ? Capa acabamento: Com detalhe metalizado ? N??mero de mat??rias: 1 mat??ria ? Capa Sortida: n??o ?? poss??vel escolher a capa do produto', 'https://m.media-amazon.com/images/I/61ypxWlKLoL._AC_SX679_.jpg', 29.85, 0, 'Tilibra', 1),
        (NULL, 'Caderno Espiral Capa Dura Colegial 10 Mat??rias 160 Folhas West Village Tilibra', '', 'Bolsa de papel decorada ? Capa com detalhe metalizado ? Capa dura ? Espiral colorido', 'https://www.papelariaartnova.com.br/img/products/caderno-espiral-colegial-capa-dura-10x1-160-fls-west-village-tilibra_2_2000.jpg', 38.9, 0, 'Tilibra', 1),
        (NULL, 'Caderno universit??rio capa dura 10x1 160 folhas, Zen Portal, Spiral, 2278872 - PT 1 UN', '', 'Formato: 200mm x 275mm ? N??mero de folhas: 160 folhas ? N??mero de mat??rias: 10 mat??rias ? Capa e contracapa: Dura com papel??o 820g/m??, com verniz e hotstamping ? Revestimento em papel couch?? 120g/m?? ? Parte interna da capa personalizada em papel offset 120g/m?? ? Adesivo personalizado em papel 190g/m?? ? Bolsa personalizada em papel 110g/m?? ? Divis??ria em papel offset 90g/m?? ? Miolo pautado personalizado em papel offset 56g/m?? ? Produto certificado: FSC??"', 'https://img.kalunga.com.br/fotosdeprodutos/139307d.jpg', 16.7, 0, 'Zen', 1),

        (NULL, 'L??pis Grafite Redondo EcoL??pis n.2 B Max Preto Faber-Castell BT 4 UN', 'Com o L??pis Preto FaberCastell a sua escrita ficar?? muito mais bonita e mais macia. Voc?? vai escrever com muito mais conforto!', 'EcoL??pis: produzido com madeira 100% reflorestada ? Madeira macia que garante excelente apontabilidade ? Ponta MAX Resistente: f??rmula com exclusivas micropart??culas ativas que garante a mais alta resist??ncia, maciez e apagabilidade ? T??cnica Sekural: exclusivo processo de colagem do grafite na madeira, proporcionando maior resist??ncia ?? quebra ? Gradua????o no 2 = B', 'https://img.kalunga.com.br/fotosdeprodutos/410702d.jpg', 5.8, 0, 'FaberCastell', 2),
        (NULL, 'L??pis preto n.2 redondo HT Happy-time CX 144 UN', 'Os L??pis HappyTime possuem pontas firmes que proporcionam mais maciez a sua escrita.', 'L??pis preto n??2 ? Formato: redondo', 'https://img.kalunga.com.br/fotosdeprodutos/419028d.jpg', 50.4, 0, 'Happy-time', 2),
        (NULL, 'L??pis Grafite Redondo EcoL??pis n.2 B Faber-Castell CX 12 UN', 'Com os produtos da Faber Castell voc?? da mais cor aos seus trabalhos e volta para a escola equipado com materiais de qualidade. Eles s??o resistentes, feitos com materiais ecol??gicos e ainda tem v??rios modelos de acordo com o seu estilo ou trabalho.', 'L??pis Preto, corpo azul, adequado para os mais diversos p??blicos ? Ponta Max resistente ? Produzido com madeira 100% reflorestada ? Gradua????o Nr. 2 = B: Ideal para escrita em geral ? Formato redondo', 'https://img.kalunga.com.br/fotosdeprodutos/410686d.jpg', 10, 0, 'FaberCastell', 2),
        (NULL, 'L??pis preto n.2 Minnie Face sortido 22341 Molin BT 1 UN', '', 'L??pis Preto com design personalizado no formato da cabe??a da Minnie ? Com borracha decorativa ? Escrita macia e suave ? Super resistente e f??cil de apontar ? L??pis produzido ?? base de resina ? Dispon??vel em cores sortidas na embalagem', 'https://img.kalunga.com.br/fotosdeprodutos/414353d.jpg', 18.1, 0, 'Molin', 2),
        (NULL, 'L??pis Grafite Redondo EcoL??pis n.2 Max Faber-Castell CX 12 UN', 'Com os L??pis Preto FaberCastell a sua escrita ficar?? muito mais bonita e mais macia. Voc?? vai escrever com muito mais conforto!', 'EcoL??pis Grafite 1205 Max n?? 2 Preto Redondo ? M??xima resist??ncia e maciez ? EcoL??pis Grafite de excelente qualidade para uso geral ? Produzido com madeira plantada ? Mina resistente e escrita macia ? Tra??o escuro com excelente apagabilidade', 'https://img.kalunga.com.br/fotosdeprodutos/410661.webp', 18.7, 0, 'FaberCastell', 2),
        (NULL, 'L??pis Grafite Redondo EcoL??pis n.2 B P??rola Faber-Castell BT 4 UN', 'Com os produtos da Faber Castell voc?? da mais cor aos seus trabalhos e volta para a escola equipado com materiais de qualidade. Eles s??o resistentes, feitos com materiais ecol??gicos e ainda tem v??rios modelos de acordo com o seu estilo ou trabalho.', 'Corpo com cores peroladas ? Gradua????o Nr. 2 = B: Ideal para escrita em geral ? Ponta Max Resistente ? Produzido com madeira 100% reflorestada ? Formato redondo', 'https://img.kalunga.com.br/fotosdeprodutos/410685.webp', 4.9, 0, 'FaberCastell', 2),
        (NULL, 'L??pis Preto BIC Evolution, Corpo Verde Redondo, Grafite HB2, Aponta F??cil, Seguro para Crian??as, 840644 - CX 72 UN', 'Os L??pis Pretos BIC Evolution s??o extremamente seguros para crian??as pois n??o lascam e al??m disso trazem conforto e maciez a sua escrita. Perfeito para a escrita di??ria, seja em casa, na escola, na faculdade ou no trabalho. Mais dur??vel com grafite ultra resistente que n??o quebra com facilidade.', 'Maior durabilidade: grafite ultra resistente, n??o quebra com facilidade. ? Seguro para crian??as: n??o lasca. ? Corpo redondo. ? Grafite HB#2. ? F??cil de apontar. ? F??cil de apagar.', 'https://img.kalunga.com.br/fotosdeprodutos/414394.webp', 54.3, 0, 'BIC', 2),
        (NULL, 'L??pis Preto BIC Evolution, Corpo Verde Redondo, Grafite HB2, Aponta F??cil, Seguro para Crian??as, 835316 - CX 12 UN', 'Os L??pis Pretos BIC Evolution s??o extremamente seguros para crian??as pois n??o lascam e al??m disso trazem conforto e maciez a sua escrita. Perfeito para a escrita di??ria, seja em casa, na escola, na faculdade ou no trabalho. Mais dur??vel com grafite ultra resistente que n??o quebra com facilidade.', 'Maior durabilidade: grafite ultra resistente, n??o quebra com facilidade. ? Seguro para crian??as: n??o lasca. ? Corpo redondo. ? Grafite HB#2. ? F??cil de apontar. ? F??cil de apagar.', 'https://img.kalunga.com.br/fotosdeprodutos/414404.webp', 10.2, 0, 'BIC', 2),
        (NULL, 'L??pis Grafite Redondo EcoL??pis Max n.2 B Com Borracha Faber-Castell CX 6 UN', 'O L??pis Preto FaberCastell com borracha te proporciona mais resist??ncia, praticidade e maciez.', 'Mais ergon??mico ? Madeira macia com excelente apontabilidade ? Gradua????o no 2 = B', 'https://img.kalunga.com.br/fotosdeprodutos/410662.webp', 10.2, 0, 'FaberCastell', 2),
        (NULL, 'L??pis preto n.2 c/borracha Hello Kitty sortido 21652 Molin BT 4 UN', '', 'L??pis n??2 preto ? Minas macias ? F??cil de apontar ? N??o t??xico ? Com borracha', 'https://img.kalunga.com.br/fotosdeprodutos/414322.webp', 8.5, 0, 'Molin', 2),
   
        (NULL, 'Apontador Croc Croc Sapo, com dep??sito, Cores Sortidas, 017710, Maped - CX 1 UN', '', 'Apontador croc croc sapo ? Com dep??sito ? Ele avisa quando a ponta esta pronta', 'https://img.kalunga.com.br/fotosdeprodutos/025197d.jpg', 10.7, 0, 'Maped', 3),
        (NULL, 'Apontador com Dep??sito Cores Sortidas Faber-Castell PT 1 UN BT 1 UN', '', 'L??mina de a??o temperado: garantia de mais facilidade ao apontar e maior durabilidade ? Com dep??sito: maior praticidade', 'https://img.kalunga.com.br/fotosdeprodutos/027463d.jpg', 5.2, 0, 'FaberCastell', 3),
        (NULL, 'Apontador com Dep??sito Triangular Cores Sortidas Faber-Castell UN 1 UN UN 1 UN', '', 'L??mina de a??o temperado ? Design triangular ergon??mico, com dep??sito ? Dispon??vel em 4 cores Pastel', 'https://img.kalunga.com.br/fotosdeprodutos/027464d.jpg', 4.2, 0, 'FaberCastell', 3),
        (NULL, 'Apontador com Dep??sito Minibox Cores Sortidas Faber-Castell UN 1 UN UN 1 UN', '', 'Lamina de a??o temperada: garantia de de mais facilidade ao apontar e mais durabilidade ? Acabamento com gliter: visual atual, moderno e colecionalvel ? Com dep??sito', 'https://img.kalunga.com.br/fotosdeprodutos/027455d.jpg', 6.1, 0, 'FaberCastell', 3),
        (NULL, 'Apontador c/deposito preto 8133 Oval BT 1 UN', 'O apontador OVAL tem l??mina de a??o mangan??s e ??tima apontabilidade. Possui dep??sito transparente com boa capacidade de armazenamento. Ideal para estudantes, desenhistas e uso em escrit??rios.', 'Apontador com dep??sito ? 1 unidade ? Cor: Preto', 'https://img.kalunga.com.br/fotosdeprodutos/030148d.jpg', 4.99, 0, 'Oval', 3),

        (NULL, 'Caneta Esferogr??fica BIC Cristal Intenso Fashion, 6 Cores, Ponta Grossa de 1.6mm, Bold, Escrita Intensa, 930187 - BT 1 UN', 'As canetas esferogr??ficas BIC Cristal Intenso tem ponta grossa 1,6mm e escrita intensa, que proporciona maciez e um deslizar ultra f??cil. Possui tampa ventilada que garante a seguran??a do produto.', 'Ponta grossa 1,6mm a um pre??o acess??vel ? Maciez da Gel + Praticidade da esferogr??fica. ? Tampa que acompanha a cor da tinta. ? Bola de Tungst??nio, esfera perfeita e muito resistente. ? Cores fashion.', 'https://img.kalunga.com.br/fotosdeprodutos/174885d.jpg', 16.9, 0, 'BIC', 4),
        (NULL, 'Caneta Esferogr??fica BIC Cristal Intenso, Azul e Preta, Ponta Grossa de 1.6mm, Bold, 884631 - BT 3 UN', 'As canetas esferogr??ficas BIC Cristal Intenso tem ponta grossa 1,6mm e escrita intensa, que proporciona maciez e um deslizar ultra f??cil. Possui tampa ventilada que garante a seguran??a do produto.', 'Ponta grossa 1,6mm a um pre??o acess??vel ? Maciez da Gel + Praticidade da esferogr??fica. ? Tampa que acompanha a cor da tinta. ? Bola de Tungst??nio, esfera perfeita e muito resistente. ? Cores fashion.', 'https://img.kalunga.com.br/fotosdeprodutos/167874d.jpg', 8.3, 0, 'BIC', 4),
        (NULL, 'Caneta esferogr??fica 1.6mm 10 cores Triplus 437XBSB10 Staedtler PT 1 UN', 'Caixa STAEDTLER com 10 triplus ball em cores sortidas, espessura de tra??o XB', 'Formato ergon??mico triangular para escrita f??cil e descontra??da ? Ideal para escrita do dia-a-dia ? Desempenho de escrita particularmente suave ? Airplane-safe: sistema autom??tico de equaliza????o de press??o, previne o vazamento enquanto a bordo de avi??es ? Dispon??vel em caixa STAEDTLER stand-up ? 10 cores Triplus', 'https://img.kalunga.com.br/fotosdeprodutos/675329d.jpg', 79.9, 0, 'Staedtler', 4),
        (NULL, 'Caneta Esferogr??fica BIC Cristal Fashion, 10 Cores Vivas, Ponta M??dia de 1.2 mm, Para Uma Escrita Divertida, 930813 - BT 10 UN', '', 'Caneta Esferogr??fica ponta m??dia 1.2mm. ? 10 cores vivas para uma escrita colorida e vibrante. ? Tampa ventilada. ? Tampa e corpo acompanham a cor da tinta. ? Qualidade BIC', 'https://img.kalunga.com.br/fotosdeprodutos/174915d.jpg', 17.4, 0, 'BIC', 4),
        (NULL, 'Caneta esferogr??fica 1.0mm transparente azul 1028 Molin CX 50 UN', '', 'Esferogr??fica com alto padr??o de qualidade e garantia, aprovada pelos consumidores mais exigentes ? Tinta n??o t??xica e pr??pria para documentos ? Fluxo de tinta suave e constante ? Esfera de Tungst??nio ? Escreve mais de 2.000 metros ? Apoio confort??vel para os dedos', 'https://img.kalunga.com.br/fotosdeprodutos/175110d.jpg', 36.2, 0, 'Molin', 4),

        (NULL, 'Borracha FC Max pequena Faber-Castell BT 2 UN', '', 'F??rmula livre de PVC com m??xima apagabilidade ? Capa protetora ergon??mica que mant??m a borracha sempre limpa e facilita o uso', 'https://img.kalunga.com.br/fotosdeprodutos/068654d.jpg', 7.2, 0, 'FaberCastell', 5),
        (NULL, 'Borracha com Cinta Max Pastel Pequena Cores Sortidas Faber-Castell PT 2 UN PT 2 UN', '', 'Borracha com formula????o de alta qualidade ? Livre de pvc ? Excelente desempenho ao apagar ? Capa protetora', 'https://img.kalunga.com.br/fotosdeprodutos/068636d.jpg', 7.2, 0, 'FaberCastell', 5),
        (NULL, 'Borracha branca oval B01010301035 Mercur S A BT 2 UN', '', 'Seu formato e composi????o permite apagar com alto grau de precis??o l??pis e lapiseira. ? Dispon??vel na cor branca', 'https://img.kalunga.com.br/fotosdeprodutos/070504d.jpg', 4.1, 0, 'Mercur', 5),
        (NULL, 'Borracha t??cnica Dust Free Grande Faber-Castell BT 1 UN', '', 'Excelentes ao apagar ? Lados chanfrados para apagar com precis??o ? F??cil limpeza e concentra o res??duo', 'https://img.kalunga.com.br/fotosdeprodutos/068649d.jpg', 6.5, 0, 'FaberCastell', 5),
        (NULL, 'Borracha T??cnica Hi-Polymer Soft, SM-ZES-08E6 - Pentel BT 1 UN', '', 'As borrachas t??cnicas Pentel proporcionam maior sensa????o de suavidade do que as convencionais ? F??rmula HI-POLYMER que faz com suas part??culas se unam ? Maior durabilidade, suavidade e conforto ? Produto ideal para o dia-a-dia ? Min??ma abras??o na superf??cie do papel ? N??o mancha o papel', 'https://img.kalunga.com.br/fotosdeprodutos/068561d.jpg', 7.4, 0, 'Pentel', 5),

        (NULL, 'Cola branca 1 kg Cascorez Extra 1406741 Henkel PT 1 UN', '', 'CASCOREZ EXTRA trata-se de um adesivo vin??lico disperso em ??gua, de cor branca, odor caracter??stico e m??dia viscosidade, que ap??s seco apresenta uma pel??cula transparente, plastificada, de alta resist??ncia ao descolamento. ? O adesivo CASCOREZ EXTRA vem pronto para uso, nao devendo ser dilu??do em ??gua no momento da aplica??ao.', 'https://img.kalunga.com.br/fotosdeprodutos/211778d.jpg', 38.5, 0, 'Cascorez', 6),
        (NULL, 'Cola em bast??o 20g Pritt 1905230 Henkel BT 1 UN', '', 'Cola papel, cartolina, fotos e similares; ? Permite uma colagem limpa sem desperd??cios; ? N??o enruga o papel devido ao sistema de bast??o; ? Tampa herm??tica que evita o ressecamento; ? N??o t??xico, seguro para crian??as.', 'https://img.kalunga.com.br/fotosdeprodutos/209741d.jpg', 11.2, 0, 'Pritt', 6),
        (NULl, 'Cola em bast??o 40g Pritt 1905655 Henkel BT 1 UN', '', 'Pritt Stick ?? a 1?? do mundo. ? Est?? presente em mais de 80 pa??ses; ? Cola papel, cartolina, fotos e similares; ? Permite uma colagem limpa sem desperd??cios; ? N??o enruga o papel devido ao sistema de bast??o; ? Tampa herm??tica que evita o ressecamento; ? 3 vers??es: 10g, 20g e 40g; ? N??o t??xico, seguro para crian??as. ? Tubo de cola bast??o', 'https://img.kalunga.com.br/fotosdeprodutos/209760.webp', 18.6, 0, 'Pritt', 6),
        (NULL, 'Cola em bast??o 36g 65760 Spiral Office BT 1 UN', '', 'At??xica ? Lav??vel  ? Incolor  ? Colagem r??pida  ? Produto recomend??vel para uso por crian??as maiores de 3 anos, por conter partes pequenas que podem ser engolidas ou aspiradas', 'https://img.kalunga.com.br/fotosdeprodutos/209620d.jpg', 10.4, 0, 'Office', 6),

        (NULL, 'Papel Sulfite A4 75g 210mmx297mm Chamex PT 500 FL', '', 'Gramatura: 75g/m?? ? Folhas/resma: 500 ? Certifica????o: Cerflor', 'https://img.kalunga.com.br/fotosdeprodutos/476102d.jpg', 26.9, 0, 'Chamex', 7),
        (NULL, 'Papel sulfite Office A4 75g 210mmx297mm Hp PT 500 FL', '', 'Gramatura 75 g/m?? ? 500 folhas', 'https://img.kalunga.com.br/fotosdeprodutos/475808d.jpg', 26.9, 0, 'Office', 7),
        (NULL, 'Papel Sulfite 75g Alcalino 210x297 A4 Chamex Branco - Caixa com 5 resmas - CX 2500 FL', 'Chamex oferece a melhor solu????o para suas impress??es, com garantia de qualidade Profissional. Superf??cie resistente, corte perfeito e absor????o equilibrada que permite o melhor deslizamento na impressora evitando desperd??cio de tinta.', 'Gramatura: 75g/m?? ? Folhas/resma: 500 em cada pacote ? Certifica????o: Cerflor', 'https://img.kalunga.com.br/fotosdeprodutos/476103d.jpg', 130.3, 0, 'Chamex', 7),
        (NULL, 'Papel sulfite A4 90g 210mmx297mm Chamex PT 500 FL', '', 'Gramatura: 90g/m?? ? Folhas/resma: 500 ? Certifica????o: Cerflor', 'https://img.kalunga.com.br/fotosdeprodutos/476116d.jpg', 32.8, 0, 'Chamex', 7),

        (NULL, 'Estojo Escolar Pl??stico Branco, Waleu - PT 1 UN', 'O estojo plus Waleu ?? fabricado em poliestireno, possui formato retangular e seu compartimento interno ?? amplo. Ideal para armazenar materiais escolares como: l??pis, borracha, apontadores e etc.', 'Estojo escolar ? Cor: branco', 'https://img.kalunga.com.br/fotosdeprodutos/265915d.jpg', 7.3, 0, 'Waleu', 8),
        (NULL, 'Estojo Escolar Poli??ster Azul, 6326, Spiral - PT 1 UN', 'O estojo Spiral foi desenvolvido com materiais de alta qualidade para proteger e organizar seus pertences. ?? ideal para o uso escolar, em cursos e no trabalho.', 'Estojo escolar ? Cor: Azul ? Material: poli??ster ? Fechamento em z??per', 'https://img.kalunga.com.br/fotosdeprodutos/266538d.jpg', 33.9, 0, 'Spiral', 8),
        (NULL, 'Estojo Escolar PVC Branco, A2314, Spiral - PT 1 UN', 'O estojo Spiral foi desenvolvido com materiais de alta qualidade para proteger e organizar seus pertences. ?? ideal para o uso escolar, em cursos e no trabalho.', 'Estojo escolar simples ? Material: PVC ? Fechamento em z??per', 'https://img.kalunga.com.br/fotosdeprodutos/264183d.jpg', 44.9, 0, 'Spiral', 8),

        (NULL, 'Mochila Washing Rosa, A18056, Baohua - PT 1 UN', 'A mochila Baohua, al??m de estilosa, foi desenvolvida com materiais de alta qualidade para proteger seus pertences, perfeita para o dia a dia!', 'Mochila poli??ster ? Dimens??es: 30cm x 43cm x 14cm (L x A x P) ? Design ergon??mico ? Tecido de alta resist??ncia ? Bolsos organizadores', 'https://img.kalunga.com.br/fotosdeprodutos/494690d.jpg', 187.9, 0, 'Baohua', 9),
        (NULL, 'Mochila Preta, 8729672, Republic Vix - PT 1 UN', 'Organize seu material escolar da melhor maneira poss??vel com as mochilas Republic Vix Amplo espa??o, totalmente confort??veis e seguras, ideais para o volta ??s aulas.', 'Mochila Escolar em Nylon na cor preta ? Com uma divis??ria com ziper ? Dois bolsos frontais com zipers ? Al??as nas laterais ajust??veis', 'https://img.kalunga.com.br/fotosdeprodutos/495142d.jpg', 106.2, 0, 'Republic Vix', 9),
        (NULl, 'Mochila Triangles , A7635, Baohua - PT 1 UN', 'A mochila Baohua, al??m de estilosa, foi desenvolvida com materiais de alta qualidade para proteger seus pertences, perfeita para o dia a dia!', 'Mochila poli??ster ? Dimens??es: 32cm x 47cm x 16cm (L x A x P) ? Design ergon??mico ? Tecido de alta resist??ncia ? Bolsos organizadores', 'https://img.kalunga.com.br/fotosdeprodutos/494693d.jpg', 210.9, 0, 'Baohua', 9);
        `).then(result => {
            console.log('Adicionado aos produtos!')
        }).catch(erro => {
            console.log('Produtos com erro!')
        });

    // CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    // NOME VARCHAR(100),
    // DESCRICAO VARCHAR(300),
    // ESPECIFICACOES VARCHAR(500),
    // IMAGEM_NOME VARCHAR(100),
    // VALOR DOUBLE,
    // ESTRELAS DOUBLE,
    // MARCA VARCHAR(50),
    // CATEGORIA INT,

    return resposta;
});