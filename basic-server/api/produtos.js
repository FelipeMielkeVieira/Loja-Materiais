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
        (NULL, 'Caderno Universitário capa dura 10x1 200fl Velozes e Furiosos 20523 Spiral Vel PT 1 UN', 'Acelere! Confira a nova linha Velozes e Furiosos! Com um material de qualidade, os cadernos possuem acabamento resistente, capa dura, cartela de adesivos e divisórias personalizadas.', 'Capa Dura ? Verniz localizado ? Adesivos personalizados ? Frontispício e divisória personalizada ? 200 folhas (10 matérias) ? Folhas pautadas ? Produto certificado FSC ? Formato: 200mm x 275mm ? Capa e contracapa: Papelão (750g/m²) e revestimento: Papel Couché (120gr/m²) e off-set (90g/m²) ? Miolo: Papel off-set (56g/m²) ? Divisórias 90g/m²', 'https://img.kalunga.com.br/fotosdeprodutos/136592d.jpg', 22.3, 0, 'Velozes e Furiosos', 1),
        (NULL, 'Caderno Universitário Capa Dura 10x1 200fl Minions 20489 Spiral Mim PT 1 UN', 'Os mais assustadores monstrinhos amarelos estão prontos para mais um ano de aventuras e momentos incríveis! Com um material de qualidade, o caderno Minions Monsters Spiral possui acabamento resistente, capa dura, uma linda cartela de adesivos e divisórias personalizadas.', 'Capa Dura ? Verniz localizado ? Adesivos personalizados ? Frontispício e divisórias personalizada ? Easy Pocket personalizado ? 200 folhas (10 matérias) ? Folhas pautadas ? Produto certificado FSC ? Formato: 200mm x 275mm ? Capa e contracapa: Papelão (750g/m²) ? Revestimento: Papel Couché (120g/m²) e Off-set (90g/m²) ? Miolo: Papel off-set (63g/m²)', 'https://img.kalunga.com.br/fotosdeprodutos/131421d.jpg', 26.8, 0, 'Ilumination', 1),
        (NULL, 'Caderno universitário capa dura 10x1 160 folhas, Brief Preto, Spiral, 211957 - PT 1 UN', 'O Caderno Espiral Capa Dura Universitário 10 Matérias Brief 160 Folhas, possui capa dura com a parte interna decorada, bolsa de papel para guardar trabalhos e anotações e folhas pautadas padrão.', 'Formato: 200mm x 275mm ? Número de folhas: 160 folhas ? Número de matérias: 10 matérias ? Capa e contracapa: Dura com papelão 820g/m², com verniz, Revestimento em papel couché 120g/m² com parte interna da capa padrão em papel offset 120g/m² ? Bolsa personalizada em papel 110g/m² ? Divisória em papel offset 90g/m² ? Miolo pautado padrão em papel offset 56g/m² ? Produto certificado FSC ®', 'https://img.kalunga.com.br/fotosdeprodutos/136662d.jpg', 18.5, 0, 'Brief', 1),
        (NULL, 'Caderno universitário capa polipropileno 10x1 160 folhas, Lumi Preto, Spiral, 211796 - PT 1 UN', 'Conheça a nova linha de cadernos Lumi Spiral. Anime seu dia a dia com cores intensas e divertidas!', 'Formato: 200mm x 275mm ? Número de folhas: 160 folhas ? Número de matérias: 10 matérias ? Capa de polipropileno com serigrafia ? Contracapa dura com papelão 820g/m² com revestimento em papel couché 120g/m² ? Parte interna da contracacapa padrão em papel offset 120g/m² ? Folha de rosto padrão em papel Triplex 350g/m² ? Bolsa padrão em papel 110g/m² ? Divisória em papel offset 90g/m² ? Miolo pautado em papel offset 56g/m² ? Elástico para prender a capa', 'https://img.kalunga.com.br/fotosdeprodutos/139241d.jpg', 28.9, 0, 'Lumi', 1),
        (NULL, 'Caderno universitário capa dura 10x1 160 folhas, Brief Azul, Spiral, 211955 - PT 1 UN', 'O Caderno Espiral Capa Dura Universitário 10 Matérias Brief 160 Folhas, possui capa dura com a parte interna decorada, bolsa de papel para guardar trabalhos e anotações e folhas pautadas padrão.', 'Formato: 200mm x 275mm ? Número de folhas: 160 folhas ? Número de matérias: 10 matérias ? Capa e contracapa: Dura com papelão 820g/m², com verniz, Revestimento em papel couché 120g/m² com parte interna da capa padrão em papel offset 120g/m² ? Bolsa personalizada em papel 110g/m² ? Divisória em papel offset 90g/m² ? Miolo pautado padrão em papel offset 56g/m² ? Produto certificado FSC ®', 'https://img.kalunga.com.br/fotosdeprodutos/136601d.jpg', 18.5, 0, 'Brief', 1),
        (NULL, 'Caderno universitário capa dura 10x1 160 folhas, Brief Cinza, Spiral, 211956 - PT 1 UN', 'O Caderno Espiral Capa Dura Universitário 10 Matérias Brief 160 Folhas, possui capa dura com a parte interna decorada, bolsa de papel para guardar trabalhos e anotações e folhas pautadas padrão.', 'Formato: 200mm x 275mm ? Número de folhas: 160 folhas ? Número de matérias: 10 matérias ? Capa e contracapa: Dura com papelão 820g/m², com verniz, Revestimento em papel couché 120g/m² com parte interna da capa padrão em papel offset 120g/m² ? Bolsa personalizada em papel 110g/m² ? Divisória em papel offset 90g/m² ? Miolo pautado padrão em papel offset 56g/m² ? Produto certificado FSC ®', 'https://img.kalunga.com.br/fotosdeprodutos/136661d.jpg', 18.5, 0, 'Brief', 1),
        (NULL, 'Caderno universitário capa polipropileno 10x1 160 folhas, Soothing Rosa, Spiral, 2228471 - PT 1 UN', '', 'Formato: 200mm x 275mm ? Número de folhas: 160 folhas ? Número de matérias: 10 matéria ? Capa de polipropileno com serigrafia ? Contracapa dura em papelão 820g/m² ? Revestimento em papel couché 120g/m² ? Parte interna da contracapa padrão em papel offset 120g/m² ? Folha de rosto padrão em papel Triplex 350g/m² ? Bolsa padrão em papel 110g/m² ? Divisória em papel offset 90g/m² ? Miolo pautado em papel offset 56g/m²', 'https://img.kalunga.com.br/fotosdeprodutos/139354d.jpg', 28.9, 0, 'Soothing', 1),
        (NULL, 'Caderno Espiral Capa Dura West Village, Tilibra, 80 folhas, Colegial (19x24 cm), Capa Sortida', '', 'Possui formato inovador e compacto, ideal para quem gosta de praticidade ? Vem com folha de adesivos fofos e divertidos ? Possui bolsa de papel decorada para guardar pequenos acessórios ? Os Índices/separador de matérias são todos decorados ? Capa acabamento: Com detalhe metalizado ? Número de matérias: 1 matéria ? Capa Sortida: não é possível escolher a capa do produto', 'https://m.media-amazon.com/images/I/61ypxWlKLoL._AC_SX679_.jpg', 29.85, 0, 'Tilibra', 1),
        (NULL, 'Caderno Espiral Capa Dura Colegial 10 Matérias 160 Folhas West Village Tilibra', '', 'Bolsa de papel decorada ? Capa com detalhe metalizado ? Capa dura ? Espiral colorido', 'https://www.papelariaartnova.com.br/img/products/caderno-espiral-colegial-capa-dura-10x1-160-fls-west-village-tilibra_2_2000.jpg', 38.9, 0, 'Tilibra', 1),
        (NULL, 'Caderno universitário capa dura 10x1 160 folhas, Zen Portal, Spiral, 2278872 - PT 1 UN', '', 'Formato: 200mm x 275mm ? Número de folhas: 160 folhas ? Número de matérias: 10 matérias ? Capa e contracapa: Dura com papelão 820g/m², com verniz e hotstamping ? Revestimento em papel couché 120g/m² ? Parte interna da capa personalizada em papel offset 120g/m² ? Adesivo personalizado em papel 190g/m² ? Bolsa personalizada em papel 110g/m² ? Divisória em papel offset 90g/m² ? Miolo pautado personalizado em papel offset 56g/m² ? Produto certificado: FSC©"', 'https://img.kalunga.com.br/fotosdeprodutos/139307d.jpg', 16.7, 0, 'Zen', 1),

        (NULL, 'Lápis Grafite Redondo EcoLápis n.2 B Max Preto Faber-Castell BT 4 UN', 'Com o Lápis Preto FaberCastell a sua escrita ficará muito mais bonita e mais macia. Você vai escrever com muito mais conforto!', 'EcoLápis: produzido com madeira 100% reflorestada ? Madeira macia que garante excelente apontabilidade ? Ponta MAX Resistente: fórmula com exclusivas micropartículas ativas que garante a mais alta resistência, maciez e apagabilidade ? Técnica Sekural: exclusivo processo de colagem do grafite na madeira, proporcionando maior resistência à quebra ? Graduação no 2 = B', 'https://img.kalunga.com.br/fotosdeprodutos/410702d.jpg', 5.8, 0, 'FaberCastell', 2),
        (NULL, 'Lápis preto n.2 redondo HT Happy-time CX 144 UN', 'Os Lápis HappyTime possuem pontas firmes que proporcionam mais maciez a sua escrita.', 'Lápis preto nº2 ? Formato: redondo', 'https://img.kalunga.com.br/fotosdeprodutos/419028d.jpg', 50.4, 0, 'Happy-time', 2),
        (NULL, 'Lápis Grafite Redondo EcoLápis n.2 B Faber-Castell CX 12 UN', 'Com os produtos da Faber Castell você da mais cor aos seus trabalhos e volta para a escola equipado com materiais de qualidade. Eles são resistentes, feitos com materiais ecológicos e ainda tem vários modelos de acordo com o seu estilo ou trabalho.', 'Lápis Preto, corpo azul, adequado para os mais diversos públicos ? Ponta Max resistente ? Produzido com madeira 100% reflorestada ? Graduação Nr. 2 = B: Ideal para escrita em geral ? Formato redondo', 'https://img.kalunga.com.br/fotosdeprodutos/410686d.jpg', 10, 0, 'FaberCastell', 2),
        (NULL, 'Lápis preto n.2 Minnie Face sortido 22341 Molin BT 1 UN', '', 'Lápis Preto com design personalizado no formato da cabeça da Minnie ? Com borracha decorativa ? Escrita macia e suave ? Super resistente e fácil de apontar ? Lápis produzido à base de resina ? Disponível em cores sortidas na embalagem', 'https://img.kalunga.com.br/fotosdeprodutos/414353d.jpg', 18.1, 0, 'Molin', 2),
        (NULL, 'Lápis Grafite Redondo EcoLápis n.2 Max Faber-Castell CX 12 UN', 'Com os Lápis Preto FaberCastell a sua escrita ficará muito mais bonita e mais macia. Você vai escrever com muito mais conforto!', 'EcoLápis Grafite 1205 Max nº 2 Preto Redondo ? Máxima resistência e maciez ? EcoLápis Grafite de excelente qualidade para uso geral ? Produzido com madeira plantada ? Mina resistente e escrita macia ? Traço escuro com excelente apagabilidade', 'https://img.kalunga.com.br/fotosdeprodutos/410661.webp', 18.7, 0, 'FaberCastell', 2),
        (NULL, 'Lápis Grafite Redondo EcoLápis n.2 B Pérola Faber-Castell BT 4 UN', 'Com os produtos da Faber Castell você da mais cor aos seus trabalhos e volta para a escola equipado com materiais de qualidade. Eles são resistentes, feitos com materiais ecológicos e ainda tem vários modelos de acordo com o seu estilo ou trabalho.', 'Corpo com cores peroladas ? Graduação Nr. 2 = B: Ideal para escrita em geral ? Ponta Max Resistente ? Produzido com madeira 100% reflorestada ? Formato redondo', 'https://img.kalunga.com.br/fotosdeprodutos/410685.webp', 4.9, 0, 'FaberCastell', 2),
        (NULL, 'Lápis Preto BIC Evolution, Corpo Verde Redondo, Grafite HB2, Aponta Fácil, Seguro para Crianças, 840644 - CX 72 UN', 'Os Lápis Pretos BIC Evolution são extremamente seguros para crianças pois não lascam e além disso trazem conforto e maciez a sua escrita. Perfeito para a escrita diária, seja em casa, na escola, na faculdade ou no trabalho. Mais durável com grafite ultra resistente que não quebra com facilidade.', 'Maior durabilidade: grafite ultra resistente, não quebra com facilidade. ? Seguro para crianças: não lasca. ? Corpo redondo. ? Grafite HB#2. ? Fácil de apontar. ? Fácil de apagar.', 'https://img.kalunga.com.br/fotosdeprodutos/414394.webp', 54.3, 0, 'BIC', 2),
        (NULL, 'Lápis Preto BIC Evolution, Corpo Verde Redondo, Grafite HB2, Aponta Fácil, Seguro para Crianças, 835316 - CX 12 UN', 'Os Lápis Pretos BIC Evolution são extremamente seguros para crianças pois não lascam e além disso trazem conforto e maciez a sua escrita. Perfeito para a escrita diária, seja em casa, na escola, na faculdade ou no trabalho. Mais durável com grafite ultra resistente que não quebra com facilidade.', 'Maior durabilidade: grafite ultra resistente, não quebra com facilidade. ? Seguro para crianças: não lasca. ? Corpo redondo. ? Grafite HB#2. ? Fácil de apontar. ? Fácil de apagar.', 'https://img.kalunga.com.br/fotosdeprodutos/414404.webp', 10.2, 0, 'BIC', 2),
        (NULL, 'Lápis Grafite Redondo EcoLápis Max n.2 B Com Borracha Faber-Castell CX 6 UN', 'O Lápis Preto FaberCastell com borracha te proporciona mais resistência, praticidade e maciez.', 'Mais ergonômico ? Madeira macia com excelente apontabilidade ? Graduação no 2 = B', 'https://img.kalunga.com.br/fotosdeprodutos/410662.webp', 10.2, 0, 'FaberCastell', 2),
        (NULL, 'Lápis preto n.2 c/borracha Hello Kitty sortido 21652 Molin BT 4 UN', '', 'Lápis nº2 preto ? Minas macias ? Fácil de apontar ? Não tóxico ? Com borracha', 'https://img.kalunga.com.br/fotosdeprodutos/414322.webp', 8.5, 0, 'Molin', 2),
   
        (NULL, 'Apontador Croc Croc Sapo, com depósito, Cores Sortidas, 017710, Maped - CX 1 UN', '', 'Apontador croc croc sapo ? Com depósito ? Ele avisa quando a ponta esta pronta', 'https://img.kalunga.com.br/fotosdeprodutos/025197d.jpg', 10.7, 0, 'Maped', 3),
        (NULL, 'Apontador com Depósito Cores Sortidas Faber-Castell PT 1 UN BT 1 UN', '', 'Lâmina de aço temperado: garantia de mais facilidade ao apontar e maior durabilidade ? Com depósito: maior praticidade', 'https://img.kalunga.com.br/fotosdeprodutos/027463d.jpg', 5.2, 0, 'FaberCastell', 3),
        (NULL, 'Apontador com Depósito Triangular Cores Sortidas Faber-Castell UN 1 UN UN 1 UN', '', 'Lâmina de aço temperado ? Design triangular ergonômico, com depósito ? Disponível em 4 cores Pastel', 'https://img.kalunga.com.br/fotosdeprodutos/027464d.jpg', 4.2, 0, 'FaberCastell', 3),
        (NULL, 'Apontador com Depósito Minibox Cores Sortidas Faber-Castell UN 1 UN UN 1 UN', '', 'Lamina de aço temperada: garantia de de mais facilidade ao apontar e mais durabilidade ? Acabamento com gliter: visual atual, moderno e colecionalvel ? Com depósito', 'https://img.kalunga.com.br/fotosdeprodutos/027455d.jpg', 6.1, 0, 'FaberCastell', 3),
        (NULL, 'Apontador c/deposito preto 8133 Oval BT 1 UN', 'O apontador OVAL tem lâmina de aço manganês e ótima apontabilidade. Possui depósito transparente com boa capacidade de armazenamento. Ideal para estudantes, desenhistas e uso em escritórios.', 'Apontador com depósito ? 1 unidade ? Cor: Preto', 'https://img.kalunga.com.br/fotosdeprodutos/030148d.jpg', 4.99, 0, 'Oval', 3),

        (NULL, 'Caneta Esferográfica BIC Cristal Intenso Fashion, 6 Cores, Ponta Grossa de 1.6mm, Bold, Escrita Intensa, 930187 - BT 1 UN', 'As canetas esferográficas BIC Cristal Intenso tem ponta grossa 1,6mm e escrita intensa, que proporciona maciez e um deslizar ultra fácil. Possui tampa ventilada que garante a segurança do produto.', 'Ponta grossa 1,6mm a um preço acessível ? Maciez da Gel + Praticidade da esferográfica. ? Tampa que acompanha a cor da tinta. ? Bola de Tungstênio, esfera perfeita e muito resistente. ? Cores fashion.', 'https://img.kalunga.com.br/fotosdeprodutos/174885d.jpg', 16.9, 0, 'BIC', 4),
        (NULL, 'Caneta Esferográfica BIC Cristal Intenso, Azul e Preta, Ponta Grossa de 1.6mm, Bold, 884631 - BT 3 UN', 'As canetas esferográficas BIC Cristal Intenso tem ponta grossa 1,6mm e escrita intensa, que proporciona maciez e um deslizar ultra fácil. Possui tampa ventilada que garante a segurança do produto.', 'Ponta grossa 1,6mm a um preço acessível ? Maciez da Gel + Praticidade da esferográfica. ? Tampa que acompanha a cor da tinta. ? Bola de Tungstênio, esfera perfeita e muito resistente. ? Cores fashion.', 'https://img.kalunga.com.br/fotosdeprodutos/167874d.jpg', 8.3, 0, 'BIC', 4),
        (NULL, 'Caneta esferográfica 1.6mm 10 cores Triplus 437XBSB10 Staedtler PT 1 UN', 'Caixa STAEDTLER com 10 triplus ball em cores sortidas, espessura de traço XB', 'Formato ergonômico triangular para escrita fácil e descontraída ? Ideal para escrita do dia-a-dia ? Desempenho de escrita particularmente suave ? Airplane-safe: sistema automático de equalização de pressão, previne o vazamento enquanto a bordo de aviões ? Disponível em caixa STAEDTLER stand-up ? 10 cores Triplus', 'https://img.kalunga.com.br/fotosdeprodutos/675329d.jpg', 79.9, 0, 'Staedtler', 4),
        (NULL, 'Caneta Esferográfica BIC Cristal Fashion, 10 Cores Vivas, Ponta Média de 1.2 mm, Para Uma Escrita Divertida, 930813 - BT 10 UN', '', 'Caneta Esferográfica ponta média 1.2mm. ? 10 cores vivas para uma escrita colorida e vibrante. ? Tampa ventilada. ? Tampa e corpo acompanham a cor da tinta. ? Qualidade BIC', 'https://img.kalunga.com.br/fotosdeprodutos/174915d.jpg', 17.4, 0, 'BIC', 4),
        (NULL, 'Caneta esferográfica 1.0mm transparente azul 1028 Molin CX 50 UN', '', 'Esferográfica com alto padrão de qualidade e garantia, aprovada pelos consumidores mais exigentes ? Tinta não tóxica e própria para documentos ? Fluxo de tinta suave e constante ? Esfera de Tungstênio ? Escreve mais de 2.000 metros ? Apoio confortável para os dedos', 'https://img.kalunga.com.br/fotosdeprodutos/175110d.jpg', 36.2, 0, 'Molin', 4),

        (NULL, 'Borracha FC Max pequena Faber-Castell BT 2 UN', '', 'Fórmula livre de PVC com máxima apagabilidade ? Capa protetora ergonômica que mantém a borracha sempre limpa e facilita o uso', 'https://img.kalunga.com.br/fotosdeprodutos/068654d.jpg', 7.2, 0, 'FaberCastell', 5),
        (NULL, 'Borracha com Cinta Max Pastel Pequena Cores Sortidas Faber-Castell PT 2 UN PT 2 UN', '', 'Borracha com formulação de alta qualidade ? Livre de pvc ? Excelente desempenho ao apagar ? Capa protetora', 'https://img.kalunga.com.br/fotosdeprodutos/068636d.jpg', 7.2, 0, 'FaberCastell', 5),
        (NULL, 'Borracha branca oval B01010301035 Mercur S A BT 2 UN', '', 'Seu formato e composição permite apagar com alto grau de precisão lápis e lapiseira. ? Disponível na cor branca', 'https://img.kalunga.com.br/fotosdeprodutos/070504d.jpg', 4.1, 0, 'Mercur', 5),
        (NULL, 'Borracha técnica Dust Free Grande Faber-Castell BT 1 UN', '', 'Excelentes ao apagar ? Lados chanfrados para apagar com precisão ? Fácil limpeza e concentra o resíduo', 'https://img.kalunga.com.br/fotosdeprodutos/068649d.jpg', 6.5, 0, 'FaberCastell', 5),
        (NULL, 'Borracha Técnica Hi-Polymer Soft, SM-ZES-08E6 - Pentel BT 1 UN', '', 'As borrachas técnicas Pentel proporcionam maior sensação de suavidade do que as convencionais ? Fórmula HI-POLYMER que faz com suas partículas se unam ? Maior durabilidade, suavidade e conforto ? Produto ideal para o dia-a-dia ? Miníma abrasão na superfície do papel ? Não mancha o papel', 'https://img.kalunga.com.br/fotosdeprodutos/068561d.jpg', 7.4, 0, 'Pentel', 5),

        (NULL, 'Cola branca 1 kg Cascorez Extra 1406741 Henkel PT 1 UN', '', 'CASCOREZ EXTRA trata-se de um adesivo vinílico disperso em água, de cor branca, odor característico e média viscosidade, que após seco apresenta uma película transparente, plastificada, de alta resistência ao descolamento. ? O adesivo CASCOREZ EXTRA vem pronto para uso, nao devendo ser diluído em água no momento da aplicaçao.', 'https://img.kalunga.com.br/fotosdeprodutos/211778d.jpg', 38.5, 0, 'Cascorez', 6),
        (NULL, 'Cola em bastão 20g Pritt 1905230 Henkel BT 1 UN', '', 'Cola papel, cartolina, fotos e similares; ? Permite uma colagem limpa sem desperdícios; ? Não enruga o papel devido ao sistema de bastão; ? Tampa hermética que evita o ressecamento; ? Não tóxico, seguro para crianças.', 'https://img.kalunga.com.br/fotosdeprodutos/209741d.jpg', 11.2, 0, 'Pritt', 6),
        (NULl, 'Cola em bastão 40g Pritt 1905655 Henkel BT 1 UN', '', 'Pritt Stick é a 1º do mundo. ? Está presente em mais de 80 países; ? Cola papel, cartolina, fotos e similares; ? Permite uma colagem limpa sem desperdícios; ? Não enruga o papel devido ao sistema de bastão; ? Tampa hermética que evita o ressecamento; ? 3 versões: 10g, 20g e 40g; ? Não tóxico, seguro para crianças. ? Tubo de cola bastão', 'https://img.kalunga.com.br/fotosdeprodutos/209760.webp', 18.6, 0, 'Pritt', 6),
        (NULL, 'Cola em bastão 36g 65760 Spiral Office BT 1 UN', '', 'Atóxica ? Lavável  ? Incolor  ? Colagem rápida  ? Produto recomendável para uso por crianças maiores de 3 anos, por conter partes pequenas que podem ser engolidas ou aspiradas', 'https://img.kalunga.com.br/fotosdeprodutos/209620d.jpg', 10.4, 0, 'Office', 6),

        (NULL, 'Papel Sulfite A4 75g 210mmx297mm Chamex PT 500 FL', '', 'Gramatura: 75g/m² ? Folhas/resma: 500 ? Certificação: Cerflor', 'https://img.kalunga.com.br/fotosdeprodutos/476102d.jpg', 26.9, 0, 'Chamex', 7),
        (NULL, 'Papel sulfite Office A4 75g 210mmx297mm Hp PT 500 FL', '', 'Gramatura 75 g/m² ? 500 folhas', 'https://img.kalunga.com.br/fotosdeprodutos/475808d.jpg', 26.9, 0, 'Office', 7),
        (NULL, 'Papel Sulfite 75g Alcalino 210x297 A4 Chamex Branco - Caixa com 5 resmas - CX 2500 FL', 'Chamex oferece a melhor solução para suas impressões, com garantia de qualidade Profissional. Superfície resistente, corte perfeito e absorção equilibrada que permite o melhor deslizamento na impressora evitando desperdício de tinta.', 'Gramatura: 75g/m² ? Folhas/resma: 500 em cada pacote ? Certificação: Cerflor', 'https://img.kalunga.com.br/fotosdeprodutos/476103d.jpg', 130.3, 0, 'Chamex', 7),
        (NULL, 'Papel sulfite A4 90g 210mmx297mm Chamex PT 500 FL', '', 'Gramatura: 90g/m² ? Folhas/resma: 500 ? Certificação: Cerflor', 'https://img.kalunga.com.br/fotosdeprodutos/476116d.jpg', 32.8, 0, 'Chamex', 7),

        (NULL, 'Estojo Escolar Plástico Branco, Waleu - PT 1 UN', 'O estojo plus Waleu é fabricado em poliestireno, possui formato retangular e seu compartimento interno é amplo. Ideal para armazenar materiais escolares como: lápis, borracha, apontadores e etc.', 'Estojo escolar ? Cor: branco', 'https://img.kalunga.com.br/fotosdeprodutos/265915d.jpg', 7.3, 0, 'Waleu', 8),
        (NULL, 'Estojo Escolar Poliéster Azul, 6326, Spiral - PT 1 UN', 'O estojo Spiral foi desenvolvido com materiais de alta qualidade para proteger e organizar seus pertences. É ideal para o uso escolar, em cursos e no trabalho.', 'Estojo escolar ? Cor: Azul ? Material: poliéster ? Fechamento em zíper', 'https://img.kalunga.com.br/fotosdeprodutos/266538d.jpg', 33.9, 0, 'Spiral', 8),
        (NULL, 'Estojo Escolar PVC Branco, A2314, Spiral - PT 1 UN', 'O estojo Spiral foi desenvolvido com materiais de alta qualidade para proteger e organizar seus pertences. É ideal para o uso escolar, em cursos e no trabalho.', 'Estojo escolar simples ? Material: PVC ? Fechamento em zíper', 'https://img.kalunga.com.br/fotosdeprodutos/264183d.jpg', 44.9, 0, 'Spiral', 8),

        (NULL, 'Mochila Washing Rosa, A18056, Baohua - PT 1 UN', 'A mochila Baohua, além de estilosa, foi desenvolvida com materiais de alta qualidade para proteger seus pertences, perfeita para o dia a dia!', 'Mochila poliéster ? Dimensões: 30cm x 43cm x 14cm (L x A x P) ? Design ergonômico ? Tecido de alta resistência ? Bolsos organizadores', 'https://img.kalunga.com.br/fotosdeprodutos/494690d.jpg', 187.9, 0, 'Baohua', 9),
        (NULL, 'Mochila Preta, 8729672, Republic Vix - PT 1 UN', 'Organize seu material escolar da melhor maneira possível com as mochilas Republic Vix Amplo espaço, totalmente confortáveis e seguras, ideais para o volta ás aulas.', 'Mochila Escolar em Nylon na cor preta ? Com uma divisória com ziper ? Dois bolsos frontais com zipers ? Alças nas laterais ajustáveis', 'https://img.kalunga.com.br/fotosdeprodutos/495142d.jpg', 106.2, 0, 'Republic Vix', 9),
        (NULl, 'Mochila Triangles , A7635, Baohua - PT 1 UN', 'A mochila Baohua, além de estilosa, foi desenvolvida com materiais de alta qualidade para proteger seus pertences, perfeita para o dia a dia!', 'Mochila poliéster ? Dimensões: 32cm x 47cm x 16cm (L x A x P) ? Design ergonômico ? Tecido de alta resistência ? Bolsos organizadores', 'https://img.kalunga.com.br/fotosdeprodutos/494693d.jpg', 210.9, 0, 'Baohua', 9);
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