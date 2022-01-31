function calcular(text) {
	if (text.match(/^\D|\D\D|\D$/g)) { // \D not a number
		document.querySelector("input[type='text']").value = 'invalid input'
		return
	}
	
	const numbers = text.split(/\D/)
	const signs = text.match(/\D/g)
	let acum = 0
	console.log('numbers', numbers)
	console.log('signs', signs)

	signs.map((sign, index) => {
		switch(sign) {
			case '+':
				acum = parseInt(numbers[index]) + parseInt(numbers[index + 1])
				break
			case '-':
				break
			case '*':
				break
			case '/':
				break
		}
	})
	document.querySelector("input[type='text']").value = acum
}