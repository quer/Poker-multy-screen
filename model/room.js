var SlotsSet = require("./slots");
module.exports = function (name) {
	this.name = name;
	this.slots = new SlotsSet();
	this.tableSlots = [];
	this.tableShowsCards = [];
	this.deck = [];
	this.active = true;
	this.update = function(){

	}
	this.sendTableToClient = function () {
		var objToSend = {
			tableCard: this.tableShowsCards,
			players: this.slots.sendTableToClient()
		}
		for (var i = 0; i < this.tableSlots.length; i++) {
			this.tableSlots[i]
		}
	}
	this.seatUser = function (userObj) {
		return this.slots.seatUser(userObj);
	}
	this.seatTable = function (tableObj) {
		this.tableSlots.push(tableObj);
	}
	this.update = function (alpha) {
		// body...
	}
}