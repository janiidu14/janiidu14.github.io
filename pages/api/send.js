import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// export const async function send = () =>
export default async function (req, res) {
    if(req.method == "POST") {
        const msg = {
            to: 'jaanidurathnayaka@gmail.com',
            from: 'janiidu14@gmail.com',
            subject: `${req.body.subject}`,
            html: `
              <div>              
                <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
                <p>Message:</p>
                <p>${req.body.message}</p>
            </div>`,
        }
        try{
            await sendgrid.send(msg);
            res.status(200).json({ sucess: true })
            
        } catch(error) {
            res.status(200).json({ sucess: false })
        }
    }
}