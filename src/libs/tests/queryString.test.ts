import { buildQuery } from '../queryBuilder';

describe('buildQueryString', () => {
    const testData = {
        foo: 'buzz',
    };

    it('returns query string from object', () => {
        expect(buildQuery({ foo: 'buzz' }).toString()).toEqual('foo=buzz');
    });

    it('possible to add new value to query', () => {
        const testQuery = buildQuery(testData);

        testQuery.set('buzz', 'foo');

        expect(testQuery.toString()).toEqual('foo=buzz&buzz=foo');
    });
});
