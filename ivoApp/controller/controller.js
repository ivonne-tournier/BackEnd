const index = (req, res) =>{
    res.render("index", {title: "express"});
}

const controller ={
    index(req, res){
        res.render("index", {title: "express"});
    },
    users (req, res){
        res.send('respond with a resource');
    }

}
const {Clothing}= require("../model/ropa")
module.exports= controller