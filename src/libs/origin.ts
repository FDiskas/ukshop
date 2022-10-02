import { IncomingMessage } from 'http';

export function absoluteUrl(req?: IncomingMessage, setLocalhost = 'localhost:3000') {
    let protocol = 'https';
    let host = req ? req.headers['x-forwarded-host'] || req.headers.host : window.location.host;

    if (host?.includes('localhost')) {
        if (setLocalhost) host = setLocalhost;
        protocol = 'http';
    }

    return {
        protocol,
        host,
        origin: `${protocol}://${host}`,
    };
}
