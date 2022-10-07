import { EmptyLayout } from 'src/layouts/EmptyLaout';
import { CartContainer } from 'src/containers/cart/CartContainer';
import { buildLink } from 'src/libs/builder';
import { parameters } from 'src/parameters';
import { definitions } from 'src/types/Api';
import { fetcher } from 'src/libs/fetcher';

import type { GetServerSideProps, NextPage } from 'next';

interface PageProps {
    fallbackData: definitions['CartItem'][];
}

const Cart: NextPage<PageProps> = ({ fallbackData }) => {
    return (
        <EmptyLayout>
            <CartContainer data={fallbackData} />
        </EmptyLayout>
    );
};

export const getServerSideProps: GetServerSideProps<PageProps> = async ({ req }) => {
    const apiEndpoint = buildLink(parameters.api.endpoints['cart.get']);

    try {
        const data = await fetcher<definitions['CartItem'][]>(apiEndpoint, undefined, req);
        return { props: { fallbackData: data } };
    } catch {
        return {
            notFound: true,
        };
    }
};

export default Cart;
