const mongoose = require('mongoose');
mongoose.connect('mongodb://dev:****cluster0-fwwvy.mongodb.net:27017/videoteka', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(res => {
        console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
const filmovi = mongoose.model(
    'Filmovi', 
    { 
       ime: String,
       godina: String,
       zhanr: String,
       rezhija: String,
       oscar: String,
       akreti: [String]

    }
);

filmovi.find((err, data) => {
    if(err){
        console.log('ERROR!')
    }
    console.log(data);
});
console.log('end!');  