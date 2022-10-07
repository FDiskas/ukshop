import * as React from 'react';

import { SWRConfig, SWRConfiguration } from 'swr';

import { fetcher } from 'src/libs/fetcher';

import type { AppProps } from 'next/app';
import '../../styles/globals.scss';

const swrOptions: SWRConfiguration = {
    fetcher,
    errorRetryCount: 3,
};

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SWRConfig value={swrOptions}>
            <Component {...pageProps} />
        </SWRConfig>
    );
}

export default MyApp;
