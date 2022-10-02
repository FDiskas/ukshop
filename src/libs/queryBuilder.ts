export type URLSearchParamsType =
    | string
    | string[][]
    | Record<string | number, string | number | boolean | (string | number | boolean)[] | undefined>
    | undefined;

export const buildQuery = <T extends URLSearchParamsType>(params: T) => {
    if (typeof params === 'object') {
        const query = new URLSearchParams();

        for (const [key, value] of Object.entries(params)) {
            if (Array.isArray(value)) {
                value.map((v) => query.append(key, v.toString()));
            } else if (typeof value !== 'undefined' && value !== false) {
                query.append(key.toString(), value.toString());
            }
        }

        return query;
    }
    if (typeof params === 'string') {
        return new URLSearchParams(params.split(/[#?]/)[1]);
    }

    return new URLSearchParams(params);
};
