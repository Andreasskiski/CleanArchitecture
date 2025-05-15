const express = require("express");
const router = express.Router();

//usecases
const Booking = require("../../application/use_cases/bookUseCase");

//repositories
const SqlBookRepository = require("../../infrastructure/db/SqlBookRepository");

//controllers
const BookingController = require("../../interfaces/controllers/bookingController");



//dependencies
const bookRepository = new SqlBookRepository();

const bookUseCase = new Booking(bookRepository);

const bookingController = BookingController(bookUseCase);



router.post("/book", bookingController.bookRoom);

module.exports = router;