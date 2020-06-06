const nodemailer = require('nodemailer');

const buildTemplate = (imgLogo, link, appName) => {
  const template = `
<table cellspacing="0" cellpadding="0" border="0" style="color:#333;background:#fff;padding:0;margin:0;width:100%;font:15px 'Helvetica Neue',Arial,Helvetica">
  <tbody>
    <tr width="100%">
      <td valign="top" align="left" style="background:#f0f0f0;font:15px 'Helvetica Neue',Arial,Helvetica">
        <table style="border:none;padding:0 18px;margin:50px auto;width:500px">
          <tbody>
            <tr width="100%" height="57">
              <td valign="top" align="left" style="border-top-left-radius:4px;border-top-right-radius:4px;background:#0079bf;padding:12px 18px;text-align:center">
                <img height="37" width="122" src="${imgLogo}" title="Logo" style="font-weight:bold;font-size:18px;color:#fff;vertical-align:top" class="CToWUd">
              </td>
            </tr>
            <tr width="100%">
              <td valign="top" align="left" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;background:#fff;padding:18px">
                <h1 style="font-size:20px;margin:0;color:#333;text-align:center"> Siamo felici di averti tra noi! </h1>
                <p style="font:15px/1.25em 'Helvetica Neue',Arial,Helvetica;color:#333">
                  <a href="${link}" style="border-radius:3px;background:#3aa54c;color:#fff;display:block;font-weight:700;font-size:16px;line-height:1.25em;margin:24px auto 24px;padding:10px 18px;text-decoration:none;width:220px;text-align:center" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://trello.com/confirm?confirmationToken%3D4a08aa25471e0a5d1d06fb494e9ce38e%26idMember%3D5c82373e6deb4801e80279ec%26returnUrl%3D%252F&amp;source=gmail&amp;ust=1552124110865000&amp;usg=AFQjCNFZ4DOFrWB8XIhUauJZTiRFyde4ww"> Conferma il tuo indirizzo email </a>
                </p>
                <p style="font:15px/1.25em 'Helvetica Neue',Arial,Helvetica;color:#939393;margin-bottom:0;text-align:center"> Vogliamo solo verificare la tua identità. </p>
                <p style="font:15px/1.25em 'Helvetica Neue',Arial,Helvetica;color:#939393;margin-bottom:0;text-align:center"> Se non hai creato un account ${appName}, semplicemente elimina questa email e tutto tornerà come prima. </p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>`;
  return template;
};

const sendEmailAuth = async (email, uri, verify, subject, htmlPart) => {
  console.log('EMAIL_USER', process.env.EMAIL_USER);
  console.log('EMAIL_PASS', process.env.EMAIL_PASS);
  console.log('DOMAIN', process.env.DOMAIN);
  console.log('EMAIL', email);
  console.log('VERIFY', verify);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const html = buildTemplate(
    'https://i.imgur.com/VEcUJe0.png',
    `${process.env.DOMAIN}/${uri}/${verify}`,
    'AutoAlTop'
  );

  const mailOption = {
    from: `"Admin 👻" <${process.env.EMAIL_FROM}>`, // email del mittente
    to: email, // email del ricevente
    subject: subject,
    text: 'Hello world?', // plain text body
    html: html
  };
  // const mailOption = {
  //   from: `"Admin 👻" <${process.env.EMAIL_FROM}>`, // email del mittente
  //   to: email, // email del ricevente
  //   subject: subject,
  //   text: 'Hello world?', // plain text body
  //   html: `${htmlPart}
  //   <a href="${process.env.DOMAIN}/${uri}/${verify}">CLICCAMI</a><br>
  //   <p>${process.env.DOMAIN}/${uri}/${verify}</p>`
  // };

  try {
    let info = await transporter.sendMail(mailOption);
    console.log('INFO', info);

    return info;
  } catch (error) {
    console.log('ERROR', error);
    return false;
  }
};

module.exports = sendEmailAuth;
