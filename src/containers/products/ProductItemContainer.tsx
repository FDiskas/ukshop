import * as React from 'react';

import Image from 'next/image';

import { definitions } from 'src/types/Api';
import { ButtonComponent } from 'src/components/button/ButtonComponent';
import { ProductPriceComponent } from 'src/components/product/ProductPriceComponent';

type Props = definitions['ItemDetail'];

export const ProductItemContainer: React.FC<Props> = ({ name, description, image, price }) => {
    return (
        <div className="flex md:flex-row flex-col px-5 gap-3">
            <div className="font-normal text-xl md:hidden">{name}</div>
            <div className="flex-1 overflow-hidden rounded-lg md:self-start">
                <Image src={image} width={600} height={400} objectFit="cover" layout="responsive" alt={name} />
            </div>

            <div className="flex-1 flex flex-col justify-between">
                <div className="font-normal text-xl hidden md:block">{name}</div>
                <div>
                    {description}
                    {description}
                    {description}
                    {description}
                </div>
                <ProductPriceComponent price={price} className="font-semibold text-2xl" />
                <div className="mt-6 sm:mt-0">
                    <ButtonComponent>Add to cart</ButtonComponent>
                </div>
            </div>
        </div>
    );
};
