import * as React from 'react';

import Link from 'next/link';

import { ButtonComponent, ButtonComponentVariant } from 'src/components/button/ButtonComponent';
import { CartItemMenuComponent } from 'src/components/cart/CartItemMenuComponen';
import { useGetCart } from 'src/hooks/useGetCart';
import { parameters } from 'src/parameters';
import { definitions } from 'src/types/Api';

interface Props {
    data: definitions['CartItem'][];
}
export const CartQuickMenuComponent: React.FC<Props> = () => {
    const { data } = useGetCart();
    return (
        <div className="absolute right-0 top-16 bg-white border-solid border-slate-100 border-2 rounded-lg -mt-3 max-w-sm w-fit shadow-lg">
            <div className="max-h-48 snap-y overflow-y-auto">
                {data &&
                    data.map((cartItem) => (
                        <div className="snap-start" key={cartItem.item_id}>
                            <CartItemMenuComponent data={cartItem} />
                        </div>
                    ))}
            </div>
            <div className="p-6">
                <Link href={parameters.pages.cart}>
                    <ButtonComponent variant={ButtonComponentVariant.Primary} className="w-full">
                        Go to Checkout
                    </ButtonComponent>
                </Link>
            </div>
        </div>
    );
};
