import '../../styles/globals.scss';
import { SWRConfig, SWRConfiguration } from 'swr';

import { fetcher } from 'src/libs/fetcher';

import type { AppProps } from 'next/app';

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
