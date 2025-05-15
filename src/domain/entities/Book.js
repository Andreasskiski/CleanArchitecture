class Book{

    #bookingID;
    #hotelName;
    #userID;
    #numberOfNights;
    #roomsID;
    #people;

    constructor({bookingID, hotelName, userID, numberOfNights, roomsID, people}) {
        this.#bookingID = bookingID;
        this.#hotelName = hotelName;
        this.#userID = userID;
        this.#numberOfNights = numberOfNights;
        this.#roomsID = roomsID;
        this.#people = people;
    }

    get BookingInfo() {
        return {
            bookingID: this.#bookingID,
            hotelName: this.#hotelName,
            userID: this.#userID,
            numberOfNights: this.#numberOfNights,
            roomsID: this.#roomsID,
            people: this.#people
        }
    }

    get bookingID() {
        return this.#bookingID;
    }

    get hotelName() {
        return this.#hotelName;
    }

    get userID() {
        return this.#userID;
    }

    get numberOfNights() {
        return this.#numberOfNights;
    }

    get roomsID() {
        return this.#roomsID;
    }

    get people() {
        return this.#people;
    }



}

module.exports = Book