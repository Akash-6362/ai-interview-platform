const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {

    let token;

    // Check token exists
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {

        try {

            // Get token from header
            token = req.headers.authorization.split(" ")[1];

            // Verify token
            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET
            );

            // Store user info in request
            req.user = decoded;

            next();

        } catch(error){

            return res.status(401).json({
                message: "Not authorized, token failed"
            });
        }

    }

    if(!token){

        return res.status(401).json({
            message: "No token provided"
        });
    }
};

module.exports = protect;

const admin = (req, res, next) => {

    if(req.user && req.user.role === "admin"){

        next();

    } else {

        return res.status(403).json({
            message: "Admin access only"
        });
    }
};
module.exports = admin;