import { MainLayout } from '../layouts/MainLayout';
import { ProductListContainer } from 'src/containers/products/ProductListContainer';

import type { NextPage } from 'next';

export const Home: NextPage = () => {
    return (
        <MainLayout>
            <ProductListContainer />
        </MainLayout>
    );
};

export default Home;
