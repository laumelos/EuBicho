import { useState } from "react";
import { tv, VariantProps } from "tailwind-variants";
import Button from "./button";

const optionsVariants = tv({
  base: "w-2/4",
  variants: {
    variant: {
      grid: "grid grid-cols-2 gap-4 md:gap-8 w-full md:w-3/4 lg:w-2/4 flex-1",
      column: "flex flex-col gap-8 w-2/4 flex-1",
    },
  },
  defaultVariants: {
    variant: "grid",
  },
});

interface OptionProps extends VariantProps<typeof optionsVariants> {
  optionsData: string[];
  currentQuestion: number;
  onOptionSelect: (index: number) => void;
}
function Options({ optionsData, variant, currentQuestion, onOptionSelect }: OptionProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
    onOptionSelect(index);

    console.log("Selected option:", index); // Adicione este console.log para ver a opção selecionada após a atualização
    console.log(selectedOption); //
  };

  return (
    <div className={optionsVariants({ variant })}>
      {optionsData.map((option, index) => (
        <Button
          key={index}
          variant="white"
          size="square"
          onClick={() => handleOptionClick(index)}
        >
          <img src={"/questions-images/Q"+ (currentQuestion + 1) +"O" + (index + 1) +".png"} alt="" />
          <p className="text-xl">{option}</p>
          <p></p>
        </Button>
      ))}
    </div>
  );
}

export default Options;
