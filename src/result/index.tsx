import { useLocation } from "react-router-dom";
import Button from "../components/button";

function Result() {
  const location = useLocation();
  const pointsData = location.state?.pointsData || [];

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

  const resultAnimal =
    highestScoringAnimals.length > 0
      ? getRandomAnimal(highestScoringAnimals)
      : null;

  const shareButton = () => {
    console.log("oii");
  };
  return (
    <div className="h-screen max-h-screen flex flex-col items-center bg-violet-900 space-y-8">
      <div className="flex flex-col items-center justify-center mb-mb-half">
        <div className="flex flex-col space-y-2 p-8 items-center justify-center box-border">
          <p className="text-yellow-400 text-sm md:text-2xl lg:text-xl text-center">
            e o resultado foi...
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold text-zinc-50 text-center w-3/4 lg:w-full">
            {resultAnimal.name}!
          </h1>
        </div>
        <p className="w-3/4 md:w-2/4 text-zinc-50 text-sm md:text-2xl lg:text-xl text-center">
          {resultAnimal.text}
        </p>
      </div>

      <div className="w-full h-2/4 bg-zinc-950 p-8 pt-0 md:pt-8 flex flex-col items-center justify-end space-y-8 absolute bottom-0">
        <img
          className="w-auto h-2/4 bg-zinc-50 border-8 border-zinc-950 rounded-full p-4 lg:p-8 absolute top-top-half z-50"
          src={`/questions-images/${resultAnimal.image}`}
          alt="Imagem do animal"
        />
        <div className="flex flex-col space-y-4 items-center">
          <p className="text-yellow-50 text-sm md:text-2xl lg:text-xl text-center">
            Gostou? Compartilhe para saber o resultado dos seus amigos!
          </p>
          <Button onClick={shareButton} variant="purple" size="default">
            <p>Compartilhar</p>
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
  );
}

export default Result;
