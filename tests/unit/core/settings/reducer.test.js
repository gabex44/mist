import reducer, { initialState } from '../../../../modules/core/settings/reducer';
import { assert } from 'chai';

describe('the settings reducer', () => {
    it('should return a default initial state', () => {
        assert.deepEqual(reducer(undefined, {}), initialState);
    });

    it('should return a default initial state', () => {
        // assert.
    });
});
