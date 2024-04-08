const userModel = require('../models/model');
const fs = require('fs');
var data = [] ;

const defaultRoute = (req,res) => {

    res.render('index');

};

// const view = (req,res) => {

//     res.render('home')

// };

const addMovie = (req,res) => {
    
    res.render('movie')

};

const addData = (req,res) => {
    console.log(req.body);

    var user = new userModel({

        name: req.body.name,
        description: req.body.description,
        lang: req.body.lang,
        rating: req.body.rating,
        quality: req.body.quality,
        image: req.file.path

    })

    user.save();
    
    res.redirect('/view');
}

const viewData =async (req,res) => {

    var list = await userModel.find();
    console.log(list);
    res.render('home',{list});

}


const deleteDoc = async (req,res) => {

    try{
        const deleted =await userModel.findByIdAndDelete(req.params.id);
        fs.unlink(deleted.image , () => {
            console.log("Delete image Successfully...");
            res.redirect('/view');
        })
    }catch(err){
        console.log("Image Errer",err)
    }

}

const editData =async (req, res) => {

    console.log(req.params.id);
    try{

        let movie = await userModel.findById(req.params.id);
        console.log(movie);
        res.render('edit',{movie});
    }catch(err){
        console.log(err);
    }

}

const updateData = async (req,res) => {
    

    console.log(req.body);
    try{

        const {id,name,description, lang, rating, quality} = req.body;
        const {path} = req.file;

        
        let old_movie = await userModel.findById(id);
        fs.unlink(old_movie.image, () => {
          console.log("success remove");
        });
       
        let updated = await userModel.findByIdAndUpdate(id , {lang:lang , name:name , description:description, rating:rating, quality:quality, image: path})



        res.redirect('/view');
    }catch(err){
        console.log(err);
    }

}

module.exports = {defaultRoute,viewData,addMovie,addData,deleteDoc, updateData, editData}