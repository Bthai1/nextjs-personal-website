const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
    const body = JSON.parse(req.body);
    
    const message = `
        Name: ${body.name}\r\n
        Email:${body.email}\r\n
        Message: ${body.message}   
    `;

    const data = {
        to:'rawgaming3@gmail.com',
        from: 'email@bryanthai.com',
        subject: `${body.name} has messaged with email ${body.email}`,
        test:message,
        html: message.replace(/\r\n/g,'<br>')
    };

    await mail.send(data)

    res.status(200).json({status:'OK'});
}