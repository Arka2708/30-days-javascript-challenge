//Task1
let book1 ={
    title: "Sherlock Holmes",
    author: "Sir Arthur Conan Doyle",
    year: 1882,
}
console.log(book1)
console.log("\n")

//Task 2
console.log("Book1 : " + book1["title"])
console.log("Author: " + book1.author + "\n")

//Task 3
book1.getBook = function(){
    return `Title : ${this.title}, Author: ${this.author} `
}
let x = book1.getBook()
console.log(x + "\n")

//Task 4
book1.updateYear =function(y){
    this.year =y
}
book1.updateYear(1887)
console.log("Book1 object after updation: ")
console.log(book1)
console.log("\n")

//Task 5
let book2 ={
    title: "Death on the Nile",
    author: "Agatha Christie",
    year: 1937,
}
let library = {
    name: "National Library",
    books: [book1,book2]
}
console.log(library)
console.log("\n")

//Task 6
library.getAllBooks = function(){
    this.books.forEach(book => {
        console.log(book.title)
    });
}
console.log("Library Name : " + library.name + "\n")
library.getAllBooks();

//Task 7
book1.getTitleYear = function(){
    return `Title:${this.title}, Year:${this.year}`
}

x = book1.getTitleYear()
console.log(x + "\n")

//Task 8
for (const key in book2) {
    if (Object.hasOwnProperty.call(book2, key)) {
        console.log(key+ ": " + book2[key])
    }
}
console.log("\n")
//Task 9
const keys = Object.keys(book2);
const values = Object.values(book2);

console.log('Keys:', keys);
console.log('Values:', values);

keys.forEach((key, index) => {
  console.log(`${key}: ${values[index]}`);
});
