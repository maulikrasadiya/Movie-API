const express = require("express");
const routes = express();
const d = require('../controllers/controller');
const fileUpload = require('../middlewares/movieMiddle')

routes.get('/',d.defaultRoute);
routes.get('/view',d.viewData)
routes.get('/addMovie', d.addMovie)
routes.post('/addData',fileUpload.single('image'), d.addData)
routes.get('/deleteDoc/:id',d.deleteDoc)
routes.get('/editDoc/:id', d.editData)
routes.post('/updateData', fileUpload.single('image'), d.updateData)
// routes.get('view',d.viewData)


module.exports = routes ;