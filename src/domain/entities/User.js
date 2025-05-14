class User {

    // # = private and is needed for Javascript
    #id
    #password
    #username
    #email
    #createdAt
    #role

    constructor({username, password, email, id, role}) {
        console.log("constructor params: ", { username, password, email, role})
        this.#username = username;
        this.#password = password;
        this.#id = id;
        this.#role = role;


        //checks if email is valid/contains @
        if (!email.includes("@")) {
            throw new Error("Invalid email/does not contain @");
        }
        this.#email = email;

        this.#createdAt = new Date();
    }

    get profile() {
        return {
            id: this.#id,
            username: this.#username,
            password: this.#password,
            email: this.#email,
            createdAt: this.#createdAt,
            role: this.#role
        }
    }

    get id() {
        return this.#id;
    }

    get password() {
        return this.#password;
    }

    get username() {
        return this.#username;
    }

    get email() {
        return this.#email;
    }

    get createdAt() {
        return this.#createdAt;
    }

    get role() {
        return this.#role;
    }

    
}

module.exports = User