const mongoose = require('mongoose');
const {id, pw} = require('./secret');

module.exports = () => {
    const connect = () => {
        if(process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }
        mongoose.connect(`mongodb://${id}:${pw}@localhost:27017/admin`, {
            dbName: 'nodejs',
        }, (err) => {
            if(err) console.log('mongodb error', err);
            else console.log('mongodb success');
        });
    };
    connect();
    mongoose.connection.on('error', (err) => {
        console.log('mongodb error', err);
    });
    mongoose.connection.on('disconnected', () => {
        console.log('mongodb disconnected. reconnecting...');
        connect();
    });
    require('./user');
    require('./comment');
};