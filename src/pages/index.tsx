import type { NextPage } from 'next';

import { ProductListContainer } from 'src/containers/products/ProductListContainer';
import { MainLayout } from 'src/layouts/MainLayout';

export const Home: NextPage = () => {
    return (
        <MainLayout>
            <ProductListContainer />
        </MainLayout>
    );
};

export default Home;
