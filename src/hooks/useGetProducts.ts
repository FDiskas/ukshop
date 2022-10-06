import useSWR from 'swr';

import { paths } from 'src/types/Api';
import { buildLink } from 'src/libs/builder';
import { parameters } from 'src/parameters';

type ApiTypes = paths['/items']['get'];
type Response = ApiTypes['responses']['200']['schema'];

export const useGetProducts = (fallbackData?: Response) => {
    const apiEndpoint = buildLink(parameters.api.endpoints['product.items']);
    const { data, error } = useSWR<Response>(apiEndpoint, {
        fallbackData,
    });

    return {
        data,
        isLoading: !error && !data,
        error,
    };
};
