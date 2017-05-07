const assert = require('assert');
const stvl = require('../');

describe('STVL', () => {
	let fallbackValue = 'A fallback string.';

	it('should return `value` when `value` is String.', () => {
		assert.strictEqual(stvl('A', fallbackValue), 'A');
		assert.strictEqual(stvl(`B`, fallbackValue), `B`);
	});
	it('should return `fallbackValue` when `value` is not String.', () => {
		assert.strictEqual(stvl(null, fallbackValue), fallbackValue);
		assert.strictEqual(stvl({ a: 1, b: 2, c: 3 }, fallbackValue), fallbackValue);
		assert.strictEqual(stvl(0, fallbackValue), fallbackValue);
		assert.strictEqual(stvl(Symbol(), fallbackValue), fallbackValue);
	});
});
