import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/tw-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-gray-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 duration-300 ease-in-out",
  {
    variants: {
      variant: {
        blue: "bg-blue-400 text-gray-0 hover:bg-blue-400/90 hover:bg-gray-0 hover:text-blue-400 hover:outline hover:outline-blue-400 hover:outline-1", 
        "blue-outline": "outline outline-1 bg-gray-0 text-blue-400 hover:bg-blue-400 hover:text-gray-0",
        black: "bg-gray-900 text-gray-0 hover:bg-gray-0 hover:text-gray-900 hover:outline hover:outline-1",
        "black-outline": "outline outline-1 bg-gray-0 text-gray-900 hover:bg-gray-900 hover:text-gray-0",
        "white-outline": "outline outline-1 text-gray-900 bg-gray-900 text-gray-0 hover:border hover:border-gray-0 hover:bg-gray-0 hover:text-gray-900",
        destructive: "bg-red-200 text-gray-0 hover:bg-gray-200/90",
        secondary: "bg-gray-900 text-gray-0 hover:bg-gray-900/80",
        link: "text-gray-900 underline-offset-4 hover:underline ",
      },
      size: {
        default: "h-[2.75rem] px-5 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "blue",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))} 
        ref={ref}
        {...props}
        disabled={loading} 
      >
        {loading ? (
          <>
            {children}
            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

// export { Button, buttonVariants };
export default Button;