
const axios = require('axios');

exports.homeRoutes = (req,res)=>{
    //make a get request to api/students
    axios.get('http://localhost:3000/api/students')
        .then(function(response){
            // console.log(response.data)
            res.render('index',{students:response.data});
        })
        .catch(err=>{
            res.send(err);
        })
}

exports.add_student = (req,res)=>{
    res.render('add_student');
}

exports.update_student = (req,res)=>{
    axios.get('http://localhost:3000/api/students',{params:{id:req.query.id}})
    .then(function(studentdata){
        res.render("update_student",{student:studentdata.data})
    })
    .catch(err=>{
        res.send(err);
    })
}