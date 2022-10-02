import * as React from 'react';

import { definitions } from 'src/types/Api';

type Props = definitions['ItemDetail'];

export const ProductItemContainer: React.FC<Props> = ({ id, name, description, image, price }) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>Name {name}</div>
            <div>Description {description}</div>
            <div>Image {image}</div>
            <div>Price {price}</div>
        </div>
    );
};
