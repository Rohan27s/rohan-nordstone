import Calculate from '../models/Calculate.js';

class CalculateController {
    static calculate = async (req, res) => {
        try {
            const {
                FirstNo, SecondNo, Operation
            } = req.body
            
            let result;
            switch (Operation) {
                case "addition":
                    result = FirstNo + SecondNo;
                    break;
                case "subtraction":
                    result = FirstNo - SecondNo;
                    break;
                case "multiplication":
                    result = FirstNo * SecondNo;
                    break;
                default:
                    return res.status(400).json({ message: "Invalid input. Operation must be one of 'addition', 'subtraction', or 'multiplication'." });
            }

            res.status(201).json({ result });
            
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: "wrong" });
        }
    }
}
export default CalculateController