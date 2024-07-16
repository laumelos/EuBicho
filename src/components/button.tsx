import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "md:px-12 text-xl md:text-3xl ",
  variants: {
    variant: {
      primary: "bg-violet-900 text-zinc-50 hover:bg-violet-950",
      secondary: "bg-yellow-400 text-zinc-950 w-full md:w-auto hover:bg-yellow-450",
    },
    size: {
      default: "w-full md:w-auto py-4 px-8 rounded-full",
      square: "w-24 h-24 rounded-sm",
    },
  },
  defaultVariants: {
    variant: "primary",
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
