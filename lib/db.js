var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Connect to cloud databse
var username = "root";
var password = "simongao";
var address = '@ds037607.mongolab.com:37607/nockmarket';

// Connect to mongo
function connect() {
  var url = 'mongodb://' + username + ':' + password + address;
  mongoose.connect(url);
}

function disconnect() {
	mongoose.disconnect();
}
