const Book = require("../../domain/entities/Book");
const pool = require("./db");

const ISqlBookRepository = require("../../application/repository_interfaces/ISqlBookRepository");

class SqlBookRepository extends ISqlBookRepository {
    constructor() {
        super();
    }

    async save(book) {

        // Create a new User object
        const bookObj = new Book({
            hotelName: book.hotelName,
            userID: book.userID,
            numberOfNights: book.numberOfNights,
            roomsID: book.roomsID,
            people: book.people
        });
        console.log("booking created:", bookObj.profile);


        const connection = await pool.getConnection();
        console.log(bookObj.hotelName, bookObj.userID, bookObj.numberOfNights, bookObj.roomsID, bookObj.people);
        const query = "INSERT INTO bookings (hotelName, userID, numberOfNights, roomsID, people) VALUES (?, ?, ?, ?, ?)";
        const values = [bookObj.hotelName, bookObj.userID, bookObj.numberOfNights, bookObj.roomsID, bookObj.people];
        await connection.execute(query, values);
        connection.release();

    }

}

module.exports = SqlBookRepository;