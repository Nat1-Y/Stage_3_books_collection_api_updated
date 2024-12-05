const express = require('express');
const {
  getAllBooks,
  getBooks,
  createBook,
  getBookById,
  updateBookById,
  deleteBookById,
} = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const router = express.Router();

// Route to get a specific book by ID
router.get('/:id', authMiddleware, getBookById);

// Route to get all books (Admin only)
router.get('/all', authMiddleware, roleMiddleware('admin'), getAllBooks);

// Route to get books (Available to authenticated users)
router.get('/', authMiddleware, getBooks);

// Route to create a new book (Available to authenticated users)
router.post('/', authMiddleware, createBook);

// Route to update a book by ID (Admin only or owner)
router.put('/:id', authMiddleware, updateBookById);

// Route to delete a book by ID (Admin only)
router.delete('/:id', authMiddleware, roleMiddleware('admin'), deleteBookById);

module.exports = router;
