const Book = require('../models/book');

// Get all books (Admin only)
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.json({ books });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books', details: error.message });
  }
};

// Get books accessible to the user
const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.json({ books });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books', details: error.message });
  }
};

// Create a new book
const createBook = async (req, res) => {
  const { title, author, isbn, publishedYear } = req.body;

  try {
    const newBook = await Book.create({ title, author, isbn, publishedYear });
    res.status(201).json({ message: 'Book created successfully', book: newBook });
  } catch (error) {
    res.status(400).json({ error: 'Failed to create book', details: error.message });
  }
};

// Get a single book by ID
const getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ book });
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch book', details: error.message });
  }
};

// Update a book by ID
const updateBookById = async (req, res) => {
  const { id } = req.params;
  const { title, author, isbn, publishedYear } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, isbn, publishedYear },
      { new: true, runValidators: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Book updated successfully', book: updatedBook });
  } catch (error) {
    res.status(400).json({ error: 'Failed to update book', details: error.message });
  }
};

// Delete a book by ID
const deleteBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete book', details: error.message });
  }
};

// Export all functions
module.exports = {
  getAllBooks,
  getBooks,
  createBook,
  getBookById,
  updateBookById,
  deleteBookById,
};