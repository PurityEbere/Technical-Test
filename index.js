
function nth_most_rate_signatures(list, n) {
	const map = new Map();
	let result = 0

	list.forEach((num) => {
		if (map.has(num)) {
			let newVal = map.get(num) + 1
			map.set(num, newVal)
			return
		}

		map.set(num, 1)
	})

	map.forEach((val, key) => {
		if (n === val) {
			result = key
		}
	})

	return result
}

console.log(nth_most_rate_signatures([5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 1, 5], 5))