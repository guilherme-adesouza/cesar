const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
let multer = require('multer');
const Config = require('../utils/config');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    fs.mkdir(Config.UPLOAD_DIR, (err) => {
        if(err.code !== 'EEXIST'){
          console.error('error creating directory: ', err);
        }
        cb(null, Config.UPLOAD_DIR)
    })
  },
  filename: (req, file, cb) => {
    crypto.pseudoRandomBytes(16, function (err, raw) {
        if (err) return cb(err);

        const id = "_" +crypto.randomBytes(10).toString("hex");
        const filename = file.originalname+ id + path.extname(file.originalname)
        console.info('Uploading file ', filename, ' into \''+Config.UPLOAD_DIR+'\'...');
        cb(null, filename)
    })
  }
});

const upload  = multer({storage});

module.exports = function(app){
    app.post('/api/upload', upload.single('file'), (req, res) => {
        res.status(200).send({message: 'Upload successfully!', path: req.file.path});
    });
}
