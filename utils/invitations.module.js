import { SPECIAL_TYPES } from './constants.module'

const [SPECIAL_MAID_OF_HONOR, SPECIAL_BESTMAN, BESTMAN, MAID_OF_HONOR] =
  SPECIAL_TYPES

export const invitations = {
  ticuliru: {
    code: 'ticuliru',
    name: "Nelson 'Ticuliru' Cardoso",
    gift: true,
    specialType: BESTMAN,
    extra: '',
    description:
      'Maninho (SEU ARROMBADO - tony), gostariamos que você fosse ao nosso casamento pois você tem uma contribuição do tamanho do mundo para o nosso casamento  (principalmente por que se não fosse você o eu não teria o fucking dinheiro pra fazer essa celebração - tony), thanks, uma pessoa desmemoriada mas importante nas nossas vidas, por todos os conselhos, e momentos de zueira extrema e falando mal dos outros, agradecemos sua participação.',
  },
  doida_dos_cachorros: {
    code: 'doida_dos_cachorros',
    name: 'Leticia Lima',
    gift: true,
    specialType: MAID_OF_HONOR,
    extra: '',
    description:
      "Olá possivel prima, você é uma pessoa extremamente importante na nossas vidas principalmente por ser a primeira amiga da ariel que realmente é amiga, mesmo sendo tão desmemoriada como o Nelson espero que lembre do dia 26/11, com bastante carinho, agradecemos sua amizade e esperamos ter sempre você conosco( e eu espero que eu não precise lavar a louça depois disso - tony), infelizmente não chamamos o café por questões de 'o restaurante n é pet frendily', agradecemos e amamos as fotos que você tirou( ficaram muito boas - ariel) e até os stickers ( FUCK YOU - tony). espero que possa ir.",
  },
  uchiha_nicolas: {
    code: 'uchiha_nicolas',
    name: 'Nicolas Cardoso',
    gift: false,
    extra: '',
    description:
      'Fala meu jovem, eae carinha, você como um futuro nerd, otaku que gosta muito de naruto, até por que é o melhor anime do mundo, gostariamos muito da sua presença no nosso casamento.',
  },
  skii: {
    code: 'skii',
    name: "Filipe 'T-rex' Botti",
    gift: true,
    specialType: SPECIAL_BESTMAN,
    extra: '',
    description:
      'Bottinho meu lindo, você não tem noção da importancia que tem na nossa vida (mesmo 2 anos não sendo muito tempo, sinto que nós temos uma conexão maior e mais antiga que isso, você é de fato o melhor dos melhores, agradeço muito sua existencia ao universo - tony), você que está sempre conosco, mandando ver naquele churrasco de carne mal passada, e pau no cu de quem não gosta, amamos todas as conversas( principalmente aqueles papo de TI e apple, onde ninguem discute só nunca - tony), você é nosso padrinho e amamos você, mesmo que você pegue um carro com o irmão da ariel bebado para ir pra casa, nós não ligamos, sempre iremos nos entender( pois lhe considero mais do que um amigo, um irmão -tony).',
  },
  rosa_guarana: {
    code: 'rosa_guarana',
    name: 'Rosa Mística',
    specialType: SPECIAL_MAID_OF_HONOR,
    gift: true,
    extra: 'sorry for the Manipuladora, we wont say that again',
    description:
      'Rosa... rosa guaraná, rosa guaraná, ROSA, A MELHOR, rosa guaraná a rosa do nosso coração ( eu sei essa ultima parte não rimou fodac - tony), gostariamos muito de ter você no nosso casamento, uma vez que você é tão importante pra nós que não sabemos mais como seria nossa vida sem você (mesmo você querendo me sequestrar - tony), amamos conversar com você e trocar altas ideias fodas em areas totalmente diferenciadas, gostamos muito de todas as suas indicações de comida(principalmente do doce de leite - ariel), agradeço muito que você seja tão foda e tão inteligente, espero que esteja conosco nesse dia',
  },
  dona_inez: {
    code: 'dona_inez',
    name: 'Inez Botti',
    gift: true,
    extra: '',
    description:
      'Senhorita Inez estamos lhe chamando para nosso casamento, para que possa comemorar o nosso casamento conosco, você que sempre nos recebeu na sua casa, muitas vezes em horas totalmente loukas como 01:10 am, agradecemos todos os seus conselhos e sua presença em todos esses momentos, e gostariamos muito que você compareça no nosso casamento.',
  },
  hallsin: {
    code: 'hallsin',
    name: 'Kaiann Lima',
    specialType: BESTMAN,
    gift: true,
    extra:
      'Você tem direito a levar uma pessoa, mas nós sabemos que será a carol, agradecemos muito se vocês conseguirem comparecer ficamos extremamente agradecido.',
    description:
      'Meu jovem, um dos  amigos mais antigos do tony, desde de primordios do sofrimento e de escassez de vergonha na cara, você está convidado para o nosso casamento, você que é um padrinho, uma das pessoas mais importantes para nós( embora seja cheio de viadagem pqp - tony), gostariamso muito que esteja conosco nesse dia.',
  },
  vegano: {
    code: 'vegano',
    name: 'Leonardo Fernandes',
    specialType: BESTMAN,
    gift: true,
    extra:
      'Você obviamente deve levar a Larissa, OBVIAMENTE, e você tem o direito de ir tomar no cu se não levar',
    description:
      'Jovem Vegano que não é vegano, você que é um dos amigos mais antigos do tony, gostariamos de lhe convidar, o seu convite é um pouco mais especial pois nós sabemos que você não come carne, however vamos tentar conseguir coisas apenas veganas, qualquer coisa você só nega o que for de carne, top, espero que compareça ao nosso casamento, ja que você é o nosso tatuado favorito, (e que sempre esteve conosco nos momentos mais lokos -tony), agradeço sua presença.',
  },
  luise_prazer: {
    code: 'luise_prazer',
    name: 'Luise Lorenzoni Prauze',
    gift: true,
    extra: '',
    description:
      "Olá senhorita Luise, THE GOD FAMOUS LUISE, eu sei que para você será algo extremamente dificil de vir participar, mas você está inclusa na lista do meu coração, é um grande prauzer lhe conhecer, tudo que fez por mim eu não tenho nem palavras para descrever o quanto eu sou grato a você por tudo que fez, você é uma pessoa muito especial para mim, gostaria que estivesse conosoco nesse dia, se não der, don't worry, fico agradecido por ser uma amiga tão boa e agradeço todos os conselhos que você ja me deu, não segui todos, mas agradeço todos eles",
  },
  eduardo_prazer: {
    code: 'eduardo_prazer',
    name: 'Eduardo Lorenzoni Prauze',
    gift: false,
    wontParticipate: true,
    extra: '',
    description:
      "Dude, dude, dude, esse é um convite não tão convite pois não tem PERIGO de eu fazer você sair do Canadá pra vir ao Brazil comemorar meu casamento, I'm not crazy, haha, however, eu estou muito grato por tudo que fez por mim, todos os conselhos e fixes de inglês, você é alguem muito importante pra mim como amigo por isso estou escrevendo, doesn't matter ESL at this point, I just wanted to say thank you for everything, você fez isso ser possivel, mesmo que você diga que o merito é inteiramente meu, eu ainda sou bastante grato, obrigado.",
  },
  tucci: {
    code: 'tucci',
    name: 'Christina Tucci',
    gift: false,
    extra: '',
    english: true,
    wontParticipate: true,
    description:
      "Hello Christina, I'm writing this just because you're an important person to me, of course I won't be the guy to ask you to come to Brazil because my marriage is in less than 2 months, haha. I really appreciate your friendship and all the advice you have given me, that was really important to both of use, and I'm not talking about ESL Library because to me you're a friend beyond just work, I hope we'll be able to meet you in person and have a great time together, thanks for everything.",
  },
  ariel_mom: {
    code: 'ariel_mom',
    name: 'Ana Paula e Arthur',
    gift: false,
    extra: '',
    description:
      'Olá mãe e Arthur, chegou o tão esperado momento de marcar no calendário uma data que é muito importante para nós, a conclusão de mais uma etapa da minha vida e o começo de um novo ciclo. Estão mais do que convidados para prestigiar este momento conosco.',
  },
  pedro: {
    code: 'pedro',
    name: 'Pedro',
    gift: false,
    extra: '',
    description:
      'Olá pai, chegou a hora de aceitar que sua filha cresceu e com isso, uma grande etapa da minha vida está para acontecer. Te convidamos para celebrar  a nossa união e o começo de uma nova vida.',
  },
  unburounken: {
    code: 'unburounken',
    name: 'Rapha',
    gift: false,
    specialType: BESTMAN,
    extra: '',
    description:
      'Olá Rapha, chegou a hora de você presenciar a conclusão de um dos maiores feitos da sua vida que foi ser o responsável pela razão da nossa união, pois sem você, nunca teríamos nos conhecido. Te convidamos a nos prestigiar no começo dessa nova etapa de nossas vidas.',
  },
  renata_e_paulo: {
    code: 'renata_e_paulo',
    name: 'Renata e Paulo',
    gift: false,
    extra: '',
    description:
      'Olá Renata e Paulo, vocês dois apareceram na minha vida e me ajudaram em um momento muito difícil e importante. Sem vocês, eu não teria conseguido passar de uma etapa da minha vida e agora, convido vocês para virem me prestigiar nesse momento de bastante alegria e união.',
  },
  corrinha: {
    code: 'corrinha',
    name: 'Vovó Socorrinha',
    gift: false,
    extra: '',
    description:
      'Olá Vovó Socorrinha, sei que a distância é enorme mas você sempre esteve presente no meu coração e quero compartilhar com você esse momento que vai ser um dos mais felizes da minha vida. Te convido a nos prestigiar neste nosso momento de grande amor e união.',
  },
  micheline: {
    code: 'micheline',
    name: 'Micheline',
    gift: false,
    extra: '',
    description:
      'Olá Micheline, Alexandre e Liz, meus queridos tios e prima, é com muito prazer e amor no coração que os convido para celebrar comigo o começo de uma etapa muito importante da minha vida. Venham prestigiar nossa união.    ',
  },
  janice: {
    code: 'janice',
    name: 'Janice',
    gift: false,
    extra: '',
    description:
      'Olá Janice, Wendell e Henrique, meus queridos tios e primo, é com um imenso carinho e amor no coração que os convido a me acompanhar neste meu início de jornada e celebração da minha união.',
  },
  Tutu: {
    code: 'Tutu',
    name: 'Tutu e Vovó Helma',
    gift: false,
    extra: '',
    description:
      'Olá Tutu e Vovó Helma, vocês dois são duas pessoas importantes na minha vida e que guardo no meu coração com todo o amor e carinho. Convido vocês a virem prestigiar esse meu momento de novo ciclo e união.',
  },
  joselma: {
    code: 'joselma',
    name: 'Joselma',
    gift: false,
    extra: '',
    description:
      'Olá Joselma, Wilson e Raquel, meus queridos tios e prima, é com muito prazer e amor no coração que os convido para celebrar comigo o começo de uma etapa muito importante da minha vida. Venham prestigiar nossa união.',
  },
  anaclaudia: {
    code: 'anaclaudia',
    name: 'Ana Cláudia, Gabriel e Matheus',
    gift: false,
    extra: '',
    description:
      'Olá Ana Cláudia, Gabriel e Matheus, meus queridos primos e tia, é com um imenso carinho e amor no coração que os convido a me acompanhar neste meu início de jornada e celebração da minha união.',
  },
  grandpas_medicine: {
    code: 'grampasmedicine',
    name: 'Rob Mugford',
    gift: false,
    wontParticipate: true,
    english: true,
    extra: '',
    description: `Hey man, I'm writing this because you helped me a lot to improve my english, I would like to say thank you for all this help, you turned out to be a good friend, thanks man, I hope see you soon on Canada.`,
  },
  paper_of_ass: {
    code: 'paper_of_ass',
    name: 'Pedro e Raquel',
    gift: false,
    extra: '',
    description: `Paper Of Ass Guys haha, eu gostaria de convida-los oficialmente para o nosso casamento,
      embora nos conhecemos a tão pouco tempo,
      nós gostamos muito de vocês de uma maneira que não podemos explicar normalmente,
      adoramos as histórias de vocês e principalmente o clima de descontração que sempre temos quando estamos juntos,
      saibam que serão muito bem recebidos em nossas vidas,
      e ficaremos muito felizes se marcarem presença no nosso casamento.`,
  },
  bruxo: {
    code: 'bruxo',
    name: 'Calven Bertoline',
    gift: false,
    extra: '',
    wontParticipate: true,
    description:
      'Opa "meu bruxo" escrevo isso so pra dizer o quanto vc é especial na minha vida, adoraria que vc viesse ao meu casamento mas passagem area esta mt cara e eu n sou rico asuhduasdhasudhasuh, enfim agradeço muito sua amizade é noizzzzzzzz',
  },
  alda: {
    code: 'alda',
    name: 'Tia Alda',
    gift: false,
    extra: '',
    description: `Tia Alda, gostaria muito que a senhora fosse ao nosso casamento,
      eu tony lhe considero como uma avó por todo o suporte que a senhora me deu quando precisei, esse é um momento muito especial e espero que esteja lá`,
  },
  budegueiro: {
    code: 'budegueiro',
    name: 'Edmundo',
    gift: false,
    extra: '',
    description:
      'Eae Edmurphy, gostariamos de lhe convidar para o nosso casamento, espero que você vá pra beber todas e dar prejuizo pro restaurante.',
  },
  mundinha: {
    code: 'mundinha',
    name: 'Mundinha',
    gift: false,
    extra: '',
    description:
      'Opa mundinha, sua bebedora de whisky... gostariamos de lhe convidar para o nosso casamento, espero que você vá pra beber todas e dar prejuizo hahaah e que você se divirta muito no nosso casamento',
  },
  test: {
    code: 'test',
    name: 'Test',
    gift: false,
    extra: 'ausdhuasdhasudhasudhsauh asd asd asdasd asd as ',
    description:
      ' Lorem Ipsum do teste, que eu n sei como devo escrever as coisas deesse texto mas um macaco me disse que o leo é gay e o kayann dar mt o cu, então acho q n preciso entrar em mais detalhes do que esses por questão de sanidade mental',
  },
  perfectguy: {
    code: 'perfectguy',
    name: 'Decio Ramuski',
    gift: false,
    wontParticipate: true,
    extra: '',
    description:
      'Hey man, isso não é bem um convite, é mais uma forma de agradecer as vezes que me ajudou e teve pacência, eu sei que você estará no Brazil na epoca do casamento caso queira vir está mais do que convidado, agradeço bastante as vezes que conversamos e trocamos idea, bastante gratificante, fica aqui meu convite/simple text for you, tamo junto espero um dia lhe encontrar pessoalmente.',
  },
  rodrigo: {
    code: 'rodrigo',
    name: 'Rodrigo Vanoni',
    gift: false,
    english: true,
    wontParticipate: true,
    extra: '',
    description: `
      Hey dude, the main goal of this message is not only to invite you, but to say thanks, cuz I wont be an asshole to ask you to come to my city that is really far away,
      and it would be very expensive, but if you want to come you're invited, ahahah. I wanted to say thank you for all the moments you helped me,
      I really appreciate everything, I'm writing this because I'm thinking about every person who ever helped me to get here in some way,
      and for sure you are one of them.`,
  },
  nico: {
    code: 'nico',
    name: 'Nicolas Cian',
    gift: false,
    english: true,
    wontParticipate: true,
    extra: '',
    description: `
      Hey dude, the main goal of this message is not only to invite you, but to say thanks, cuz I wont be an asshole to ask you to come to my city that is really far away, once my wedding is less than on month it would be expensive hahaha
      but if you want to come you're invited, ahahah. I wanted to say thank you for all the moments you helped me,
      there was a day that you came to me on instagram and just sent an emoji to demonstrate support cuz I was sick,
      that was really a great thing to me, I was feeling really bad about some stuff on that moment, but you talking to me was really helpful, so I wanted to say thanks man!!!`,
  },
  burigo: {
    code: 'burigo',
    name: 'Nadia Burigo',
    gift: false,
    extra: '',
    wontParticipate: true,
    description: `Hey girl, isso não exatamente um invite pq nós moramos muito longe e seria bem caro para você para participar da cerimonia e tal, mas eu quis te mandar isso pois você é uma pessoa importante pra mim, e gostaria de agradecer as vezes que a gente conversou e trocou ideia, foram ótimos momentos, espero que tenhamos momentos ainda melhores no futuro, te considero muito, se quiser vir pro casamento pode vir, so me avisa, mas como o preço das passagens estão bem caras eu acredito que não vai dar muito certo ahhahahah but let me know`,
  },
  toph: {
    code: 'toph',
    name: 'Guilherme Cattani',
    gift: false,
    extra: '',
    wontParticipate: true,
    description:
      'Hey man, isso não é exatamente um invite pois meus casamento esta bem em cima, e nós moramos muito longe, q seria muito caro você vir ausdhuadhasuhd, mas eu gostaria de que você  se sinta convidado, e gostaria de agradecer sua amizade, conversar com você foram ótimos momentos, que eu espero que aconteça ainda mais tamo junto cara precisar de mim pra qualquer coisa é só chamar!!!',
  },
  victor: {
    code: 'victor',
    name: 'Victor Lima',
    gift: false,
    extra: '',
    description:
      'Hey Primo, tudo bom? cara gostaria bastante que marcasse presença no nosso casamento, e que lembre da data, ja que sua memoria é bem ruinzinha, agradeço sua amizade ao longo da minha vida inteira e agradeça o titulo de meu primeiro amigo na vida, uma vez que mesmo sendo primo você sabe o quanto eu sou desapegado a family e quanto o fato de tu ser meu primo não é relevante para eu dizer que você é o meu primeiro amigo, agradeço bastante que você seja essa pessoa, por favor marque presença, nós esperamos você nesse dia tão importante!',
  },
  mom: {
    code: 'mom',
    name: 'Valdenira Bernardo',
    gift: false,
    extra: '',
    description:
      'Mãe eu te amo muito, agradeço tudo que fez por mim ao longo da minha vida, você é uma das pessoas mais importantes no mundo, não preciso dizer que espero que você vá, pois está implicito, te amo muito, agradeço toda a ajuda que deu, TE AMO MUITO!',
  },
  dad: {
    code: 'dad',
    name: 'Antonio Lima',
    gift: false,
    extra: '',
    description:
      'Pai eu te amo muito, agradeço tudo que fez por mim ao longo da minha vida, você é uma das pessoas mais importantes no mundo, não preciso dizer que espero que você vá, pois está implicito, te amo muito, agradeço toda a ajuda que deu, TE AMO MUITO!',
  },
  nadia: {
    code: 'nadia',
    name: 'Nadia Burigo and João Gambatto',
    gift: false,
    extra: '',
    description:
      'Nadia você que é uma pessoa muito especial, e eu não estou convidando por respeito demonio, eu ja tinha chamado sim, toma essa na sua cara, estou chamando você e o gambatto para virem para o nosso casamento pois nós ficariamos extremamente felizes de vocês virem.',
  },
  wedding: {
    code: 'wedding',
    name: null,
    gift: false,
    extra: '',
    description:
      'Olá nós gostariamos de lhe convidar para o nosso casamento, você é uma pessoa muito amada para nós, e gostariamos de ter você no nosso casamento, pois você é uma grande pessoa que sempre iremos querer perto de nós por favor marque presença nessa data tão feliz para nós, contamos com você',
  },
  pl: {
    code: 'pl',
    name: 'Pedro "plcmp" Lucas',
    gift: false,
    extra: '',
    description:
      'Meu jovem nós gostariamos de lhe convidar para o nosso casamento, você é uma pessoa muito amada para nós, e gostariamos de ter você no nosso casamento, pois você é uma grande pessoa que sempre iremos querer perto de nós(e de suas skills altamente valiosas no mundo de hoje, onde devs so se fodem na coluna, na mao, no cu) por favor marque presença nessa data tão feliz para nós, contamos com você',
  },
  gzus: {
    code: 'gzus',
    name: 'Italo "gzus senpai" sampaio',
    gift: false,
    extra: '',
    description:
      'Meu jovem nós gostariamos de lhe convidar para o nosso casamento, você que é uma pessoa muito (vegana) amada para nós, gostariamos de ter você no nosso casamento na data q ta ali em cima(cê num é cego), pois você é uma grande pessoa que por mais que não estejamos nos falando muito, lhe considero pra krl, então vamos pro casamento :D',
  },
  ju: {
    code: 'ju',
    name: 'Juliana ICÓ',
    gift: false,
    extra: '',
    description:
      'Hello jovem vinda do icó, gostariamos de lhe chamar para o nosso casamento,  venha comemorar essa data tão importante para nós, por favor marque presença nessa data tão feliz, contamos com você',
  },
  code: {
    code: 'code',
    name: 'Micheline',
    gift: false,
    extra: '',
    description: '',
  },
}
