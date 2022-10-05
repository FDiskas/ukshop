import type { NextPage } from 'next';

import { AboutContainer } from 'src/containers/about/AboutContainer';
import { EmptyLayout } from 'src/layouts/EmptyLaout';

const About: NextPage = () => {
    return (
        <EmptyLayout>
            <AboutContainer />
        </EmptyLayout>
    );
};

export default About;
