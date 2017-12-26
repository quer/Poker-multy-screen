var Card = require("./card");
module.exports = function () {
	this.cards = [];
	this.usedCards = [];
	/**
	 * create full deck
	 */
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 13; j++) {
			this.cards.push(new Card(i, j));
		}
	}
	this.cards.shuffel();
}