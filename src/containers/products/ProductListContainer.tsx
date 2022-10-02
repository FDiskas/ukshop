import { ProductItemComponent } from 'src/components/product/ProductItemComponent';

const demoData = [
    {
        id: 53,
        price: 321.23,
        name: 'Widget Adapter',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    },
    {
        id: 54,
        price: 399.99,
        name: 'Cup of Mud',
        image: 'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
    },
];

export const ProductListContainer = () => {
    return (
        <>
            {demoData.map((product) => (
                <ProductItemComponent
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    key={product.id}
                />
            ))}
        </>
    );
};
