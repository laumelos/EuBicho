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
    navigate(`/result`);
  };

  const clearButtonOptionClick = () => {
    setSelectedButtonOption(null); // Limpa a seleção
  };

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
      options: ["0-24%", "25-49%", "50-74%", "75-100%"],
      points: ["1", "2", "3", "4"],
      groups: [
        "preguica/tartaruga/panda/capivara",
        "gato/lhama/camaleao/coruja",
        "raposa/cachorro/pinguim",
        "tigre/golfinho/papagaio/lontra",
      ],
      images: [],
      optionLayout: "column",
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

  const [pointsData, setPointsData] = useState([
    { animal: "cachorro", points: 0 },
    { animal: "gato", points: 0 },
    { animal: "tigre", points: 0 },
    { animal: "raposa", points: 0 },
    { animal: "papagaio", points: 0 },
    { animal: "tartaruga", points: 0 },
    { animal: "coruja", points: 0 },
    { animal: "camaleao", points: 0 },
    { animal: "panda", points: 0 },
    { animal: "capivara", points: 0 },
    { animal: "lhama", points: 0 },
    { animal: "preguica", points: 0 },
    { animal: "golfinho", points: 0 },
    { animal: "lontra", points: 0 },
    { animal: "pinguim", points: 0 },
  ]);

  const nextQuestion = () => {
    if (selectedOption !== null) {
      setSelectedOption(null);
      clearButtonOptionClick(); //Tirar estilo do botão selecionado anteriormente
      addPointsForOptions();
      if (currentQuestion < questionsData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        openResult; // Alterne para a tela de resultado quando as perguntas terminarem
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
    <div className="h-screen max-h-screen flex flex-col items-center bg-zinc-950 justify-between p-8 space-y-8 md:space-y-16 overflow-y-auto">
      <h2 className="text-zinc-50 text-3xl md:text-4xl text-center w-full md:w-3/4">
        {questionsData[currentQuestion].text}
      </h2>
      <Options
        variant={questionsData[currentQuestion].optionLayout}
        optionsData={questionsData[currentQuestion].options}
        imagesData={questionsData[currentQuestion].images}
        onOptionSelect={setSelectedOption} // Passa a função de callback para Options
        selectedButtonOption={selectedButtonOption}
        setSelectedButtonOption={setSelectedButtonOption}
      />
      <Button onClick={nextQuestion} variant="yellow" size="default">
        Próximo
      </Button>
    </div>
  );
}

export default Question;
