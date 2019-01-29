const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./init');

app.use(bodyParser.json())

app.get('/', (req,res) => {
    console.log(req.body)
    res.json(req.body);
});

app.post('/', (req,res) => {
    console.log(req.body)
    res.json(req.body);
})


db.collection('list').get()
    .then(snapshot => {
        snapshot.array.forEach(doc => {
            console.log(doc)
        });
    })

app.listen(5000, () => console.log('app listening on p 5000'))
