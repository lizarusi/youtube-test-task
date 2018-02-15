let express = require('express'), app = express();
let db = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors({
    origin: 'http://localhost:3028',
    credentials: true
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/', require('./controllers/history'));

db.connect('mongodb://lizarusi:12345@ds237848.mlab.com:37848/youtube-test-task', function (err) {
    if (err) {
        console.log('Unable to connect to Mongo.');
        process.exit(1)
    } else {
        app.listen(3027, function () {
            console.log('Listening on port 3027...')
        })
    }
});