const bcrypt = require("bcrypt");

class PasswordComparer {
    compare(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword);
    }
}

module.exports = PasswordComparer;