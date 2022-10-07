import * as React from 'react';

import { useSWRConfig } from 'swr';

import { ProductListItemComponent } from 'src/components/product/ProductListItemComponent';
import { buildLink } from 'src/libs/builder';
import { fetcher } from 'src/libs/fetcher';
import { parameters } from 'src/parameters';
import { definitions, operations } from 'src/types/Api';

interface Props {
    data: definitions['Item'][];
}

export const ProductListContainer: React.FC<Props> = ({ data }) => {
    const { mutate } = useSWRConfig();
    const handleAddToCart = React.useCallback(
        (id: number) => {
            const data: operations['addItem']['parameters']['query'] = {
                id,
                quantity: 1,
            };
            fetcher(buildLink(parameters.api.endpoints['cart.item.add']), {
                method: 'POST',
                body: JSON.stringify(data),
            }).then(() => {
                document.getElementById('cart-toggle')?.focus();
                mutate(parameters.api.endpoints['cart.get']);
            });
        },
        [mutate]
    );
    return (
        <div className="mx-auto flex items-center flex-wrap pt-4 pb-12">
            {data.map((product) => (
                <ProductListItemComponent
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    id={product.id}
                    key={product.id}
                    onAddToCart={handleAddToCart}
                />
            ))}
        </div>
    );
};
