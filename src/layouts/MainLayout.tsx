import * as React from 'react';

import { HeaderComponent } from 'src/components/header/HeaderComponent';
import { FooterComponent } from 'src/components/footer/FooterComponent';
import { ProductFiltersContainer } from 'src/containers/filters/ProductFiltersContainer';

interface Props {
    children?: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <React.Fragment>
            <HeaderComponent />

            <section className="bg-white py-8">
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                    <ProductFiltersContainer />
                    {children}
                </div>
            </section>

            <section className="container py-8 px-6 mx-auto">
                <div>
                    Today we are going to add the ability to create new products in our store. For each product a
                    human-readable name is required, and an image to illustrate the product. Below is a list of already
                    existing products
                </div>
            </section>

            <FooterComponent />
        </React.Fragment>
    );
};
