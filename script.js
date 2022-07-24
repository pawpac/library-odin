const addButton = document.getElementById('add-btn');
const addForm = document.getElementById('add-form');
const addBookBtn = document.getElementById('add-book-btn');
const tableDiv = document.getElementById('table-div');
const containerForBtn = document.querySelector('.container-for-button');

let bookTitle = document.getElementById('title');
let bookAuthor = document.getElementById('author');
let bookPages = document.getElementById('pages');
let bookStatus = document.getElementById('status');

let bookArray = [];

addButton.addEventListener('click', () => {
  addButton.classList.add('hide');
  addForm.classList.remove('hide');
  bookTitle.value = '';
  bookAuthor.value = '';
  bookPages.value = '';
});

addBookBtn.addEventListener('click', () => {
  addButton.classList.remove('hide');
  addForm.classList.add('hide');
  removeChildren(tableDiv);
  addBookToLibrary();
  addToDom();
});

containerForBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains('del')) {
    bookArray.splice(e.target.id, 1);
    removeChildren(tableDiv);
    addToDom();
  }
});

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function checkIfChecked(status) {
  if(status) {
    return "Yes";
  } else {
    return "Not yet"
  }
}

function addBookToLibrary() {
  bookArray.push(new Book(bookTitle.value, bookAuthor.value, bookPages.value, checkIfChecked(bookStatus.checked)));
}

function addToDom() {
  for (let obj of bookArray) {
    let newRow = document.createElement('div');
    newRow.classList.add('row');
    newRow.classList.add('newRow' + bookArray.indexOf(obj).toString());

    let number = document.createElement('div');
    number.classList.add('index-delete');
    number.textContent = (bookArray.indexOf(obj) + 1).toString();
    newRow.appendChild(number);
    tableDiv.appendChild(newRow);

    for (let property in obj) {
      let newElement = document.createElement('div');
      newElement.classList.add('cell');
      newElement.textContent = obj[property];
      let getNewRow = document.querySelector('.newRow' + bookArray.indexOf(obj).toString());
      getNewRow.appendChild(newElement);
    }
    let delBtnDiv = document.createElement('div');
    delBtnDiv.classList.add('index-delete');

    let delBtn = document.createElement('button');
    delBtn.textContent = "X";
    delBtn.classList.add('del');
    delBtn.setAttribute('id', bookArray.indexOf(obj).toString());
    delBtnDiv.appendChild(delBtn);
    newRow.appendChild(delBtnDiv);
  }
}

function removeClassFromRow() {
  let elementWithNewRow = document.querySelector('.newRow');
  elementWithNewRow.classList.remove('newRow');
}

function removeChildren(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}