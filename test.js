import test from 'ava';
import binCheck from 'bin-check';
import java from './';

test('returns path to binary and verify that it is working', async t => {
	t.true(await binCheck(java, ['-version']));
});
