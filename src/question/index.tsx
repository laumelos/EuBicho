import { useEffect, useState } from "react";
import Button from "../components/button";
import Options from "../components/options";
import { useNavigate } from "react-router-dom";

function Question() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedButtonOption, setSelectedButtonOption] = useState<
    number | null
  >(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const openResult = () => {
    navigate(`/result`, { state: { pointsData } });
  };

  const clearButtonOptionClick = () => {
    setSelectedButtonOption(null); // Limpa a seleção
  };

  const [isOptionsLoaded, setIsOptionsLoaded] = useState(false);

  const questionsData: {
    text: string;
    options: string[];
    points: string[];
    groups: string[];
    images: string[];
    optionLayout: "grid" | "column";
  }[] = [
    {
      text: "Qual combinação estranha de comida você preferiria experimentar?",
      options: [
        "Brócolis com pasta de amendoim",
        "Morango com bacon",
        "Sushi de carne moída",
        "Sardinha com goiabada",
      ],
      points: ["1/4", "2/4", "2/3", "1/3"],
      groups: [
        "panda/capivara/lhama/preguica",
        "tigre/raposa/cachorro",
        "golfinho/lontra/pinguim",
        "gato/papagaio/tartaruga/coruja/camaleao",
      ],
      images: ["Q1O1.png", "Q1O2.png", "Q1O3.png", "Q1O4.png"],
      optionLayout: "grid",
    },
    {
      text: "Qual desses superpoderes você gostaria de ter?",
      options: ["Invisibilidade ", "Teletransporte ", "Superforça", "Voar"],
      points: ["1", "2", "3", "4"],
      groups: [
        "raposa/camaleao/gato/lhama",
        "golfinho/lontra/tigre",
        "panda/cachorro/capivara/preguica",
        "papagaio/coruja/pinguim/tartaruga",
      ],
      images: ["Q2O1.png", "Q2O2.png", "Q2O3.png", "Q2O4.png"],
      optionLayout: "grid",
    },
    {
      text: "Qual lugar incomum você escolheria para morar?",
      options: [
        "Caverna em uma montanha",
        "Submarino",
        "Casa na árvore",
        "Toca de Hobbit",
      ],
      points: ["1", "2", "3", "4"],
      groups: [
        "tigre/raposa/lhama",
        "golfinho/lontra/pinguim/tartaruga",
        "papagaio/coruja/panda/preguica",
        "capivara/cachorro/gato/camaleao",
      ],
      images: [],
      optionLayout: "column",
    },
    {
      text: "Você vê esse copo como meio cheio ou meio vazio?",
      options: ["Meio cheio", "Meio vazio"],
      points: ["1", "2"],
      groups: [
        "tigre/golfinho/pinguim/papagaio/panda/capivara/cachorro/camaleao",
        "raposa/lhama/lontra/tartaruga/coruja/preguica/gato",
      ],
      images: ["Q4O1.png"],
      optionLayout: "column",
    },
    {
      text: "Qual desses objetos improváveis você colecionaria?",
      options: [
        "Pedras incomuns",
        "Bolas de gude",
        "Itens em miniatura",
        "Shampoos de hotéis",
      ],
      points: ["1", "2", "3", "4"],
      groups: [
        "camaleao/raposa/papagaio",
        "golfinho/lontra/pinguim",
        "tartaruga/capivara/panda/preguica",
        "tigre/cachorro/gato/coruja/lhama",
      ],
      images: ["Q5O1.png", "Q5O2.png", "Q5O3.png", "Q5O4.png"],
      optionLayout: "grid",
    },
    {
      text: "Qual o seu nível de energia na maior parte do tempo?",
      options: ["", "", "", ""],
      points: ["1", "2", "3", "4"],
      groups: [
        "preguica/tartaruga/panda/capivara",
        "gato/lhama/camaleao/coruja",
        "raposa/cachorro/pinguim",
        "tigre/golfinho/papagaio/lontra",
      ],
      images: ["Q6O1.png", "Q6O2.png", "Q6O3.png", "Q6O4.png"],
      optionLayout: "grid",
    },
    {
      text: "Qual animal fictício você gostaria de conhecer?",
      options: ["Fênix", "Unicórnio", "Kraken", "Yeti"],
      points: ["1", "2", "3", "4"],
      groups: [
        "papagaio/camaleao/coruja/tigre",
        "raposa/gato/panda/capivara",
        "golfinho/cachorro/pinguim",
        "preguica/lhama/tartaruga/lontra",
      ],
      images: ["Q7O1.png", "Q7O2.png", "Q7O3.png", "Q7O4.png"],
      optionLayout: "grid",
    },
    {
      text: "Quais desses desafios você acha que conseguiria cumprir?",
      options: [
        "Alimentar-se exclusivamente de comidas geladas por uma semana",
        "Acampar sozinho na floresta por 3 dias",
        "Participar do BBB por um mês",
        "Passar 15 dias andando apenas de bicicleta ou a pé",
      ],
      points: ["1", "2", "3", "4"],
      groups: [
        "golfinho/lontra/pinguim/tartaruga",
        "raposa/gato/panda/capivara",
        "tigre/cachorro/coruja",
        "preguica/lhama/papagaio/camaleao",
      ],
      images: [],
      optionLayout: "column",
    },
    {
      text: "Estamos quase lá… Qual seria o seu papel em um filme?",
      options: ["Herói", "Vilão", "Ancião sábio", "Narrador"],
      points: ["1", "2", "3", "4"],
      groups: [
        "tigre/golfinho/raposa/panda",
        "coruja/camaleao/lontra/cachorro",
        "papagaio/capivara/preguica/tartaruga",
        "gato/lhama/pinguim",
      ],
      images: ["Q9O1.png", "Q9O2.png", "Q9O3.png", "Q9O4.png"],
      optionLayout: "grid",
    },
    {
      text: "Por fim… Siga sua intuição!",
      options: ["1", "10", "100", "300"],
      points: ["1", "2", "3", "4"],
      groups: [
        "papagaio/camaleao/gato/coruja",
        "raposa/lontra/cachorro/preguica",
        "capivara/pinguim/panda/tartaruga",
        "lhama/tigre/golfinho",
      ],
      images: [],
      optionLayout: "grid",
    },
  ];

  interface Animal {
    animal: string;
    points: number;
    name: string;
    image: string;
    text: string;
  }

  const [pointsData] = useState<Animal[]>([
    {
      animal: "cachorro",
      points: 0,
      name: "Cachorro",
      image: "cachorro.png",
      text: "O cachorro é leal, amigável e cheio de energia. Com um faro superpoderoso e habilidades incríveis de comunicação, ele entende suas emoções e até 250 palavras. Sempre pronto para aventuras, ele é o companheiro ideal para todas as horas.",
    },
    {
      animal: "gato",
      points: 0,
      name: "Gato",
      image: "gato.png",
      text: "O gato é independente, curioso e cheio de graça. Ele adora explorar, tem reflexos rápidos e um ronronar que acalma. Com habilidades de caça afiadas e uma incrível capacidade de se adaptar, ele é um companheiro elegante e cheio de mistério.",
    },
    {
      animal: "tigre",
      points: 0,
      name: "Tigre",
      image: "tigre.png",
      text: "O tigre é majestoso e poderoso, com um olhar que impõe respeito. Ele é um caçador solitário, conhecido por sua agilidade e força. Seus listras únicas o tornam um dos animais mais icônicos da selva, e sua habilidade em nadar e escalar o diferencia no reino animal.",
    },
    {
      animal: "raposa",
      points: 0,
      name: "Raposa",
      image: "raposa.png",
      text: "A raposa é astuta e adaptável, famosa por sua esperteza e inteligência. Ela se destaca por sua capacidade de se camuflar em diversos ambientes e é um excelente caçador noturno. Com seu focinho afiado e orelhas grandes, a raposa é tanto charmosa quanto habilidosa.",
    },
    {
      animal: "papagaio",
      points: 0,
      name: "Papagaio",
      image: "papagaio.png",
      text: "O papagaio é vibrante e sociável, conhecido por suas cores brilhantes e habilidades impressionantes de imitar sons. Ele é extremamente inteligente e gosta de interagir com os humanos, muitas vezes se tornando o centro das atenções com suas “conversas” divertidas.",
    },
    {
      animal: "tartaruga",
      points: 0,
      name: "Tartaruga",
      image: "tartaruga.png",
      text: "Lentas mas determinadas, as tartarugas são símbolos de persistência e longevidade. Com suas cascas protetoras e uma vida longa, elas viajam pelo tempo com calma e sabedoria, sempre mantendo um ritmo constante em suas jornadas.",
    },
    {
      animal: "coruja",
      points: 0,
      name: "Coruja",
      image: "coruja.png",
      text: "Mistérios da noite, as corujas são conhecidas por sua visão aguçada e capacidade de voar em silêncio. Símbolos de sabedoria e vigilância, elas caçam com precisão e têm um jeito encantador de girar a cabeça em quase 360 graus.",
    },
    {
      animal: "camaleao",
      points: 0,
      name: "Camaleão",
      image: "camaleao.png",
      text: "Mestres da camuflagem, os camaleões mudam de cor para se adaptar ao ambiente e mostrar emoções. Com olhos que se movem independentemente, eles têm uma visão panorâmica e uma língua rápida como um foguete para capturar insetos.",
    },
    {
      animal: "panda",
      points: 0,
      name: "Panda",
      image: "panda.png",
      text: "Os pandas são conhecidos por seu charme e pelagem preta e branca. Embora passem a maior parte do tempo comendo bambu, são excelentes escaladores e têm um comportamento brincalhão. Eles têm uma personalidade tranquila e adorável.",
    },
    {
      animal: "capivara",
      points: 0,
      name: "Capivara",
      image: "capivara.png",
      text: "A capivara é o maior roedor do mundo e tem um jeito sociável e relaxado. Adora água e passa muito tempo nadando e socializando com seus amigos. São animais gentis e amigáveis, sempre prontos para um banho de sol.",
    },
    {
      animal: "lhama",
      points: 0,
      name: "Lhama",
      image: "lhama.png",
      text: "A lhama é uma criatura carinhosa e muito expressiva, conhecida por seu charme e suas caretas engraçadas. Ela é super sociável e adora estar com a sua manada. Além de serem ótimas para carregar cargas, elas também têm um talento especial para spitting!",
    },
    {
      animal: "preguica",
      points: 0,
      name: "Bicho-preguiça",
      image: "preguica.png",
      text: "O bicho-preguiça é o mestre da calma, passando a maior parte do tempo pendurado de cabeça para baixo nas árvores. Seu ritmo lento é uma forma de economizar energia, e ele só desce para o chão uma vez por semana. Seus movimentos são tão lentos que até as algas crescem em seu pelo!",
    },
    {
      animal: "golfinho",
      points: 0,
      name: "Golfinho",
      image: "golfinho.png",
      text: "Amigáveis e inteligentes, os golfinhos são conhecidos por suas habilidades acrobáticas e sua comunicação complexa. Eles formam laços fortes dentro de seus grupos e têm um comportamento social rico. Além disso, são capazes de resolver problemas e usar ferramentas.",
    },
    {
      animal: "lontra",
      points: 0,
      name: "Lontra",
      image: "lontra.png",
      text: "Divertidas e sociais, as lontras são excelentes nadadoras e usam ferramentas, como pedras, para abrir moluscos. Elas formam laços fortes com suas famílias e passam muito tempo brincando e caçando em grupos. Com uma pelagem densa, elas se mantêm aquecidas mesmo em águas frias.",
    },
    {
      animal: "pinguim",
      points: 0,
      name: "Pinguim",
      image: "pinguim.png",
      text: "Os pinguins são mestres da natação e passam a maior parte do tempo no mar. Em terra, eles caminham com uma marcha engraçada e formam colônias grandes para se proteger do frio. São leais e cuidam bem de seus filhotes em um ambiente desafiador.",
    },
  ]);

  useEffect(() => {
    // Simulando carregamento com um timeout, ajuste conforme necessário
    const loadOptions = () => {
      setTimeout(() => {
        setIsOptionsLoaded(true);
      }, 1000); // Tempo de carregamento simulado
    };

    loadOptions();
  }, [currentQuestion]);

  const nextQuestion = () => {
    if (selectedOption !== null) {
      setSelectedOption(null);
      clearButtonOptionClick(); //Tirar estilo do botão selecionado anteriormente
      addPointsForOptions();
      console.log(questionsData.length);
      console.log(currentQuestion);
      setIsOptionsLoaded(false); // Redefine o estado de carregamento para a próxima pergunta

      if (currentQuestion < questionsData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        openResult(); // Alterne para a tela de resultado quando as perguntas terminarem
      }
    }
  };

  const addPointsForOptions = () => {
    if (selectedOption !== null) {
      console.log("Selected option:", selectedOption);

      //Se a opção adiciona perguntas para mais de um grupo
      if (questionsData[currentQuestion].points[selectedOption].length > 1) {
        questionsData[currentQuestion].points[selectedOption]
          .split("/")
          .forEach((option) => {
            var groupToReceivePoints = parseInt(option) - 1;
            console.log(
              "groupToReceivePoints: " +
                questionsData[currentQuestion].groups[groupToReceivePoints] +
                " option " +
                groupToReceivePoints
            );
            addPointsToAnimals(groupToReceivePoints);
          });
      } else {
        var groupToReceivePoints =
          parseInt(questionsData[currentQuestion].points[selectedOption]) - 1;
        addPointsToAnimals(groupToReceivePoints);
      }
    }
    console.log(pointsData);
  };

  //Adiciona um ponto no array para cada animal no grupo
  const addPointsToAnimals = (groupToReceivePoints: number) => {
    questionsData[currentQuestion].groups[groupToReceivePoints]
      .split("/")
      .forEach((animalToReceivePoints) => {
        pointsData.forEach((pointData, index) => {
          if (pointData.animal === animalToReceivePoints) {
            pointsData[index].points += 1;
          }
        });
      });
  };

  return (
    <div className="h-screen max-h-screen flex flex-col items-center bg-zinc-950 justify-between p-8 space-y-8 md:space-y-16 mdLandscape:space-y-10 smallLandscape:space-y-8 overflow-y-auto portrait:overflow-y-auto">
      <div className="flex flex-col space-y-4 items-center">
        <p className="text-zinc-950 bg-yellow-400 rounded-full w-8 h-8 landscape:w-12 landscape:h-12 flex items-center justify-center text-lg font-semibold">
          {currentQuestion + 1}
        </p>
        <h2 className="text-zinc-50 text-3xl md:text-4xl text-center w-full md:w-3/4">
          {questionsData[currentQuestion].text}
        </h2>
      </div>
      {isOptionsLoaded ? (
        <Options
          variant={questionsData[currentQuestion].optionLayout}
          optionsData={questionsData[currentQuestion].options}
          imagesData={questionsData[currentQuestion].images}
          onOptionSelect={setSelectedOption} // Passa a função de callback para Options
          selectedButtonOption={selectedButtonOption}
          setSelectedButtonOption={setSelectedButtonOption}
        />
      ) : (
        <img
          className={`w-1/4 smallLandscape:w-2/12 mdLandscape:w-1/12 h-auto`}
          src={`/loading.gif`}
          alt="Carregando..."
        />
      )}
      <Button onClick={nextQuestion} variant="yellow" size="default">
        Próximo
      </Button>
    </div>
  );
}

export default Question;
