const data = [
  {
    category: "UEFA Champions League",
    questions: [
      {
        question: "Qual clube tem mais títulos?",
        options: ["Milan", "Barcelona", "Real Madrid", "Bayern de Munique"],
        answer: "Real Madrid",
        tip: "É um clube da Espanha",
      },
      {
        question: "Quantos títulos de Champions o Real Madrid tem?",
        options: ["13", "11", "16", "14"],
        answer: "14",
        tip: "É um número par",
      },
      {
        question: "Quem é o maior artilheiro da Champions?",
        options: ["Messi", "Cristiano Ronaldo", "Puskas", "Di Stefano"],
        answer: "Cristiano Ronaldo",
        tip: "Jogador Português",
      },
      {
        question: "Quem é o maior assistente da Champions?",
        options: ["Messi", "Dani Alves", "Cristiano Ronaldo", "Neymar"],
        answer: "Cristiano Ronaldo",
        tip: "Jogador Português",
      },
      {
        question: "Em que ano a Champions foi criada?",
        options: ["1930", "1955", "1992", "1999"],
        answer: "1955",
        tip: "Número ímpar",
      },
      {
        question: "Em que edição o Real Madrid conquistou a La Décima?",
        options: ["13/14", "16/17", "15/16", "17/18"],
        answer: "13/14",
        tip: "7x1",
      },
      {
        question: "A quem pertence o recorde de mais gols em uma edição de Champions?",
        options: ["Messi", "Benzama", "Lewandowski", "Cristiano Ronaldo"],
        answer: "Cristiano Ronaldo",
        tip: "Jogador Português",
      },
      {
        question: "A quem pertence o recorde de mais gols em uma edição de Champions?",
        options: ["Messi", "Cristiano Ronaldo", "Benzama", "Lewandowski"],
        answer: "Cristiano Ronaldo",
        tip: "Jogador Português",
      },
      {
        question: "Quais foram os artilheiros das últimas quatro edições de Champions? 18/19 - 19/20 - 20/21 - 21/22",
        options: ["Messi, Lewandowski, Haaland, Benzama", 
        "Cristiano Ronaldo, Messi, Mbappe, Benzama", 
        "Messi, Mbappe, Benzema, Benzama", 
        "Messi, Lewandowski, Lewandowski, Lewandowski",],
        answer: "Messi, Lewandowski, Haaland, Benzama",
        tip: "Tem Norueguês",
      },
      {
        question: "Qual o 2 maior campeão da Champions?",
        options: ["Inter de Milão", "Barcelona", "Milan", "Liverpool"],
        answer: "Milan",
        tip: "Clube Italiano",
      },
    ],
  },
  {
    category: "Copa do Mundo",
    questions: [
      {
        question: "Qual copa do mundo teve a bola mais odiada das copas?",
        options: ["Telstar 2018", "Jabulani 2010", "Brazuca 2014", "Al Rihla 2022"],
        answer: "Jabulani 2010",
        tip: "Copa na África do Sul",
      },
      {
        question: "Quem foi o artilheiro da copa do mundo 2022?",
        options: ["Mbappe", "Messi", "Neymar", "Kane"],
        answer: "Mbappe",
        tip: "Jogador Francês",
      },
      {
        question: "Em que ano o Brasil foi eliminado pela França na final da copa?",
        options: ["1990", "1994", "2006", "1998"],
        answer: "1998",
        tip: "Antes do penta",
      },
      {
        question: "Qual jogador que bateu o último pênalti para a Argentina na copa do mundo de 2022?",
        options: ["Messi", "Paredes", "Montiel", "Tagliafico"],
        answer: "Montiel",
        tip: "Jogador começa com M",
      },
      {
        question: "Em que ano foi criado a copa do mundo?",
        options: ["1934", "1920", "1930", "1924"],
        answer: "1930",
        tip: "30",
      },
      {
        question: "Quem foi campeão da primeira copa do mundo?",
        options: ["Uruguai", "Itália", "Brasil", "França"],
        answer: "Uruguai",
        tip: "Seleção Sul Americana",
      },
      {
        question: "Em que ano o Brasil conquistou sua primeira copa do mundo?",
        options: ["1958", "1962", "1970", "1994"],
        answer: "1958",
        tip: "Mais antiga",
      },
      {
        question: "Qual foi a maior goleada da copas do mundo?",
        options: ["Alemanha x Brasil - 2014", "Portugal x Costa Rica - 2010", "Hungria - El Salvador - 1982", "Brasil x Coreia do Sul - 2022"],
        answer: "Hungria - El Salvador - 1982",
        tip: "1982",
      },
      {
        question: "Maior Goleador de copas do mundo?",
        options: ["Fenômeno", "Messi", "Cristiano Ronaldo", "Klose"],
        answer: "Klose",
        tip: "Jogador Alemão",
      },
      {
        question: "Quem eliminou o Brasil em 2018?",
        options: ["França", "Inglaterra", "Bélgica", "Croácia"],
        answer: "Bélgica",
        tip: "Jogador Alemão",
      },
    ],
  },
  {
    category: "Perguntas sobre jogadores",
    questions: [
      {
        question: "Quantos gols Neymar fez pelo Barcelona?",
        options: [
          "116",
          "136",
          "105",
          "121",
        ],
        answer: "105",
        tip: "Número Ímpar",
      },
      {
        question: "Quantos Gols CR7 fez pelo Real Madrid?",
        options: ["440", "450", "463", "439"],
        answer: "450",
        tip: "Número Ímpar",
      },
      {
        question: "Quantos Gols Messi fez pelo Barcelona?",
        options: ["671", "672", "673", "674"],
        answer: "672",
        tip: "Número Par",
      },
      {
        question: "Quantos Gols Mbappe fez na copa do mundo 2022?",
        options: ["7", "9", "6", "8"],
        answer: "8",
        tip: "Número Par",
      },
      {
        question:
          "Quantos gols Messi marcou na temporada 2011/2012?",
        options: ["91", "59", "48", "62"],
        answer: "91",
        tip: "Número Ímpar",
      },
      {
        question:
          "Quantos gols CR7 marcou na temporada 2011/2012?",
        options: ["78", "69", "52", "83"],
        answer: "69",
        tip: "Número Ímpar",
      },
      {
        question: "Quem foi o melhor jogador do mundo em 2018?",
        options: ["Messi", "Cristiano Ronaldo", "Lewandowski", "Modric"],
        answer: "Modric",
        tip: "Jogador Croáta",
      },
      {
        question: "Quantas bolas de ouro possui Messi?",
        options: ["8", "7", "6", "5"],
        answer: "8",
        tip: "Número Par",
      },
      {
        question: "Total de gols marcado pelo trio MSN(Barcelona)?",
        options: ["380", "355", "337", "364"],
        answer: "364",
        tip: "Número Par",
      },
      {
        question: "Em que ano Neymar conquistou o ouro olímpico pela Seleção?",
        options: ["2016", "2020", "2012", "2008"],
        answer: "2016",
        tip: "Após copa do Mundo no Brasil",
      },
    ],
  },
];

export default data;
