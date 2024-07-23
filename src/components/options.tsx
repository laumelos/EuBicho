import { useState } from "react";
import { tv, VariantProps } from "tailwind-variants";
import Button from "./button"; // Certifique-se de que o caminho está correto

const optionsVariants = tv({
  base: "w-2/4",
  variants: {
    variant: {
      grid: "grid grid-cols-2 gap-4 md:gap-8 w-full md:w-3/4 mdLandscape:w-2/4 flex-1 smallLandscape:grid-cols-4 smallLandscape:w-3/4",
      column:
        "flex flex-col items-center w-full md:w-3/4 mdLandscape:w-2/4 space-y-4 ",
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
  variant: "grid" | "column";
  selectedButtonOption: number | null;
  setSelectedButtonOption: (index: number) => void;
}

function Options({
  optionsData,
  imagesData,
  variant,
  onOptionSelect,
  selectedButtonOption,
  setSelectedButtonOption,
}: OptionProps) {
  const controlButtonOptionClick = (index: number) => {
    setSelectedButtonOption(index);
    onOptionSelect(index);
  };

  return (
    <div className={optionsVariants({ variant })}>
      {/* Mostra a imagem da pergunta apenas quando há exatamente 2 opções */}
      {optionsData.length === 2 && (
        <img
          className="w-auto h-auto max-w-44 m-4 smallLandscape:max-h-32"
          src={`/questions-images/${imagesData[0]}`} // Ajuste o índice conforme necessário
          alt="Imagem da pergunta"
        />
      )}
      {optionsData.map((option, index) => (
        <Button
          key={index}
          variant="white"
          selected={selectedButtonOption === index ? "selected" : "default"} // Ajuste a variante com base na seleção
          size="square"
          onClick={() => controlButtonOptionClick(index)}
        >
          {imagesData.length > 0 && optionsData.length !== 2 &&(
            <img
              className="w-40 mdLandscape:w-32 h-auto smallPortrait:max-h-24 max-h-32 md:max-h-52 landscape:max-h-40"
              src={`/questions-images/${imagesData[index]}`}
              alt={`Imagem da opção ${index + 1}`}
            />
          )}
          {{optionsData} && <p>{option}</p>}
          
        </Button>
      ))}
    </div>
  );
}

export default Options;
