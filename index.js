let total = { value: 0, op: null }

function checkInput(text) {
	// \D not a number
	if (text.match(/^\D|\D\D|\D$/g)) {
		document.querySelector("input[type='text']").value = 'invalid input'
		return false
	}
	return true
}

function getInput(op) {
	const screenNum = parseInt(document.querySelector("input[type='text']").value)

	if (checkInput(screenNum)) {
		total.value = screenNum
		total.op = op
	}
}

function numButton(num) {
	const screenNum = document.querySelector("input[type='text']")
	screenNum.value = screenNum.value === '0' ? num : screenNum.value + num
}

function deleteLast() {
	const screenTxt = document.querySelector("input[type='text']")
	const val = screenTxt.value.slice(0, screenTxt.value.length - 1)
	screenTxt.value = !val ? 0 : val
}

function negative() {}

function division() {
	getInput('div')
}

function multiplication() {
	getInput('mul')
}

function substraction() {
	getInput('sub')
}

function addition() {
	getInput('add')
}

function calcular() {
	const text = document.querySelector("input[type='text']").value

	const numbers = text.split(/\D/)
	const signs = text.match(/\D/g)
	let acum = parseInt(numbers[0])

	signs.map((sign, index) => {
		switch (sign) {
			case '+':
				acum += parseInt(numbers[index + 1])
				break
			case '-':
				acum -= parseInt(numbers[index + 1])
				break
			case '*':
				acum *= parseInt(numbers[index + 1])
				break
			case '/':
				acum /= parseInt(numbers[index + 1])
				break
		}
	})
	document.querySelector("input[type='text']").value = acum
}
