import { useLocation } from "react-router-dom";
import Button from "../components/button";
import { useEffect, useState } from "react";

function Result() {
  const location = useLocation();
  const pointsData = location.state?.pointsData || [];
  const [resultAnimal, setResultAnimal] = useState<{
    name: string;
    image: string;
    text: string;
  } | null>(null); // Defina o tipo do estado


  useEffect(() => {
    const getHighestScoringAnimals = () => {
      if (pointsData.length === 0) return [];

      // Use reduce to find all animals with the highest points
      const maxAnimals = pointsData.reduce(
        (maxAnimals: string | any[], animal: { points: number }) => {
          if (maxAnimals.length === 0 || animal.points > maxAnimals[0].points) {
            return [animal];
          } else if (animal.points === maxAnimals[0].points) {
            return [...maxAnimals, animal];
          } else {
            return maxAnimals;
          }
        },
        []
      );

      return maxAnimals;
    };

    const getRandomAnimal = (animals: string | any[]) => {
      const randomIndex = Math.floor(Math.random() * animals.length);
      return animals[randomIndex];
    };

    const highestScoringAnimals = getHighestScoringAnimals();

    const selectedAnimal =
      highestScoringAnimals.length > 0
        ? getRandomAnimal(highestScoringAnimals)
        : null;

    setResultAnimal(selectedAnimal);
  }, []);

  const shareButton = () => {
    console.log("oii");
  };
  return (
    <div className="h-screen max-h-screen flex flex-col items-center justify-between">
      <div className="w-full flex flex-col items-center bg-violet-900  p-8 pb-0 relative">
        <div className="flex flex-col space-y-4 items-center justify-center smallPortrait:mb-40 mb-mb-half mdLandscape:mb-mb-quarter smallLandscape:mb-8">
          <div className="flex flex-col space-y-2 items-center justify-center box-border">
            <p className="text-yellow-400 text-sm md:text-2xl lg:text-md text-center">
              e o resultado foi...
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold text-zinc-50 text-center">
              {resultAnimal?.name}!
            </h1>
          </div>
          <div className="w-3/4 flex flex-col items-center justify-center smallLandscape:flex-row-reverse smallLandscape:gap-8">
            <p className="md:w-full text-zinc-50 text-md md:text-xl mdLandscape:text-lg text-center smallPortrait:hidden mdPortrait:visible smallLandscape:text-left">
              {resultAnimal?.text}
            </p>
            <img
              className="w-2/4 smallLandscape:w-1/5 mdLandscape:w-1/5 h-auto bg-zinc-50 border-8 border-zinc-950 smallLandscape:border-0 rounded-full p-4 lg:p-8 absolute bottom-top-half mdLandscape:bottom-lg-top-half z-50 smallLandscape:relative smallLandscape:bottom-b-unset"
              src={`/questions-images/${resultAnimal?.image}`}
              alt="Imagem do animal"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex-1 bg-zinc-950 p-8 pt-0 flex flex-col items-center justify-end">
        <div className="flex flex-col space-y-8 items-center">
          <div className="flex flex-col space-y-4 items-center">
            <p className="text-yellow-50 text-sm md:text-2xl lg:text-xl text-center">
              Gostou? Compartilhe para saber o resultado dos seus amigos!
            </p>
            <Button onClick={shareButton} variant="purple" size="default">
              <p className="text-yellow-50 text-sm md:text-2xl lg:text-xl text-center">
                Compartilhar
              </p>
            </Button>
          </div>

          <p className="text-yellow-400 text-sm md:text-2xl lg:text-xl text-center">
            Design e desenvolvimento por{" "}
            <a
              className="underline"
              href="https://www.lauramelo.com.br"
              target="_blank"
            >
              Laura Melo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Result;
