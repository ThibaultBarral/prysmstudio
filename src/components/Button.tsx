import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-full text-sm font-medium relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 before:absolute before:inset-0 before:transition-all before:duration-700 before:ease-[cubic-bezier(0.16,1,0.3,1)] before:content-[""] after:absolute after:inset-0 after:transition-all after:duration-700 after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[""]',
    {
        variants: {
            variant: {
                default: 'bg-[var(--foreground)] text-[var(--background)] before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-200%] hover:before:translate-x-[200%] after:bg-gradient-to-b after:from-white/0 after:via-white/10 after:to-white/0 after:translate-y-[-200%] hover:after:translate-y-[200%] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1)] hover:translate-y-[-2px] active:translate-y-[1px] active:shadow-none',
                destructive: 'bg-red-600 text-white before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-200%] hover:before:translate-x-[200%] after:bg-gradient-to-b after:from-white/0 after:via-white/10 after:to-white/0 after:translate-y-[-200%] hover:after:translate-y-[200%] hover:shadow-[0_0_0_1px_rgba(255,0,0,0.1),0_4px_8px_rgba(255,0,0,0.1),0_8px_16px_rgba(255,0,0,0.1)] hover:translate-y-[-2px] active:translate-y-[1px] active:shadow-none',
                outline: 'border border-[var(--border)] bg-[var(--background)] before:bg-gradient-to-r before:from-[var(--foreground)]/0 before:via-[var(--foreground)]/10 before:to-[var(--foreground)]/0 before:translate-x-[-200%] hover:before:translate-x-[200%] after:bg-gradient-to-b after:from-[var(--foreground)]/0 after:via-[var(--foreground)]/5 after:to-[var(--foreground)]/0 after:translate-y-[-200%] hover:after:translate-y-[200%] hover:bg-[var(--muted)]/50 hover:border-[var(--foreground)]/20 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_4px_8px_rgba(0,0,0,0.05),0_8px_16px_rgba(0,0,0,0.05)] hover:translate-y-[-2px] active:translate-y-[1px] active:shadow-none',
                secondary: 'bg-[var(--muted)]/50 text-[var(--foreground)] before:bg-gradient-to-r before:from-[var(--foreground)]/0 before:via-[var(--foreground)]/10 before:to-[var(--foreground)]/0 before:translate-x-[-200%] hover:before:translate-x-[200%] after:bg-gradient-to-b after:from-[var(--foreground)]/0 after:via-[var(--foreground)]/5 after:to-[var(--foreground)]/0 after:translate-y-[-200%] hover:after:translate-y-[200%] hover:bg-[var(--muted)]/70 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_4px_8px_rgba(0,0,0,0.05),0_8px_16px_rgba(0,0,0,0.05)] hover:translate-y-[-2px] active:translate-y-[1px] active:shadow-none',
                ghost: 'hover:bg-[var(--muted)]/30 hover:text-[var(--foreground)] before:bg-gradient-to-r before:from-[var(--foreground)]/0 before:via-[var(--foreground)]/10 before:to-[var(--foreground)]/0 before:translate-x-[-200%] hover:before:translate-x-[200%] after:bg-gradient-to-b after:from-[var(--foreground)]/0 after:via-[var(--foreground)]/5 after:to-[var(--foreground)]/0 after:translate-y-[-200%] hover:after:translate-y-[200%] hover:translate-y-[-2px] active:translate-y-[1px]',
                link: 'text-[var(--foreground)] underline-offset-4 hover:underline before:bg-gradient-to-r before:from-[var(--foreground)]/0 before:via-[var(--foreground)]/10 before:to-[var(--foreground)]/0 before:translate-x-[-200%] hover:before:translate-x-[200%] after:bg-gradient-to-b after:from-[var(--foreground)]/0 after:via-[var(--foreground)]/5 after:to-[var(--foreground)]/0 after:translate-y-[-200%] hover:after:translate-y-[200%] hover:translate-y-[-2px] active:translate-y-[1px]',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 px-3',
                lg: 'h-11 px-8',
                icon: 'h-10 w-10',
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