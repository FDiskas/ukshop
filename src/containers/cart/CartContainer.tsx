import * as React from 'react';

import { CartItemComponent } from 'src/components/cart/CartItemComponent';
import { buildLink } from 'src/libs/builder';
import { fetcher } from 'src/libs/fetcher';
import { parameters } from 'src/parameters';
import { definitions } from 'src/types/Api';

type ItemId = definitions['CartItem']['item_id'];
type Quantity = definitions['CartItem']['quantity'];

interface Props {
    data: definitions['CartItem'][];
}

export const CartContainer: React.FC<Props> = ({ data }) => {
    const handleRemove = React.useCallback((itemId: ItemId) => {
        fetcher(buildLink(parameters.api.endpoints['cart.item.delete'], { itemId: itemId?.toString() }), {
            method: 'delete',
        });
    }, []);

    const handleChange = React.useCallback((itemId: ItemId, quantity: Quantity) => {
        fetcher(
            buildLink(parameters.api.endpoints['cart.item.update'], {
                itemId: itemId?.toString(),
                quantity: quantity?.toString(),
            }),
            {
                method: 'put',
            }
        );
    }, []);

    return (
        <div className="container py-8 px-6 mx-auto font-normal">
            <div className="flex flex-row items-center gap-5 border-b-2 mb-3">
                <div className="w-44 hidden md:block">Image</div>
                <div className="flex-1">Name</div>
                <div className="w-16">Quantity</div>
                <div className="w-24">Price</div>
                <div>Remove</div>
            </div>
            <div className="font-light">
                {data.map((item) => (
                    <CartItemComponent key={item.item_id} data={item} onRemove={handleRemove} onChange={handleChange} />
                ))}
            </div>
            <div className="">Total</div>
        </div>
    );
};
