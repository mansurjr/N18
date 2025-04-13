const fs = require("fs");

if (!fs.existsSync("./product.json")) {
  fs.writeFileSync("./product.json", JSON.stringify([]));
}

function readData() {
  return JSON.parse(fs.readFileSync("./product.json", "utf-8"));
}

function writeData(books) {
  fs.writeFileSync("./product.json", JSON.stringify(books));
}

class Book {
  findAll() {
    let books = readData();
    console.log("All books:", books);
  }

  findOne(id) {
    let books = readData();
    let book = books.find((val) => val.id == id);
    if (book) {
      console.log("Find book:", book);
    } else {
      console.log("Not found book");
    }
  }

  create(data) {
    let books = readData();

    // Ensure name is unique
    let nameExists = books.some((book) => book.name === data.name);
    if (nameExists) {
      console.log("Book with this name already exists.");
      return;
    }

    let leng = books.length;
    books.push({
      id: leng == 0 ? 1 : books.at(-1).id + 1,
      ...data,
    });
    writeData(books);
  }

  update(id, data) {
    let books = readData();
    let bookIndex = books.findIndex((val) => val.id == id);
    if (bookIndex == -1) {
      console.log("Not found book");
      return;
    }
    books[bookIndex] = {
      ...books[bookIndex],
      ...data,
    };
    writeData(books);
  }

  remove(id) {
    let books = readData();
    books = books.filter((val) => val.id != id);
    writeData(books);
  }

  filter(filters) {
    let books = readData();
    let filteredBooks = books.filter((book) => {
      return Object.keys(filters).every((key) => {
        return book[key] && book[key].toString().toLowerCase().includes(filters[key].toLowerCase());
      });
    });
    console.log("Filtered books:", filteredBooks);
  }
}

let books = new Book();

books.create({ name: "Xamsa", author: "Alisher Navoiy", total_page: 456 });
books.findAll();
books.filter({ name: "Xamsa", author: "Alisher" });