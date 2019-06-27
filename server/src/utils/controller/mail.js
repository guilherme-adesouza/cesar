const Validations = require('./validations');
const Mail = require('../utils/mail');

class MailController {

  constructor(app){
    this.app = app;
  }

  sendSupportMail(){
    this.app.post(`/api/mail`, async (req, res) => {
      const player = Validations.validateUser(req, res);
      const body = req.body;
      body.from = player;
      try {
        const result = await Mail.sendMail(body);
        res.send(result).status(200);
      } catch(error){
        throw new Error(error);
      }
    });
  }

  initialize(){
    this.sendSupportMail();
  }
}

module.exports = function(app) {
  const mailController = new MailController(app);
  mailController.initialize();
}
