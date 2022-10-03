import useSWR from 'swr';

import { paths } from 'src/types/Api';
import { buildLink } from 'src/libs/builder';
import { parameters } from 'src/parameters';

type ApiTypes = paths['/items/{id}/']['get'];
type ApiParams = ApiTypes['parameters']['path'];
type Response = ApiTypes['responses']['200']['schema'];

export const useGetProduct = (params: ApiParams, fallbackData?: Response) => {
    const apiEndpoint = buildLink(parameters.api.endpoints['product.item'], { id: params.id.toString() });
    const { data, error } = useSWR<Response>(apiEndpoint, {
        fallbackData,
    });

    return {
        data,
        isLoading: !error && !data,
        error,
    };
};
