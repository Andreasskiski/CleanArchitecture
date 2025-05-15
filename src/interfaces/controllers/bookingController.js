function BookingController(bookUseCase) {
    return {
        async bookRoom(req, res) {
            const { hotelName, userID, numberOfNights, roomsID, people} = req.body

            try {
                const book = await bookUseCase.execute({hotelName, userID, numberOfNights, roomsID, people});
                res.status(200).json(book);
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        }
    }
}

module.exports = BookingController