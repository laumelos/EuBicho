import { useState } from "react";
import { tv, VariantProps } from "tailwind-variants";
import Button from "./button";

const optionsVariants = tv({
  base: "w-2/4",
  variants: {
    variant: {
      grid: "grid grid-cols-2 gap-8 w-2/4 flex-1",
      column: "flex flex-col gap-8 w-2/4 flex-1",
    },
  },
  defaultVariants: {
    variant: "grid",
  },
});

interface OptionProps extends VariantProps<typeof optionsVariants> {
  optionsData: string[];
}

function Options({ optionsData, variant }: OptionProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
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
          <p className="text-xl">{option}</p>
        </Button>
      ))}
    </div>
  );
}

export default Options;
