import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { definitions } from 'src/types/Api';
import { ProductPriceComponent } from 'src/components/product/ProductPriceComponent';
import { parameters } from 'src/parameters';

interface Props {
    data: definitions['CartItem'];
}
export const CartItemMenuComponent: React.FC<Props> = ({ data }) => {
    return (
        <div className="flex flex-row items-center gap-3 border-b p-6">
            <div className="hidden md:block">
                {data.image != null && (
                    <Image
                        src={data.image}
                        width={60}
                        height={80}
                        alt={data.name}
                        objectFit="cover"
                        className="rounded-md"
                    />
                )}
            </div>
            <div className="flex-1">
                <Link href={{ pathname: parameters.pages.product, query: { id: data.item_id?.toString() } }}>
                    <a>{data.name}</a>
                </Link>
                <div className="flex-1 flex-nowrap">
                    {data.quantity} x <ProductPriceComponent price={data.price} />
                </div>
            </div>
        </div>
    );
};
