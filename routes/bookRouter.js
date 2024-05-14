
const express = require('express');
const bookRouter = express.Router();
const bookControllers = require('../controllers/bookControllers');

bookRouter.get('/', bookControllers.getBooks);
bookRouter.post('/read/:id', bookControllers.Read);

bookRouter.get('/create', bookControllers.getCreate);
bookRouter.post('/create', bookControllers.postCreate);
bookRouter.delete('/delete/:id', bookControllers.deleteBook);

bookRouter.get('/change/', bookControllers.Change);
bookRouter.get('/change/:id', bookControllers.getChange);
bookRouter.put('/change/:id', bookControllers.putChange);


module.exports = bookRouter;

