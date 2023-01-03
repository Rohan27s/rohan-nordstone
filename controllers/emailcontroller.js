import Email from '../models/Email.js';

class EmailController {
    static email = async (req, res) => {
        try {
            const {
                email
            } = req.body

            const newEvent = new Email({
                email:email
            })
            const result = await newEvent.save()
            res.status(201).send(result)
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: "wrong" });
        }
    }
    static allemail = async (req, res) => {
        try {
            const result = await Email.find()
            res.send(result)

        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: "wrong" });
        }
    }

   

}
export default EmailController