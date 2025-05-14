const express = require("express");
const router = express.Router();


// Use cases
const RegisterUser = require("../../application/use_cases/RegisterUser");
const GetUserProfile = require("../../application/use_cases/GetUserProfile");
const LoginUser = require("../../application/use_cases/LoginUser");

// Repositories
/* const InMemoryUserRepository = require("../../infrastructure/db/InMemoryUserRepository"); */
const SqlUserRepository = require("../../infrastructure/db/SqlUserRepository")

// Services
const PasswordComparer = require("../../infrastructure/services/passwordComparer");
const JwtService = require("../../infrastructure/services/jwtService");

// Controllers
const UserController = require("../../interfaces/controllers/UserController");


// Dependencies
const userRepository = new SqlUserRepository();
const passwordComparer = new PasswordComparer();
const jwtService = new JwtService();

const registerUserUseCase = new RegisterUser(userRepository);
const getUserProfileUseCase = new GetUserProfile(userRepository);
const loginUserUseCase = new LoginUser(userRepository, passwordComparer, jwtService);


const userController = UserController(registerUserUseCase, getUserProfileUseCase, loginUserUseCase);

router.post("/register", userController.register);
router.post("/login", userController.loginUser);
router.get("/profile/:username", userController.getProfile);

module.exports = router;