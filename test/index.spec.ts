import sort from '../src/index'

describe('sort', () => {
	it('Should return an empty array if input array is empty', () => {
		const res = sort([]);
		expect(res).toHaveLength(0);
	})

	it('Should return the same array if it only has one element', () => {
		const arr = [500];
		const res = sort(arr);
		expect(res).toEqual(arr);
	})

	it('Should put even numbers first, then odd numbers', () => {
		const res = sort([1,2,3,4,5,6,7,8,9]);
		expect(res.slice(0, 4).sort()).toEqual([2,4,6,8]);
		expect(res.slice(4).sort()).toEqual([1,3,5,7,9]);
	})
})
