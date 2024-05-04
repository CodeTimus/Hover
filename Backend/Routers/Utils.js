const multer = require('multer');
const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const serviceAccount = require('../service-key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

router.post('/sendNotification', (req, res) => {
    const { notiToken, data } = req.body;

    const message = {
        data,
        token: notiToken
    };

    admin.messaging().send(message)
        .then(response => {
            console.log('Successfully sent message:', response);
            res.json(response);
        })
        .catch(error => {
            console.error('Error sending message:', error);
            res.status(500).json(error);
        });
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const uploader = multer({ storage: storage });

router.post('/uploadfile', uploader.single('myfile'), (req, res) => {
    res.status(200).json({ message: 'file uploaded Successfully'})
});
module.exports = router; 
