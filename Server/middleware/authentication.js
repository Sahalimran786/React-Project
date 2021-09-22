const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authtenticate = async (req,res,next) => {
    try {
        const Token = req.cookies.jwToken;
        const verifyToken = jwt.verify(Token, process.env.SECRET_KEY);
        if(verifyToken)
        {
             const getUser = await User.findOne({ token: Token });
             if (!getUser) {
               throw new Error({
                 Message: "User not Found Checked By middleware",
               });
             }
             req.token = Token;
             req.getUser = getUser;
             req.userID = getUser._id;
             next();
        }
        
    } catch (err) {
        res.status(401).send("Unauthorized: No token provided");
        console.log(err)
    }


};

module.exports = Authtenticate;
