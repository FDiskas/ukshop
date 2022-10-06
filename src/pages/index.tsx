import type { GetServerSideProps, NextPage } from 'next';

import { ProductListContainer } from 'src/containers/products/ProductListContainer';
import { useGetProducts } from 'src/hooks/useGetProducts';
import { MainLayout } from 'src/layouts/MainLayout';
import { buildLink } from 'src/libs/builder';
import { fetcher } from 'src/libs/fetcher';
import { parameters } from 'src/parameters';
import { definitions } from 'src/types/Api';

interface PageProps {
    fallbackData: definitions['Item'][];
}

export const Home: NextPage<PageProps> = ({ fallbackData }) => {
    const { data, isLoading } = useGetProducts(fallbackData);
    return (
        <MainLayout>
            {isLoading && <div>Loading...s</div>}
            {data && data?.length > 0 && <ProductListContainer data={data} />}
        </MainLayout>
    );
};

export const getServerSideProps: GetServerSideProps<PageProps> = async ({ req, res }) => {
    const apiEndpoint = buildLink(parameters.api.endpoints['product.items']);

    res.setHeader('Cache-Control', 'public, s-maxage=43200, stale-while-revalidate=60');

    try {
        const data = await fetcher<definitions['Item'][]>(apiEndpoint, undefined, req);
        return { props: { fallbackData: data } };
    } catch {
        return {
            notFound: true,
        };
    }
};

export default Home;
