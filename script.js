const addButton = document.getElementById('add-btn');
const addForm = document.getElementById('add-form');
const addBookBtn = document.getElementById('add-book-btn');
const table = document.getElementById('table');

let bookTitle = document.getElementById('title');
let bookAuthor = document.getElementById('author');
let bookPages = document.getElementById('pages');
let bookStatus = document.getElementById('status');

let bookArray = [];
let bookLibrary = [];

addButton.addEventListener('click', () => {
  addButton.classList.add('hide');
  addForm.classList.remove('hide');



  removeClassFromRow();
});

addBookBtn.addEventListener('click', () => {
  addButton.classList.remove('hide');
  addForm.classList.add('hide');

  addBookToLibrary();
  addToDom();
  console.log(bookLibrary);
  console.log(bookLibrary[bookLibrary.length - 1]);

});

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  bookArray.push(new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.value));
  bookLibrary.push(new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.value));
}

function addToDom() {
  let newRow = document.createElement('tr');
  newRow.classList.add('newRow');
  table.appendChild(newRow);

  // for (let obj of bookArray) {

    for (let property in bookLibrary[bookLibrary.length - 1]) {
      let newElement = document.createElement('td');
      newElement.textContent = bookLibrary[bookLibrary.length - 1][property];
      let getNewRow = document.querySelector('.newRow');
      getNewRow.appendChild(newElement);
    }
  // }
  // bookArray = [];
}

function removeClassFromRow() {
  let elementWithNewRow = document.querySelector('.newRow');
  elementWithNewRow.classList.remove('newRow');
}







