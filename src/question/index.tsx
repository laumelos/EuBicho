import { useState } from "react";
import Button from "../components/button";
import Options from "../components/options";
import { useNavigate } from "react-router-dom";

function Question() {
  const navigate = useNavigate();
  const openResult = () => {
    navigate(`/result`);
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
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

  const nextQuestion = () => {
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      openResult; // Alterne para a tela de resultado quando as perguntas terminarem
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
      />
      <Button onClick={nextQuestion} variant="yellow" size="default">
        Próximo
      </Button>
    </div>
  );
}

export default Question;
