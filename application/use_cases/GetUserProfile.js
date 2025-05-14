class GetUserProfile {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(username) {
        const user = await this.userRepository.findByUsername(username);
        if (!user) throw new Error("User not found.");
        return {
            id: user.userID,
            username: user.username,
            email: user.email,
            createdAt: user.createdAt
        }
    }
}

module.exports = GetUserProfile;