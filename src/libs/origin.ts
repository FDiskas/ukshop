import { IncomingMessage } from 'http';

export function absoluteUrl(req?: IncomingMessage, setLocalhost = 'localhost:3000') {
    let protocol = 'https';
    let host = req ? req.headers['x-forwarded-host'] || req.headers.host : window.location.host;

    if (isLocalNetwork(host?.toString())) {
        if (setLocalhost) host = setLocalhost;
        protocol = 'http';
    }

    return {
        protocol,
        host,
        origin: `${protocol}://${host}`,
    };
}

function isLocalNetwork(hostname = window.location.hostname) {
    return (
        hostname.startsWith('localhost') ||
        hostname.startsWith('127.0.0.1') ||
        hostname.startsWith('192.168.') ||
        hostname.startsWith('10.0.') ||
        hostname.endsWith('.local')
    );
}
