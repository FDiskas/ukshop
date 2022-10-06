import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { NumberInputComponent } from 'src/components/input/NumberInputComponent';
import { definitions } from 'src/types/Api';
import { ProductPriceComponent } from 'src/components/product/ProductPriceComponent';
import { parameters } from 'src/parameters';

type ItemId = definitions['CartItem']['item_id'];
type Quantity = definitions['CartItem']['quantity'];

interface Props {
    data: definitions['CartItem'];
    onChange?: (itemId: ItemId, value: Quantity) => void;
    onRemove?: (itemId: ItemId) => void;
}
export const CartItemComponent: React.FC<Props> = ({ data, onChange, onRemove }) => {
    const handleChange = React.useCallback(
        (value: Quantity) => {
            if (onChange && data.item_id) {
                onChange(data.item_id, value);
            }
        },
        [data.item_id, onChange]
    );

    const handleRemove = React.useCallback(() => {
        if (onRemove && data.item_id) {
            onRemove(data.item_id);
        }
    }, [data.item_id, onRemove]);

    return (
        <div className="flex flex-row items-center gap-5 border-b-2">
            <div className="hidden md:block">
                {data.image != null && (
                    <Image
                        src={data.image}
                        width={200}
                        height={150}
                        alt={data.name}
                        objectFit="contain"
                        className="rounded-md"
                    />
                )}
            </div>
            <div className="flex-1">
                <Link href={{ pathname: parameters.pages.product, query: { id: data.item_id?.toString() } }}>
                    <a>{data.name}</a>
                </Link>
            </div>
            <div className="w-24">
                <NumberInputComponent value={data.quantity} onChange={handleChange} />
            </div>
            <div className="w-24">
                <ProductPriceComponent price={data.price} />
            </div>
            <div>
                <button data-action="increment" className="h-10 w-10 rounded cursor-pointer" onClick={handleRemove}>
                    <span className="m-auto text-2xl font-thin">❌</span>
                </button>
            </div>
        </div>
    );
};
