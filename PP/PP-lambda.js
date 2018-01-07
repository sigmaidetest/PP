let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
    ddb.get({
        TableName: 'Invoice',
        Key: { invoice_number: 'HI', clienId_date: 'Bye' }
    }, function (err, data) {
        if (err) {
            //handle error
        } else {
            //your logic goes here
        }
    });

}