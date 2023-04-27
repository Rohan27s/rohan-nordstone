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

    static updateDocById = async (req, res) => {
        try {
            const result = await Email.findByIdAndUpdate(req.params.id, req.body)
            res.send(result)
        }
        catch (error) {
            console.log(error)
        }
    }
    static dltDocById = async (req, res) => {
        try {
            const result = await Email.findByIdAndDelete(req.params.id)
            res.status(204).send(result)
        }
        catch (error) {
            console.log(error)
        }
    }

}
export default EmailController