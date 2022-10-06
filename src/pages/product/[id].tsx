import type { GetServerSideProps, NextPage } from 'next';

import { EmptyLayout } from 'src/layouts/EmptyLaout';
import { definitions } from 'src/types/Api';
import { ProductItemContainer } from 'src/containers/products/ProductItemContainer';
import { fetcher } from 'src/libs/fetcher';
import { useGetProduct } from 'src/hooks/useGetProduct';
import { parameters } from 'src/parameters';
import { buildLink } from 'src/libs/builder';

interface PageProps {
    fallbackData: definitions['ItemDetail'];
    id: number;
}

const Product: NextPage<PageProps> = ({ fallbackData, id }) => {
    const { data } = useGetProduct({ id }, fallbackData);

    return (
        <EmptyLayout>
            <div className="container flex px-3 py-8 mx-auto justify-center">
                {data && (
                    <ProductItemContainer
                        id={data.id}
                        name={data.name}
                        description={data.description}
                        image={data.image}
                        price={data.price}
                    />
                )}
            </div>
        </EmptyLayout>
    );
};

type PageParams = {
    id: string;
};

export const getServerSideProps: GetServerSideProps<PageProps, PageParams> = async ({ params, req }) => {
    const id = parseInt(params?.id ?? '0');

    if (isNaN(id)) {
        return {
            notFound: true,
        };
    }

    const apiEndpoint = buildLink(parameters.api.endpoints['product.item'], { id: id.toString() });

    try {
        const data = await fetcher<definitions['ItemDetail']>(apiEndpoint, undefined, req);
        return { props: { fallbackData: data, id } };
    } catch {
        return {
            notFound: true,
        };
    }
};

export default Product;
