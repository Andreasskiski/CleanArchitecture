const bcrypt = require("bcrypt");
const User = require("../../domain/entities/User");
const pool = require("./db");

const IUserRepository = require("../../application/repository_interfaces/IUserRepository");

class InMemoryUserRepository extends IUserRepository {
    constructor() {
        super(); // calls the constructor of the parent class (IUserRepository)
        

    }

    async save(user) {

        // Add bcrypt hashing
        const hashedPassword = await bcrypt.hash(user.password, 10);

        // Create a new User object
        const userObj = new User({
            username: user.username,
            password: hashedPassword,
            email: user.email,
            role: user.role,
        });
        console.log("User created:", userObj.profile);


        const connection = await pool.getConnection();
        console.log(userObj.username, userObj.password, userObj.email);
        const query = "INSERT INTO users (username, password, email, createdAt, role) VALUES (?, ?, ?, ?, ?)";
        const values = [userObj.username, userObj.password, userObj.email,userObj.createdAt, userObj.role ];
        await connection.execute(query, values);
        connection.release();

    }

    async findByUsername(username) {
        const connection = await pool.getConnection();
        const query = "SELECT * FROM users WHERE username = ?";
        const values = [username];
        const [rows] = await connection.execute(query, values);
        connection.release();
        return rows[0];
    }

    async loginUser(){
        const connection = await pool.getConnection();
        console.log("loggin in")
        connection.release();
    }
}

module.exports = InMemoryUserRepository;