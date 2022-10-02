import fetch from 'isomorphic-unfetch';

export const fetcher = async <T = any>(input: RequestInfo | URL, init?: RequestInit): Promise<T> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SHOP_API}${input}`, init);
    return res.json();
};
