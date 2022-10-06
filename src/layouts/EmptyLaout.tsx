import * as React from 'react';

import { HeaderComponent } from 'src/components/header/HeaderComponent';
import { FooterComponent } from 'src/components/footer/FooterComponent';

interface Props {
    children?: React.ReactNode;
}

export const EmptyLayout: React.FC<Props> = ({ children }) => {
    return (
        <React.Fragment>
            <HeaderComponent />

            <section className="py-8 mt-16 md:mt-0">{children}</section>

            <FooterComponent />
        </React.Fragment>
    );
};
