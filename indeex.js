const mongoose= require('mongoose');

mongoose.connect("mongodb+srv://dev:fifanba15@cluster0-yyjdw.mongodb.net/School?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology:true})
    .then(res => {
       // console.log(res);
    })
    .catch(err => {
        console.log(err);
    });

    const Student=mongoose.model(
        'student',
        new mongoose.Schema({
            first_name: String,
            last_name: String,
            average_grade: Number,
            courses:[String],
            email:String,
            Birthdate: Date,
            _created: Date,
            _modified: Date
        },
        {collection:'students'}
        )
        
    );

    var s=new Student({
        first_name: "Petar",
        last_name: "Grozdanov",
        average_grade: 5,
        courses:["C++","Html","JSA"],
        email:"pgrozdanov2@gmail.com",
        Birthdate: new Date("2001-07-12T12:30:00Z"),
        _created: new Date(),
        _modified: new Date()
    })

    s.save(err =>{
        if(err){
            console.log(err);
            return;
        }
        console.log("saved successfully");
    })