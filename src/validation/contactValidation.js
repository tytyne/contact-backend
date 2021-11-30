import Joi from "joi"

class ContactValidation{
    static post(req,res,next){
        const Schema=Joi.object({
            lastname:Joi.string().min(3).required(),
            firstname:Joi.string().min(3).required(),
            email:Joi.string().min(5).email().required(),
            phone:Joi.number().min(10).required()  
           
        })
        const result=Schema.validate(req.body);
        if(result.error){
            return res.status(400).json({ message: result.error.details[0].message }); 
        }
        next()

    }
}
    export default ContactValidation