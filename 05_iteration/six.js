const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filArray = num.filter((item) => {
    return item >= 4
})

const newNum = []
console.log(filArray);
num.forEach((item) => {
    if (item >= 4) {
        newNum.push(item)

    }
})
console.log(newNum);

const book =

    [
        {
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "publication_year": 1925,
            "genre": "Classic",
            "isbn": "978-0743273565"
        },
        {
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "publication_year": 1960,
            "genre": "Fiction",
            "isbn": "978-0446310789"
        },
        {
            "title": "1984",
            "author": "George Orwell",
            "publication_year": 1949,
            "genre": "Dystopian",
            "isbn": "978-0451524935"
        }
    ]

const bookData = book.filter((bk) => bk.genre == "Dystopian")
console.log(bookData);
