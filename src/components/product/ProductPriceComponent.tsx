import * as React from 'react';

interface Props {
    price?: number;
    className?: string;
}

export const ProductPriceComponent: React.FC<Props> = ({ price, className }) => {
    if (!price) {
        return null;
    }

    return <p className={`pt-1 text-gray-900 ${className}`}>€{price}</p>;
};
