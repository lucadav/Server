const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.get('/', (req,res) => {
    console.log(req.body)
    res.json(req.body);
});

app.post('/', (req,res) => {
    console.log(req.body)
    res.json(req.body);
})


app.listen(5000, () => console.log('app listening on p 5000'))
