const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyCJGoJbwAID_6uQhuFHT9websKT5kJlKOg",
    authDomain: "servlesscomputing.firebaseapp.com",
    projectId: "servlesscomputing"
});

var db = firebase.firestore();
// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

app.use(bodyParser.json())

app.post('/', (req,res) => {
    console.log(req.body);
    // Add a new document in collection "cities"
    db.collection("users").get().then((querySnapshot) => {
        let index = querySnapshot.size+2;
        querySnapshot.forEach((doc) =>{
            let id = parseInt(doc.id);
            if(id>index || id===index){
                index=id;
                index +=1
            }
        });
        console.log(index.toString());
        db.collection("users").doc(index.toString()).set(req.body)
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
    });
    res.json(req.body);
});

app.get('/', (req,res) => {
    console.log(req.body);
    res.json(req.body);
});




app.listen(5000, () => console.log('app listening on p 3000'))
