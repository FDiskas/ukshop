import { resolveHref } from 'next/dist/shared/lib/router/router';
import { default as Router } from 'next/router';
import { Url } from 'node:url';

export type URLSearchParamsType =
    | string
    | string[][]
    | Record<string | number, string | number | boolean | (string | number | boolean)[] | undefined>
    | undefined;

export const buildQuery = (query: Url['query']) => {
    const apiEndpoint = {
        query,
    };
    const [resolvedAs] = resolveHref(Router, apiEndpoint, true);

    return resolvedAs;
};

export const buildLink = (link: string, query: Url['query']) => {
    const apiEndpoint = {
        pathname: link,
        query,
    };
    const [, resolvedAs] = resolveHref(Router, apiEndpoint, true);

    return resolvedAs;
};
