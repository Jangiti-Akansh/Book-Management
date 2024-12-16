document.addEventListener('DOMContentLoaded', loadBooks);

function loadBooks() {
    fetch('http://localhost:5000/get/books')
        .then(response => response.json())
        .then(data => {
            const bookList = document.getElementById('bookdatalist');
            bookList.innerHTML = '';
            data.forEach(book => {
                const li = document.createElement('li');
                li.textContent = `${book.title} --by ${book.author}`;
                li.dataset.id = book.id;
                li.addEventListener('click', () => getBookById(book.id));
                bookList.appendChild(li);
            });
        })
        .catch(err => 
            console.error(err)
        );
}

function getBooks() {
    return {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        genre: document.getElementById('genre').value,
        publication_year: document.getElementById('publicationYear').value,
        language: document.getElementById('language').value,
        price: document.getElementById('price').value,
        isbn: document.getElementById('isbn').value,
        publisher: document.getElementById('publisher').value,
        rating: document.getElementById('rating').value
    };
}


function getBookById(id) {
    fetch(`http://localhost:5000/get/books/${id}`)  
        .then(response => response.json())
        .then(book => {
            document.getElementById('title').value = book.title;
            document.getElementById('author').value = book.author;
            document.getElementById('genre').value = book.genre;
            document.getElementById('publicationYear').value = book.publication_year;
            document.getElementById('language').value = book.language;
            document.getElementById('price').value = book.price;
            document.getElementById('isbn').value = book.isbn;
            document.getElementById('publisher').value = book.publisher;
            document.getElementById('rating').value = book.rating;
            document.querySelectorAll('#bookdatalist li').forEach(li => 
                li.classList.remove('selected')
            );
            document.querySelector(`#bookdatalist li[data-id="${id}"]`).classList.add('selected');
        })
        .catch(err => 
            console.error(err)
        );
}

function addBook() {
    const book = getBooks();
    fetch('http://localhost:5000/post/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    .then(response => response.json())
    .then(data => {
        alert('Book added successfully!');
        loadBooks();
        clearFields();
    })
    .catch(err => 
        console.error(err)
    );
}

function editBook() {
    const book = getBooks();
    const id = document.getElementById('bookdatalist').querySelector('.selected').dataset.id;
    fetch(`http://localhost:5000/put/books/${id}`, {  
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    .then(response => response.json())
    .then(data => {
        alert('Book updated successfully!');
        loadBooks();
        clearFields();
    })
    .catch(err => 
        console.error(err)
    );
}

function deleteBook() {
    const id = document.getElementById('bookdatalist').querySelector('.selected').dataset.id;
    fetch(`http://localhost:5000/delete/books/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        alert('Book deleted successfully!');
        loadBooks();
        clearFields();
    })
    .catch(err => 
        console.error(err)
    );
}

function clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('publicationYear').value = '';
    document.getElementById('language').value = '';
    document.getElementById('price').value = '';
    document.getElementById('isbn').value = '';
    document.getElementById('publisher').value = '';
    document.getElementById('rating').value = '';
    document.querySelectorAll('#bookdatalist li').forEach(li=> 
        li.classList.remove('selected')
    );
}


