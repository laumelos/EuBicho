import { useState } from "react";
import { tv, VariantProps } from "tailwind-variants";
import Button from "./button";

const optionsVariants = tv({
  base: "w-2/4",
  variants: {
    variant: {
      grid: "grid grid-cols-2 gap-4 md:gap-8 w-full md:w-3/4 landscape:w-2/4 flex-1",
      column: "flex flex-col items-center w-full md:w-3/4 landscape:w-2/4 space-y-4",
    },
  },
  defaultVariants: {
    variant: "grid",
  },
});

interface OptionProps extends VariantProps<typeof optionsVariants> {
  optionsData: string[];
  imagesData: string[];
  onOptionSelect: (index: number) => void;
}
function Options({
  optionsData,
  imagesData,
  variant,
  onOptionSelect,
}: OptionProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
    onOptionSelect(index);

    console.log("Selected option:", index); // Adicione este console.log para ver a opção selecionada após a atualização
    console.log(selectedOption); //
  };

  return (
      
      <div className={optionsVariants({ variant })}>
      {optionsData.length == 2 && (
          <img className="w-auto h-auto max-w-44 m-4" src={`/questions-images/${imagesData}`} alt="Imagem da pergunta" />
      )}
        {optionsData.map((option, index) => (
          <Button
            key={index}
            variant="white"
            size="square"
            onClick={() => handleOptionClick(index)}
          >
            {imagesData.length > 0 && imagesData.length != 1 && (
              <img
                className="w-40 landscape:w-32 h-auto"
                src={`/questions-images/${imagesData[index]}`}
                alt={`Imagem da opção ${index + 1}`}
              />
            )}
            <p>{option}</p>
          </Button>
        ))}
      </div>
  );
}

export default Options;
