function UserController(registerUserUseCase, getUserProfileUseCase, loginUserUseCase) {
    return {
        async register(req, res) {
            const { username, password, email, role } = req.body;

            try {
                const user = await registerUserUseCase.execute({username, password, email, role});
                res.status(201).json({ id: user.id, username: user.username, email: user.email, role: user.role, createdAt: user.createdAt });
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        },

        async getProfile(req, res) {
            try {
                const profile = await getUserProfileUseCase.execute(req.params.username);
                res.status(200).json(profile);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        },

        async loginUser(req, res) {
            const { username, password } = req.body;

            try {
                const user = await loginUserUseCase.execute(username, password);
                res.status(200).json(user);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        }
    }
}


module.exports = UserController;