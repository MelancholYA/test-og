const calcCashIn = (operation) => {
	if (operation.operation.currency !== 'EUR')
		return console.log('\x1b[31m%s\x1b[0m', 'Invalid currency');
	let comission = (operation.operation.amount * 0.03) / 100;

	comission > 5 ? (operation.commision = 5) : (operation.commision = comission);
	return operation;
};

module.exports = calcCashIn;
