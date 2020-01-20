const router = require("express").Router();
const booksController = require("../../controller/booksControllor");

// Matches with "/api/books"
router.route("/api/books")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router.route("/api/books/:id")
  .delete(booksController.remove);

module.exports = router;
