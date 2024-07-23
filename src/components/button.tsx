import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "  flex flex-col items-center justify-center md:space-y-2 box-border",
  variants: {
    variant: {
      purple: "bg-violet-900 text-zinc-50 hover:bg-violet-950",
      yellow: "bg-yellow-400 text-zinc-950 hover:bg-yellow-500",
      white: "bg-zinc-50 text-zinc-950 hover:bg-violet-100",
    },
    size: {
      default:
        "text-xl md:text-3xl w-full md:w-auto py-4 px-8 rounded-full md:px-12 font-medium",
      square:
        "text-base md:text-xl w-full h-auto lg:h-full rounded-xl p-4 space-y-2 border-solid border-4 border-violet-900 smallLandscape:text-md smallLandscape:p-2",
    },
    selected: {
      default: "",
      selected: "bg-violet-200",
    },
  },
  defaultVariants: {
    variant: "purple",
    size: "default",
    state: "default",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

function Button({ children, variant, size, selected, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={buttonVariants({ variant, size, selected })}
    >
      {children}
    </button>
  );
}

export default Button;
