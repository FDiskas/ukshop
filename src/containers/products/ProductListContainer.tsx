import { ProductListItemComponent } from 'src/components/product/ProductListItemComponent';
import { definitions } from 'src/types/Api';

interface Props {
    data: definitions['Item'][];
}

export const ProductListContainer: React.FC<Props> = ({ data }) => {
    return (
        <div className="mx-auto flex items-center flex-wrap pt-4 pb-12">
            {data.map((product) => (
                <ProductListItemComponent
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    id={product.id}
                    key={product.id}
                />
            ))}
        </div>
    );
};
