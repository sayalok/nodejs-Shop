const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = cb => {
	mongoClient.connect(
		'mongodb+srv://sayalok:sayalook00@cluster0-bgzjc.mongodb.net/shop?retryWrites=true&w=majority'
	)
	.then((client) => {
		console.log('connected')
		_db = client.db()
		cb()
	})
	.catch(err => console.log(err))
}

const getDb = () => {
	if(_db) {
		return _db
	}

	throw 'No Database Found'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb