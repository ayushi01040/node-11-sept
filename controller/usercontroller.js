const users=require('../users.json');
const fs=require('fs');

function getAllUser(req,res){
    res.json(users);
}
function getParticularUser(req,res){
let id=parseInt(req.params.id);
let user=users.find((user)=>user.id===id);
res.json(user)
}
function addUser(req,res){
    req.body.id=users.length+1;
    users.push(req.body);
    fs.writeFile('users.json',JSON.stringify(users),(err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.end("data added");
        }
    })
}
module.exports={
    getAllUser,
    getParticularUser,
    addUser
    
}