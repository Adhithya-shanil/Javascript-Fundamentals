class Library{
    constructor(){
        this.books=[];
    }

    addBook(book){
        this.books.push(book)
        console.log(`The book "${book.title}" has been added to the library.`);
    }

    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`The book "${title}" has been removed.`);
        } else {
            console.log(`Book with title "${title}" not found.`);
        }
    }
    
}

class Books{
    constructor(title, author){
        this.title = title;
        this.author = author;
        this._isavailable=true;
    }
    borrow(){
        if(this.isavailable){
            this.isavailable=false;
            console.log(`The books ${this.title} has been borrowed.`);
        }else {
            console.log(`${this.title} is already borrowed.`);
        }

    }

    returnBook(){
        if (!this.isavailable) {
        this.isavailable = true;
        console.log(`${this.title} has been returned.`);
        } 
        else {
        console.log(`${this.title} wasn't borrowed.`);
    }

    }

    get isavailable(){
        return this._isavailable;
    }

    set isavailable(value){
        if(typeof value == "boolean"){
            this._isavailable=value;
        }
    }
}

// Create the Library
const myLibrary = new Library();

// Create some books
const book1 = new Books("1984", "George Orwell");
const book2 = new Books("Brave New World", "Aldous Huxley");
const book3 = new Books("Fahrenheit 451", "Ray Bradbury");

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Try removing a book that exists
myLibrary.removeBook("Brave New World");  // Should remove and confirm

// Try removing a book that doesn't exist
myLibrary.removeBook("The Hobbit");       // Should say book not found

book1.borrow();
book1.borrow();
book1.returnBook();
book1.returnBook();
book2.borrow();