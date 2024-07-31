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

  const [imageLoaded, setImageLoaded] = useState(false);

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

  /**/
  const [linkCopied, setLinkCopied] = useState(false);
  const link = "https://www.lauramelo.com.br";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setLinkCopied(true);
      setTimeout(() => {
        setLinkCopied(false);
      }, 3000); // O texto desaparecerá após 3 segundos
    } catch (err) {
      alert("Falha ao copiar o link: ");
    }
  };

  return (
    <div className="h-screen max-h-screen flex flex-col items-center justify-between">
      <div className="w-full flex flex-col items-center bg-violet-900  p-8 pb-0 relative">
        <div className="flex flex-col space-y-4 md:space-y-12 lg:space-y-8 smallLandscape:space-y-4 items-center justify-center mb-mb-half mdLandscape:mb-mb-quarter smallLandscape:mb-8">
          <div className="flex flex-col space-y-2 items-center justify-center box-border">
            <p className="text-yellow-400 text-sm md:text-2xl lg:text-md text-center">
              e o resultado foi...
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-zinc-50 text-center smallPortrait:text-2xl">
              {resultAnimal?.name}!
            </h1>
          </div>
          <div className="w-full md:w-3/4 mdLandscape:w-2/4 flex flex-col items-center justify-center smallLandscape:flex-row-reverse smallLandscape:gap-8">
            <p className="w-full text-zinc-50 text-md md:text-xl text-center mdPortrait:visible smallLandscape:text-left smallPortrait:text-sm smallLandscape:text-sm">
              {resultAnimal?.text}
            </p>
            {resultAnimal && (
              <img
                className={`w-2/4 smallLandscape:w-1/4 mdLandscape:w-1/5 h-auto bg-zinc-50 smallLandscape:bg-transparent border-8 border-zinc-950 smallLandscape:border-0 rounded-full p-4 smallLandscape:p-0 lg:p-8 absolute bottom-top-half mdLandscape:bottom-lg-top-half z-50 smallLandscape:relative smallLandscape:bottom-b-unset box-border ${
                  imageLoaded ? "" : "p-36"
                }`}
                src={
                  imageLoaded
                    ? `/animal-images/${resultAnimal.image}`
                    : `/loading.gif`
                }
                alt="Imagem do animal"
                onLoad={() => setImageLoaded(true)}
              />
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex-1 bg-zinc-950 p-8 pt-0 flex flex-col items-center justify-end">
        <div className="flex flex-col space-y-8 smallLandscape:space-y-4 items-center">
          <div className="flex flex-col space-y-4 items-center smallLandscape:space-y-2">
            <p className="text-yellow-50 text-sm md:text-2xl lg:text-xl text-center">
              Gostou? Compartilhe para saber o resultado dos seus amigos!
            </p>
            <Button onClick={copyToClipboard} variant="purple" size="default">
              <p className="text-zinc-50 text-sm md:text-2xl lg:text-xl text-center">
                Compartilhar
              </p>
            </Button>
            {linkCopied && (
              <p className="text-zinc-50 text-xs md:text-lg lg:text-md font-light">
                Link copiado para a área de transferência!
              </p>
            )}
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
