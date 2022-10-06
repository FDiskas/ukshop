import fetch from 'isomorphic-unfetch';
import { IncomingMessage } from 'node:http';

import { absoluteUrl } from 'src/libs/origin';

export const fetcher = async <T = any>(
    input: RequestInfo | URL,
    init?: RequestInit,
    request?: IncomingMessage
): Promise<T> => {
    const { origin } = absoluteUrl(request);

    return fetch(`${origin}${input}`, {
        ...init,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.text())
        .then((data) => (data ? JSON.parse(data) : {}));
};
