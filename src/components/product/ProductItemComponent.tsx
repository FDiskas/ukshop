import * as React from 'react';

import Image from 'next/image';

import HeartIcon from 'public/icons/heart.svg';
import { ProductPriceComponent } from 'src/components/product/ProductPriceComponent';

interface Props {
    name: string;
    image: string;
    price: number;
}

export const ProductItemComponent: React.FC<Props> = ({ image, name, price }) => {
    return (
        <div className="w-full md:w-1/3 xl:w-1/4 flex flex-col m-5">
            <a href="#" className="hover:grow hover:shadow-lg p-5 justify-center flex-col flex">
                <Image src={image} alt={name} width={400} height={400} />
                <div className="pt-3 flex items-center justify-between">
                    <p className="">{name}</p>
                    <HeartIcon className="h-6 w-6 fill-current text-gray-500 hover:text-black" width={24} height={24} />
                </div>
                <ProductPriceComponent price={price} />
            </a>
        </div>
    );
};
