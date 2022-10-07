import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import HeartIcon from 'public/icons/heart.svg';

import { ProductPriceComponent } from 'src/components/product/ProductPriceComponent';
import { parameters } from 'src/parameters';
import { ButtonComponent } from 'src/components/button/ButtonComponent';

import styles from './ProductListItemComponent.module.scss';

export enum ProductListItemComponentVariant {
    Small,
    Large,
}

interface Props {
    name: string;
    image: string;
    price: number;
    id: number;
    variant?: ProductListItemComponentVariant;
    onAddToCart?: (itemId: number) => void;
}

export const ProductListItemComponent: React.FC<Props> = ({
    image,
    name,
    price,
    id,
    variant = ProductListItemComponentVariant.Small,
    onAddToCart,
}) => {
    const className =
        variant === ProductListItemComponentVariant.Small
            ? 'w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col'
            : 'w-full flex flex-col';

    const handleAddToCart = React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();
            event.preventDefault();

            if (onAddToCart) {
                onAddToCart(id);
            }
        },
        [id, onAddToCart]
    );

    return (
        <div className={className}>
            <Link href={{ pathname: parameters.pages.product, query: { id } }}>
                <a className={`hover:shadow-lg rounded p-5 justify-center block ${styles.productItem}`}>
                    <div className={`relative m-auto`}>
                        <div className="overflow-hidden rounded-lg">
                            <Image
                                src={image}
                                alt={name}
                                width={300}
                                height={300}
                                objectFit="cover"
                                layout="responsive"
                                className="hover:grow !block"
                            />
                        </div>
                        <div className={`absolute bottom-5 left-0 right-0 opacity-0 ${styles.productButton}`}>
                            <ButtonComponent onClick={handleAddToCart}>Add to cart</ButtonComponent>
                        </div>
                    </div>
                    <div className="pt-3 flex items-center justify-between">
                        <p className="">{name}</p>
                        <HeartIcon
                            className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                            width={24}
                            height={24}
                        />
                    </div>
                    <ProductPriceComponent price={price} />
                </a>
            </Link>
        </div>
    );
};
