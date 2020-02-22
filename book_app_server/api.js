const express = require('express');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');
const readingListRouter = express.Router();

readingListRouter.param('bookId', (req, res, next, bookId) => {
    const sql = `SELECT * FROM ReadingList WHERE ReadingList.id = ${bookId}`;
    db.get(sql, (err, row) => {
        if (err) {
            next(err);
        } else if (!row) {
            return res.sendStatus(404);
        } else {
            next();
        }
    });
});

readingListRouter.get('/', (req, res, next) => {
    db.all('SELECT * FROM ReadingList', (err, rows)=> {
        if (err) {
            next(err);
        } else {
            return res.status(200).json({bookList: rows});
        }
    })
});

readingListRouter.post('/', (req, res, next) => {
    const title = req.body.book.title,
          author = req.body.book.author,
          publisher = req.body.book.publisher,
          img = req.body.book.img,
          is_read = req.body.book.is_read === 1 ? 1 : 0;
     if (!title || !author || !publisher || !img) {
         return res.sendStatus(400);
     }
     const sql = 'INSERT INTO ReadingList (title, author, publisher, img, is_read) '+
     'VALUES ($title, $author, $publisher, $img, $is_read)';
     const values = {
        $title: title, 
        $author: author, 
        $publisher: publisher, 
        $img: img, 
        $is_read: is_read
     }
     db.run(sql, values, function(err) {
        if (err) {
            next(err)
        } else {
            db.get(`SELECT * FROM ReadingList WHERE ReadingList.id = ${this.lastID}`, (err, row) => {
                if (err) {
                    next(err);
                } else {
                    res.status(200).json({book: row});
                }
            });
        }
     });       
});

readingListRouter.put('/:bookId', (req, res, next) => {
    const is_read = req.body.book.is_read === 1 ? 1 : 0;
    const sql = 'UPDATE ReadingList SET is_read = $is_read WHERE ReadingList.id = $bookId';
    const values = {$is_read: is_read, $bookId: req.params.bookId};
    db.run(sql, values, function(err) {
        if (err) {
            next(err);
        } else {
            db.get(`SELECT * FROM ReadingList WHERE ReadingList.id = ${req.params.bookId}`, (err, row) => {
                if (err) {
                    next(err)
                } else {
                    res.status(200).json({book: row});
                }
            })
        }
    });
});

readingListRouter.delete('/:bookId', (req, res, next) => {
    const sql = 'DELETE FROM ReadingList WHERE ReadingList.id = $bookId';
    const values = {$bookId: req.params.bookId};
    db.run(sql, values, function(err) {
        if (err) {
            next(err);
        } else {
            return res.sendStatus(204);
        }
    });
});

module.exports = readingListRouter;