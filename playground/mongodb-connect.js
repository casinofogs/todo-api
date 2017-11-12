// const MongoClient = require('mongodb').MongoClient;
// Or,
// Using ES6 object destructuring
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoapp', function (err, db) {
    if (err) console.error('Unable to connect to mongodb');
    console.log('Connected successfully');

    // Inserting a test data
    // db.collection('todos').insertOne({
    //     text: 'Something to be done',
    //     completed: false
    // }, function (err, result) {
    //     if (err) console.error('Unable to insert');

    //     console.log(JSON.stringify(result.ops, null, 4));
    // });

    // db.collection('user').insertOne({
    //     name: 'pil',
    //     age: 35,
    //     location: 'Chaps'
    // }, function (err, result) {
    //     if (err) console.error('Unable to insert');

    //     console.log(JSON.stringify(result.ops, null, 4));
    // });
    
    // Fetch data
    // db.collection('todos').find({completed: true}).toArray().then(function (docs) {
    //     console.log('Todo find list');
    //     console.log(JSON.stringify(docs, null, 4));
    // }, function (err) {
    //     console.error('Unable to find/fetch data', err);
    // })


    // Fetch data using count()
    db.collection('user').find({ name: 'Mike' }).count().then(function (count) {
        console.log('Todos count', count);
    }, function (err) {
        console.error('Some Error occured', err);
    });

    db.close();
});





// const objectId_1 = new ObjectID();
// const objectId_2 = new ObjectID();

// console.log(objectId_1.id);