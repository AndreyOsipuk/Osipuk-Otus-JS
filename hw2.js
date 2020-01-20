function promiseReduse(asyncFunctions, reduce, initialValue) {
	asyncFunctions.forEach( f =>
		f.then(res => reduce(res, initialValue))
	)
}

const fn1 = Promise.resolve(1),
  fn2 = new Promise(resolve => {
    setTimeout(() => resolve(2), 1000)
  });

promiseReduse([fn1, fn2], (memo, value) => console.log(memo * value), 2);