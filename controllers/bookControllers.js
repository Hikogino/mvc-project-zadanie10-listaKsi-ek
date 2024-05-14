const Book = require('../models/book')

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find().lean();  
        console.log(books)
        res.render('books', {
            title: 'Books List',
            isBooks: true,
            books  
        });
    } catch (e) {
        console.log(e);
    }
};

exports.getCreate = (req, res) => {
    res.render('create', {
        title: 'Add Books',
        isCreate: true
    });
};

exports.postCreate = async (req, res) => {
    try {
        const books = new Book({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            year: req.body.year,
            notes: req.body.notes
        });

        await books.save();
        res.redirect('/'); 
    } catch (e) {
        console.error(e);
    }
};

exports.Change = async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await Book.findOne({ bookId });  

        res.render('change', {
            title: 'Change Books',
            book: book
        });
    } catch (err) {
        console.error(err);  
        res.status(500).send('Error retrieving book'); 
    }
};

exports.putChange = async (req, res) => {
    const bookId = req.params.id; 
    const { title, author, genre, year, notes } = req.body;
    try {
        await Book.findByIdAndUpdate(bookId, { title, author, genre, year, notes }, { new: true });
        res.redirect('/'); 
    } catch (e) {
        console.error(e);
    }
};


exports.getChange = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).send('Book not found');
        }
        res.render('change', { book }); 
    } catch (e) {
        console.error(e);
    }
}

exports.deleteBook = async (req, res) => {
    const bookId = req.params.id;
    try {
        await Book.deleteOne({ _id: bookId });
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to delete the book');
    }
};


