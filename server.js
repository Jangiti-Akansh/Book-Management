const express = require('express');
const app = express();
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rtaa2003",
    database: "booksdb", 
});

connection.connect(function(err) {
    if (err){
        console.log(err);
        throw err;
    }
    else
        console.log("Database connection established successfully!");
});

app.get('/get/books', (req, res) => {
    connection.query('SELECT * FROM books', (err, rsl) => {
        if (err)
            res.status(404).json({message:'Book not found!'});
        else
            res.json(rsl);
    });
});

app.get('/get/books/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM books where id = ?',id, (err, rsl) => {
        if (err)
            res.status(404).json({message:'Book not found!'});
        else
            res.json(rsl[0]);
    });
});

app.post('/post/books', (req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const genre = req.body.genre;
    const publication_year = req.body.publication_year;
    const language = req.body.language;
    const price = req.body.price;
    const isbn = req.body.isbn;
    const publisher = req.body.publisher;
    const rating = req.body.rating;
    connection.query('INSERT INTO books (title,author,genre,publication_year,language,price,isbn,publisher,rating) VALUES (?,?,?,?,?,?,?,?,?)',[title,author,genre,publication_year,language,price,isbn,publisher,rating], (err, rsl) => {
        if (err)
            res.status(400).send('Error inserting book!!');    
        else
            res.status(200).json({message:'Book inserted succesfully!'});
    });
});

app.put('/put/books/:id', (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const author = req.body.author;
    const genre = req.body.genre;
    const publication_year = req.body.publication_year;
    const language = req.body.language;
    const price = req.body.price;
    const isbn = req.body.isbn;
    const publisher = req.body.publisher;
    const rating = req.body.rating;
    connection.query('UPDATE books SET title=?, author=?, genre=?, publication_year=?, language=?, price=?, isbn=?, publisher=?, rating=? WHERE id=?',[title,author,genre,publication_year,language,price,isbn,publisher,rating,id], (err, rsl)=>{
        if (err)
            res.status(404).json({message:'Book not found!'});
        else
            res.status(200).json({message:'Book updated succesfully!'});
    });
});


app.delete('/delete/books/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM books WHERE id=?', id, (err, rsl) => {
        if (err)
            res.status(404).json({message:'Book not found!'});   
        else    
            res.status(200).json({message:'Book deleted succesfully!'});
    });
});


app.listen(5000, () => {
    console.log(`Server running on port ${5000}!`);
    console.log('Use the link http://localhost:5000/ in chrome to get the page you want to');
});



        