const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
    const body = JSON.parse(req.body);
    
    const message = `
        Name: ${body.name}\r\n
        Email:${body.email}\r\n
        Message: ${body.message}   
    `;

    try{
        await mail.send({
        to:'rawgaming3@gmail.com',
        from: 'email@bryanthai.com',
        subject: `${body.name} has messaged with email ${body.email}`,
        test:message,
        html: message.replace(/\r\n/g,'<br>')
    });
    }
    catch(e){
        console.log(e)
    }

    res.status(200).json({status:'OK'});
}