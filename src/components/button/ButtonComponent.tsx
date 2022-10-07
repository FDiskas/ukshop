import * as React from 'react';

export enum ButtonComponentVariant {
    Primary,
    Secondary,
}
interface Props {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: ButtonComponentVariant;
    children?: React.ReactNode;
    className?: React.HTMLAttributes<HTMLButtonElement>['className'];
}
export const ButtonComponent: React.FC<Props> = React.forwardRef(
    ({ children, className, onClick }, ref: React.ForwardedRef<HTMLButtonElement>) => {
        return (
            <button
                ref={ref}
                onClick={onClick}
                className={`max-w-sm mx-auto flex items-center justify-center bg-brand outline-none hover:opacity-90 text-white font-extrabold py-3 px-5 rounded shadow-lg ${className}`}
            >
                {children}
            </button>
        );
    }
);

ButtonComponent.displayName = 'ButtonComponent';
