const fs = require('fs');
const crypto = require('crypto');
let multer = require('multer');
const Config = require('../utils/config');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, Config.UPLOAD_DIR)
  },
  filename: (req, file, cb) => {
    console.info('Uploading file ', file.originalname, ' into \''+Config.UPLOAD_DIR+'\'...');
    cb(null, file.originalname)
  }
});

const upload  = multer({storage});

module.exports = function(app){
    app.post('/api/upload', upload.single('file'), (req, res) => {
        fs.mkdir(Config.UPLOAD_DIR, (err) => {
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
