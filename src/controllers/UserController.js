

export default class UserController{

   
    static async ListUsers(req,res,next){
        try{
            res.status(200).json({message:"list all users"})
        }
        catch(e){
            return next(new(Error(e)))
        }
    }
    static async UserByEmail(req,res,next){
        try{
            res.status(200).json({message:"list a user by email!!"})
        }
        catch(e){
            return next(new(Error(e)))
        }
    }
    

}