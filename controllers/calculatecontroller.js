import Calculate from '../models/Calculate.js';

class CalculateController {
    static calculate = async (req, res) => {
        try {
            const {
                FirstNo, SecondNo, Operation
            } = req.body
            
            if(Operation === 'addition'){
                res.status(201).send(FirstNo + SecondNo);
            }
            if(Operation === 'subtraction'){
                res.status(201).send(FirstNo - SecondNo);
            }
            if(Operation === 'multiplication'){
                res.status(201).send(FirstNo * SecondNo);
            }
            
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: "wrong" });
        }
    }
}
export default CalculateController