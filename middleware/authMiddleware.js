const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    try {

        // GET TOKEN
        const authHeader = req.header("Authorization");

        if (!authHeader) {
              return res.status(401).json({ message: "No token, access denied" });
         }

        const token = authHeader.split(" ")[1];

        // CHECK TOKEN
        if (!token) {
            return res.status(401).json({
                message: "No token, access denied"
            });
        }

        // VERIFY TOKEN
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // SAVE USER DATA
        req.user = decoded;

        // MOVE TO NEXT FUNCTION
        next();

    } catch (error) {

        res.status(401).json({
            message: "Invalid token"
        });

    }

};

module.exports = authMiddleware;