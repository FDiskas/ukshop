import { buildLink, buildQuery } from '../builder';

describe('buildQuery', () => {
    const testData = {
        foo: 'buzz',
    };

    it('returns query string from object', () => {
        expect(buildQuery({ foo: 'buzz' }).toString()).toEqual('/?foo=buzz');
    });

    it('possible to add new value to query', () => {
        const testQuery = buildQuery({ ...testData, buzz: 'foo' });

        expect(testQuery.toString()).toEqual('/?foo=buzz&buzz=foo');
    });
});

describe('buildLink', () => {
    it('returns nested link from object', () => {
        const testLink = '/foo/buzz/[id]';

        expect(buildLink(testLink, { id: 'test' })).toEqual('/foo/buzz/test');
    });
    it('returns nested link with query params from object', () => {
        const testLink = '/foo/buzz/[id]';

        expect(buildLink(testLink, { id: 'test', test: 'foo' })).toEqual('/foo/buzz/test?test=foo');
    });
});
