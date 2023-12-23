const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:8080',
    credentials: true,
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const Join = require('./routes/join');
app.use('/join', Join);

app.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});