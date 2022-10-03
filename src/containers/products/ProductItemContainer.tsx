import * as React from 'react';

import Image from 'next/image';

import { definitions } from 'src/types/Api';
import { ButtonComponent } from 'src/components/button/ButtonComponent';
import { ProductPriceComponent } from 'src/components/product/ProductPriceComponent';

type Props = definitions['ItemDetail'];

export const ProductItemContainer: React.FC<Props> = ({ name, description, image, price }) => {
    return (
        <div className="md:flex flex-row">
            <div className="flex-1">
                <Image src={image} width={600} height={400} objectFit="cover" layout="responsive" alt={name} />
            </div>

            <div className="mx-5 flex-1 flex flex-col justify-between">
                <div className="font-normal text-xl">{name}</div>
                <div>{description}</div>
                <ProductPriceComponent price={price} className="font-semibold text-2xl" />
                <div className="">
                    <ButtonComponent>Add to cart</ButtonComponent>
                </div>
            </div>
        </div>
    );
};
