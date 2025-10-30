const chapters = [
    {
        id:1,
        title: "Capítulo I - Inexistência Jurídica",
        page: 1,
        summary: "..de uma Condenação Judicial proferida por um Acórdão do STJ nº137/STJ/2023",
        content: `..cujo segmento da "fundamentação" foi substancialmente cortado, amputado e diminuido pelo "computador" sem que os Juizes subscritos se apercebessem`,
    },
    {
        id:2,
        title: "Capítulo II - Introdução e Contextualização",
        page:2,
        summary: "Como é do conhecimento do público geral, o Deputado da UCID, Amadeu Fortes Oliveira, antes de ser eleito Deputado já exercia advogacia..",
        content: `Atividade essa que continuou a desenvolver, em paralelo com as funções de Deputado, tal como lhe é permitido pelos Artigos 25 do Estatuto dos Deputados, e Alinea C) do nº1 do Artigo 174 do Estatuto da Ordem dos Advogados de Cabo Verde. `,
    },
    {
        id:3,
        title: "Capítulo III - Principais Magistrados Judiciais Intervenientes",
        page:8,
        summary: "Para melhor compreensão cumpre destacar o seguinte:",
        content:`Referir os principais magistrados que tiveram intervenção no processo de modo a permitir uma avaliação das "Resistências" e das "influências" que serão necessárias vencer e convencer;
        Referir os principais atos e sequencia processuais, de modo a se conseguir entender as fraudes e as inserções de falsidades no processo, visando a condenação do arguido, a todo o custo.`,
    },
    {
        id:4,
        title: "Capítulo IV - Do Caso Arlindo Teixeira",
        page:15,
        summary: "Tendo em conta que o requerente Amadeu Oliveira foi incriminado por atos praticados em defesa do Sr. Arlindo Teixeira",
        content:`Forçoso se torna analisar os factos e a conduta do Requerente dentro do contexto e circunstâncias do processo do Sr. Arlindo Teixeira, tendo em atenção os seguintes factos:`,
    },
    {
        id:5,
        title: "Capítulo V - Tenebrosas e Inconfessas Razões",
        page:28,
        summary: "para amputar os 24 Pontos de Facto",
        content:`Desde a dedução da primeira acusação que o arguido ganhou a firme convicção de que o Sr. Procurador do círculo de Barlavento, Dr. Baltasar Ramos, deduziu a acusação na certeza de que o Arguido Amadeu Oliveira não teria cometido nenhum crime, pois havia na acusação 26 pontos de factos considerados provados pelo Ministério Público que demosntravam que o arguido teria agido na qualidade de Defensor Oficioso e nunca como Deputado.`,
    },
    {
        id:6,
        title:"Capítulo VI - Inexistência Jurídica",
        page:32,
        summary: "O Defensor Oficioso, Amadeu Oliveira foi condenado por força da fudamentação de facto vertida no Acórdão Condenatório nº 137/STJ/2023 de 20 de junho",
        content: `Proferido pelos venerandos Juizes Conselheiros do STJ: Dra. Zaida Fonseca Lima, Dr. Arlindo Martins e Dra. Teresa Evora de Barros, em sede do Recurso Ordinário nº 3/STJ/2023, que havia sido interposto contra a condenação anterior proferida pelo Tribunal da Relação de Barlavento no âmbito do Acórdão nº 25/TRB/2022 de 10 de novembro.
        Todavia, posteriormente a 15 de novembro de 2023, foi tornado público, pelo próprio Supremo Tribunal de Justiça que o conteúdo que ficou vertido no Acórdão não corresponde à verdadeira decisão de fundamentação dos factos, tendo em conta que por lapso na formatação do computador, parte essencial da fundamentação que deveria constar do Acórdão foi "cortado" por suposto e alegado erro do computador.`,
    },
    {
        id:7,
        title:"Capítulo VII - Recusa do Supremo Tribunal de Justiça em corrigir o erro",
        page:42,
        summary:"Acontece que os venerandos Juizes do STJ tiveram duas grandes oportunidades para corrigirem esse alegado e suposto erro do computador",
        content:`..porém de forma consciente e de modo deliberado, insistiram no erro e esquivaram-se de fazer justiça ao Arguido Amadeu Oliveira, como se demonstra já de seguida:`,
    },
    {
        id:8,
        title:"Capítulo VIII - Vinculação do Principio da Vinculação Temática",
        page:55,
        summary:"Com efeito o princípio da vinculação temática ficou desenvolvido e densificado nos artigos 396, 399 e 403 todos do Código Processo Civil",
        content:`..não sendo lícito o tribunal recusar, omitir ou esquivar-se de apreciar, pronunciar-se e decidir sobre...`,
    },
    {
        id:9,
        title:"Capítulo IX - O forjar de um Suposto Crime de Atentado ao Estado de Direito",
        page:57,
        summary:"A Lei nº85/VI/2005 de 26 de dezembro que prevê os crimes de responsabilidade dos Titulares de Cargos Politicos",
        content:`..na base da qual se procedeu a condenação do signatário, não possui nenhuma aplicabilidade e estabelece o seu âmbito e incidência, anunciando o seguinte:`,
    },
    {
        id:10,
        title:"Capítulo X - Força Jurídica Cardinal do Ponto 32 dado como Provado",
        page:77,
        summary:"Contradição Insanável",
        content:`Entretanto, agindo e decidindo de modo diabólicamente contraditório esses mesmos juízes do tribunal da Relação e do Supremo Tribunal de Justiça viriam a condenar Amadeu Oliveira como se tivesse auxiliado Arlindo Teixeira usando e abusando da função de Deputado Nacional, quando eles mesmo ja tinham dado como provado:
        "Eleito Deputado Nacional, o Arguido Amadeu Oliveira continuou a intervir como Defensor Oficioso de Arlindo Teixeira, sustentando sempre, no processo deste e em público, o entendimento de que este é inocente..."`,
    },
    {
        id:11,
        title:"Capítulo XI - Amputar 24 Pontos de Facto",
        page:78,
        summary:"Para arbitráriamente recusar considerar provados - 90 Pontos de Facto PROVADOS.",
        content:`NOTA BEM: Como já ficou acima exposto, pese embora o amputar, o cortar, o esquartejar e vandalizar dos 24 pontos de Facto dados como PROVADOS, todavia..., entretanto..., contudo,...ainda o Ponto 32 dos Factos dados como PROVADOS conseguiu sobreviver aos actos de vandalismo judicial`,
    },
    {
        id:12,
        title:"Capítulo XII - Fraudes, Falsificações e Prevaricações",
        page:83,
        summary:"Na verdade e em verdade vos digo, que muito mais do que mera Inexistência Jurídica, o Acórdão nº137/STJ/2023 ficou prenhe de Crimes de Inserção de Falsidades",
        content:`Posto que, os venerandos Juizes do STJ passaram a inserir várias falsidades nesse mesmo Acórdão num esforço inacreditável para forjar falsos fundamentos`,
    },
    {
        id:13,
        title:"Capítulo XIII - Consciência da Inexistência Jurídica do Acórdão nº137/STJ/2023",
        page:120,
        summary:"Por todo o acima exposto, resulta grosseiramente evidente...",
        content:`O Acórdão padece não só de Inexistência Jurídica, como trata-se de uma obra-prima de inserção de falsidades e de prevaricação dos magistrados`,
    },
    {
        id:14,
        title:"Capítulo XIV - Uma condenação que configura ser Um absurdo Jurídico",
        page:122,
        summary:"Germano Almeida",
        content:`Afirma, que no seu entendimento, sómente uma forte vontade de vingança, inimizade ou vontade de destruir o Recorrente Amadeu Oliveira poderia levar os venerandos Juizes...`,
    },
    {
        id:15,
        title:"Capítulo XV - Excesso de Prisão Preventiva",
        page:128,
        summary:"HABEAS CORPUS",
        content:`Como ficou acima explanado, a situação parece configurar um caso típico de Inexistência Jurídica da condenação vertida no Acórdão nº137/STJ/2023, donde resulta
        que até a presente data ainda não exista uma decisão tomada pela segunda instância que seja válida e eficaz, devido a Inexistência Jurídica`,
    },
    {
        id:16,
        title:"Capítulo XVI - Dos Pedidos deste Parecer Jurídico",
        page:131,
        summary:"Por todo o exposto:",
        content:`Roga-se a emissão de um parecer jurídico a incidir sobre os seguintes 4 aspectos jurídicos:`,
    },
];

export default chapters;