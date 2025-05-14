const jwt = require("jsonwebtoken");

const IJwtService = require("../../application/service_interfaces/iJwtService");

class jwtService extends IJwtService {

    constructor() {
        super();
    }

    generateToken(username, role) {
        try {
            return jwt.sign({ username, role }, "secret", { expiresIn: "1h" }); 
        } catch (err) {
            console.error(err);
            throw new Error("Failed to generate token");
        }
        
    }

    validateToken(token) {
        try {
            const secret = process.env.JWT_SECRET || "fallbackSecret";
            return jwt.verify(token, secret);
        } catch (err) {
            throw new Error("Invalid or expired token");
        }
    }
}

module.exports = jwtService;