const nodemailer = require("nodemailer");

let account = null;
let transport = null;

class Mail {
  static createTransport(){
    transport = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: account.user, // generated ethereal user
        pass: account.pass // generated ethereal password
      }
    });
  }

  static async createTestAccount(){
    account = await nodemailer.createTestAccount();
  }

  static async start(){
    if(!account) {
      await Mail.createTestAccount();
      Mail.createTransport();
    }
    if(!transport) {
      Mail.createTransport();
    }
  }

  static async sendMail({from, to, subject, text, body}){
    await Mail.start();
    console.log("[MAIL]: Preparing to sent mail... "+account.user+" | "+to+" | "+from+" | "+subject+" | "+text);
    return await transport.sendMail({
      from: account.user, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
      html: body // html body
    }).then(info => {
      const previewURL = nodemailer.getTestMessageUrl(info);
      console.info('Preview URL: '+previewURL);
      return {previewURL};
    });
  }
}

module.exports = Mail;
