const Book = require("../../domain/entities/Book");

class BookRoom {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }

    async execute({hotelName, userID, numberOfNights, roomsID, people}) {

        //Create user and save the user
        const book = new Book({hotelName, userID, numberOfNights, roomsID, people});
        await this.bookRepository.save(book);
        

        return book.BookingInfo; //need to change .profile to match the entity

    }
}

module.exports = BookRoom;