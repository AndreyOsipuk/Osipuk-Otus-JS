import { writable, readable } from 'svelte/store';

export const data = writable([
    {
        date: 'aaa',
        category: 1,
        value: 100
    },
]);

export const category = readable([
    'transport',
    'food',
    'housing',
    'healthcare',
    'clothing'
]);



export const add = (obj) => {
    data.update(n => {
        n.push(obj)
        return n
});
}

// export const time = readable(new Date(), set => {
// 	const interval = setInterval(() => {
// 		set(new Date());
// 	}, 1000);

// 	return () => clearInterval(interval);
// });