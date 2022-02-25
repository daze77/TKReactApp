// auto email variables
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'canadasgame411@gmail.com',
    pass: 'vmkcrecgnfdlxdmi'
  }
});




function registrationConfirmationEmail(email){
    var mailOptions = {
        from: 'TonyKisAOkay',
        to: email,
        subject: 'Thank you for subscribing',
        html: 
        `
        <body style="font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f6f6f6; margin: 0; padding: 0;">
        <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;" width="100%" bgcolor="#f6f6f6">
          <tr>
            <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
            <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; Margin: 0 auto !important; max-width: 580px; padding: 10px; width: 580px;" width="580" valign="top">
              <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">
                <!-- START CENTERED WHITE CONTAINER -->
                <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Thank you for subscribing! </span>
                <!-- START HEADER -->
                <div class="header" style="margin-bottom: 20px; Margin-top: 10px; width: 100%;">
    
                </div>
                <!-- END HEADER -->
                <table border="0" cellpadding="0" cellspacing="0" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #fff; border-radius: 3px;" width="100%">
                  <tr>
                    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                      <img src="https://www.listsforall.com/wp-content/uploads/2018/02/Zakynthos-1-550x350.jpg" alt="Photo of Greek Island Santorini" width="562" class="img-responsive" style="border: none; -ms-interpolation-mode: bicubic; max-width: 100%;">
                    </td>
                  </tr>
                  <!-- START MAIN CONTENT AREA -->
                  <tr>
                    <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
                      <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tr>
    
                            <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                                <h1 style="color: #222222; font-family: sans-serif; font-weight: 300; line-height: 1.4; margin: 0; Margin-bottom: 30px; font-size: 35px; text-align: center; text-transform: capitalize;">Welcome!!</h1>
                                <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; Margin: 0; Margin-bottom: 15px;">We received your subscription request.  Thank you!  If you would like to review or update your request please visit our website.</p>
                                <p>For your records below is the information we received.</p>

                                <br/>

                                <table border="0" cellpadding="0" cellspacing="0" class="hr" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                    <tbody>

                                      <tr>
                                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; height: 20px; line-height: 20px;" valign="top">&nbsp;Email Address: ${email}  </td>
                                      </tr>
                                      
                                      
                                    </tbody>
                                </table>
                          
                                <p>Thank you</p>
                                <p>TK </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- END MAIN CONTENT AREA -->
                  <!-- START CALL OUT -->
                  <tr>
                    <td class="wrapper section-callout" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px; background-color: #1abc9c; color: #ffffff;" valign="top" bgcolor="#1abc9c">
                      <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                        <tr>
                          <td class="align-center" style="font-family: sans-serif; font-size: 14px; vertical-align: top; text-align: center; color: #ffffff;" valign="top" align="center">
                            Great to have you on board ${email}  :-)
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- END CALL OUT -->
                </table>
                <!-- END CENTERED WHITE CONTAINER -->
              </div>
            </td>
            <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
          </tr>
            </table>
        </body>
        `
        };
        
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });

}

module.exports = registrationConfirmationEmail