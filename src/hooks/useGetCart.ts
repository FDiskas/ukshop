import useSWR from 'swr';

import { paths } from 'src/types/Api';

type ApiTypes = paths['/cart']['get'];
type Response = ApiTypes['responses']['200']['schema'];

export const useGetCart = (fallbackData?: Response) => {
    const { data, error } = useSWR<Response>(`/cart`, {
        fallbackData,
    });

    return {
        data,
        isLoading: !error && !data,
        error,
    };
};
