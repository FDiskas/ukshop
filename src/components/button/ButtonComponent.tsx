import * as React from 'react';

export enum ButtonComponentVariant {
    Primary,
    Secondary,
}
interface Props {
    onClick?: () => void;
    variant?: 'primary';
    children?: React.ReactNode;
}
export const ButtonComponent: React.FC<Props> = ({ children }) => {
    return (
        <button className="w-1/2 max-w-sm mx-auto flex items-center justify-center bg-brand outline-none hover:opacity-90 text-white font-extrabold py-3 px-5 rounded shadow-lg">
            {children}
        </button>
    );
};
