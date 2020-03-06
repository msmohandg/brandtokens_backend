const express = require('express');
const user = require('../db/user');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(req,file,cb){
        cb(null, new Date().getTime() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === "image/png" || file.mimetype === "image/jpeg" || file.mimetype === "image/jpg"){
        cb(null, true);
    }else{
        return false;
    }
};

const upload = multer({
    storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 10
    },
    fileFilter: fileFilter
});

router.get('/', (req, res) => {
    user.getAll().then(users => {
        res.json(users);
    });
});

router.post('/register', upload.single('image_url'), (req, res, next) => {
    

    if(req.files && req.files.length)
        req.body.image_url = req.file.filename;

    user.getOne({ email: req.body.email }).then(existing_user => {
 
        if (existing_user.length === 1) {
            res.status(400).send({message: 'Email address already exisits!'});
        } else{
            user.create(req.body).then(users => {
                res.status(201).json({message: 'success'});
            });
        }

    });
});

module.exports = router;