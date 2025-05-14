const User = require("../../domain/entities/User");

class LoginUser {
    constructor(userRepository, PasswordComparer, jwtService) {
        this.userRepository = userRepository;
        this.passwordComparer = PasswordComparer;
        this.jwtService = jwtService;
    }

    async execute(username, password) {
        const user = await this.userRepository.findByUsername(username);
        if (!user) throw new Error("User not found.");


        try {
            await this.passwordComparer.compare(password, user.password);

            
            const token = this.jwtService.generateToken(user.username, user.role);
            return token;
        } catch (error) {
            throw new Error("Invalid password.");
        }
        
        
    }
}



module.exports = LoginUser;