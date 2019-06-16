const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');
let multer = require('multer');
const Config = require('../utils/config');

const uploadDir = path.join(os.homedir(), Config.UPLOAD_DIR);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir)
  },
  filename: (req, file, cb) => {
    console.info('Uploading file ', file.originalname, ' into \''+uploadDir+'\'...');
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
        console.info('Upload successfully!');
        res.status(200).send({message: 'Upload realizado com sucesso!'});
    });

    app.get('/api/files', (req, res) => {

    });
}
