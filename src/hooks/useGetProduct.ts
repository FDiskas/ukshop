import useSWR from 'swr';

import { paths } from 'src/types/Api';

type ApiTypes = paths['/items/{id}/']['get'];
type ApiParams = ApiTypes['parameters']['path'];
type Response = ApiTypes['responses']['200']['schema'];

export const useGetProduct = (params: ApiParams, fallbackData?: Response) => {
    const { data, error } = useSWR<Response>(`/items/${params.id}`, {
        fallbackData,
    });

    return {
        data,
        isLoading: !error && !data,
        error,
    };
};
