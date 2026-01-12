import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-full text-sm font-semibold relative overflow-hidden transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'bg-black text-white hover:bg-[var(--secondary)] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]',
                destructive: 'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]',
                outline: 'border-2 border-black bg-white text-black hover:bg-black hover:text-white shadow-sm hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]',
                secondary: 'bg-gray-100 text-black hover:bg-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]',
                ghost: 'hover:bg-gray-100 hover:text-black hover:scale-[1.02] active:scale-[0.98]',
                link: 'text-black underline-offset-4 hover:underline hover:text-[var(--secondary)]',
            },
            size: {
                default: 'h-11 px-6 py-2 text-sm',
                sm: 'h-9 px-4 text-sm',
                lg: 'h-12 px-8 text-base',
                icon: 'h-11 w-11',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button, buttonVariants }; 