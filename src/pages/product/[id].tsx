import { EmptyLayout } from 'src/layouts/EmptyLaout';
import { definitions } from 'src/types/Api';
import { ProductItemContainer } from 'src/containers/products/ProductItemContainer';
import { fetcher } from 'src/libs/fetcher';
import { useGetProduct } from 'src/hooks/useGetProduct';

import type { GetServerSideProps, NextPage } from 'next';

interface PageProps {
    fallbackData: definitions['ItemDetail'];
    id: number;
}

const Product: NextPage<PageProps> = ({ fallbackData, id }) => {
    const { data } = useGetProduct({ id }, fallbackData);

    return (
        <EmptyLayout>
            {data && (
                <ProductItemContainer
                    id={data.id}
                    name={data.name}
                    description={data.description}
                    image={data.image}
                    price={data.price}
                />
            )}
        </EmptyLayout>
    );
};

type PageParams = {
    id: string;
};

export const getServerSideProps: GetServerSideProps<PageProps, PageParams> = async ({ params }) => {
    const id = parseInt(params?.id ?? '0');

    const data = await fetcher<definitions['ItemDetail']>(`/items/${id}`);
    return { props: { fallbackData: data, id } };
};

export default Product;
