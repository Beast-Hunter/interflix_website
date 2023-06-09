const jwt = require("jsonwebtoken");

function verify(req,res,next){
    const authHeader = req.headers.token;
    if(authheader){
        const token = authHeader.split(" ")[1]

        jwt.verify(token, process.env.SECRET_KEY,(err,user)=>{
            if(err) res.status(403).json("Token Not Valid");
            req.user = user;
            next();
        })
    }else{
        return res.status(401).json("Not Authenticated");
    }
}

module.exports = verify;