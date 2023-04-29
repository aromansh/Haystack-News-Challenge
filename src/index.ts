/**
 * Sorts an array of integers, by placing even numbers first.
 *
 * It will go through the array from it's both sides, swapping numbers
 * if they are found out of place. It will go through the array only once,
 * ensuring O(n).
 */
export default function sort(arr: number[]): number[] {
	if(arr.length <= 1) return arr;

	// Search odd numbers from the left
	for(let left = 0, right = arr.length - 1; left < right; ++left){
		if(isEven(arr[left])) continue;

		// Search even number from the right, from the last position known
		for(let i = right; i > left; --i){
			if(isEven(arr[i])) {
				let tmp = arr[i];
				arr[i] = arr[left];
				arr[left] = tmp;

				// Update last position known
				right = --i;

				break;
			}
		}
	}	

	return arr;
}

function isEven(num: number): boolean {
	return num % 2 === 0
}
