import { useState } from "react";
import Button from "../components/button";
import Options from "../components/options";
import { useNavigate } from "react-router-dom";

function Question() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const openResult = () => {
    navigate(`/result`);
  };

  const questionsData: {
    text: string;
    options: string[];
    points: string[];
    groups: string[];
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
      optionLayout: "grid",
    },
    {
      text: "Qual desses superpoderes você gostaria de ter?",
      options: ["Invisibilidade ", "Teletransporte ", "Superforça", "Voar"],
      points: ["1", "2", "3", "4"],
      groups: [
        "raposa/samaleao/gato/lhama",
        "golfinho/lontra/tigre",
        "panda/cachorro/capivara/preguica",
        "papagaio/coruja/pinguim/tartaruga",
      ],
      optionLayout: "grid",
    },
  ];

  const pointsData: {
    animal: string;
    points: number;
  }[] = [
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
  ];

  const nextQuestion = () => {
    addPoints();
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      openResult; // Alterne para a tela de resultado quando as perguntas terminarem
    }
  };

  const addPoints = () => {
    if (selectedOption !== null) {
      console.log("Selected option:", selectedOption);
      console.log(questionsData[currentQuestion].options[selectedOption]);
      console.log(questionsData[currentQuestion].points[selectedOption]);

      if (questionsData[currentQuestion].points[selectedOption].length > 1) {
        questionsData[currentQuestion].points[selectedOption]
          .split("/")
          .forEach((value) => {
            var groupToReceivePoints = parseInt(value) - 1;
            console.log(
              "groupToReceivePoints: " +
                questionsData[currentQuestion].groups[groupToReceivePoints] +
                " value " +
                groupToReceivePoints
            );
            questionsData[currentQuestion].groups[groupToReceivePoints]
              .split("/")
              .forEach((animalToReceivePoints, index) => {
                console.log("animalToReceivePoints  " + animalToReceivePoints);
                /*console.log(
                  pointsData.animal + " " + index + "  " + animalToReceivePoints
                );
                if (pointsData.animal.includes(animalToReceivePoints)) {*/
                pointsData[index].points = pointsData[index].points + 1;
                /*}*/
              });
          });
        console.log(pointsData);
      } else {
        console.log("um");
      }
    } else {
      console.log("No option selected");
    }
  };

  return (
    <div className="h-screen max-h-screen flex flex-col items-center bg-zinc-950 justify-between p-8 space-y-16">
      <h2 className="text-zinc-50 text-3xl md:text-4xl text-center w-full md:w-3/4">
        {questionsData[currentQuestion].text}
      </h2>
      <Options
        variant={questionsData[currentQuestion].optionLayout}
        optionsData={questionsData[currentQuestion].options}
        currentQuestion = {currentQuestion}
        onOptionSelect={setSelectedOption} // Passa a função de callback para Options
      />
      <Button onClick={nextQuestion} variant="yellow" size="default">
        Próximo
      </Button>
    </div>
  );
}

export default Question;
