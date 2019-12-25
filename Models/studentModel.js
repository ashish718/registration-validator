const mongoose = require('mongoose');
mongoose.connect('mongodb://trume:ashish1@ds351428.mlab.com:51428/trume_db', {useNewUrlParser: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Schema = mongoose.Schema;


let StudentSchema = new Schema({
	name: {type: String, required: true, max:100},
	rollno: {type: String, required:true, max:100},
	class: {type: Number, required:true },
	school: {type: String, required:true, max: 200},
	dob: {type: String, required:true}
});


module.exports = mongoose.model('Student', StudentSchema);