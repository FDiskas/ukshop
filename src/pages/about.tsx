import { AboutContainer } from 'src/containers/about/AboutContainer';
import { EmptyLayout } from 'src/layouts/EmptyLaout';

import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <EmptyLayout>
            <AboutContainer />
        </EmptyLayout>
    );
};

export default Home;
