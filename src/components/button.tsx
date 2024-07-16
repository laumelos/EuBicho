import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "text-xl md:text-3xl ",
  variants: {
    variant: {
      purple: "bg-violet-900 text-zinc-50 hover:bg-violet-950",
      yellow: "bg-yellow-400 text-zinc-950 hover:bg-yellow-500",
      white: "bg-zinc-50 text-zinc-950 hover:bg-violet-100 selected:bg-violet-300",
    },
    size: {
      default: "w-full md:w-auto py-4 px-8 rounded-full md:px-12",
      square: "w-full h-full rounded-lg p-8",
    },
  },
  defaultVariants: {
    variant: "purple",
    size: "default",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant, size }) }>
      {children}
    </button>
  );
}

export default Button;
