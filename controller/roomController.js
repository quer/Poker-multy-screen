var Room = require("../model/room");
module.exports = {
	list: [],
	newRoom: function (name) {
		var newRoom = new Room(name);
	},
	update: function (alpha) {
		for (var i = 0; i < this.list.length; i++) {
			if(this.list[i].active){
				this.list[i].update();
			}
		}
	}
};