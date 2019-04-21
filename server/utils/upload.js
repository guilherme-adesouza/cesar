const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');
let multer = require('multer');

const uploadDir = path.join(os.homedir(), process.env.UPLOAD_DIR);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('destination');
    cb(null, uploadDir)
  },
  filename: (req, file, cb) => {
    console.log('fileName', file.originalname);
    cb(null, file.originalname)
  }
});

const upload  = multer({storage});

module.exports = function(app){
    app.post('/api/upload', upload.single('file'), (req, res) => {
        fs.mkdir(uploadDir, (err) => {
            if(err.code !== 'EEXIST'){
              console.error('error creating directory: ', err);
              res.status(500).send({message: 'error creating directory: ', err})
            }
        })
        res.status(200).send({message: 'Upload realizado com sucesso!'});
    });

    app.get('/api/files', (req, res) => {

    });
}
