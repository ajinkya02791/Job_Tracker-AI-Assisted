import jwt from "jsonwebtoken";

export const authmidware = (req,res,next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader) {res.status(401).json({ message : "User must Login !"})}

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if(err) return res.status(403).json({message : "Invalid User!"});

        req.user = user
        next();
    })
};