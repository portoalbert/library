let myLibrary = [{
        title: "MOBYDICK",
        author: "Jonh Smith",
        pages: 5
    },
    {
        title: "beybalde",
        author: "Albert Porto"
    },
    {
        title: "beybalde",
        author: "Albert Porto"
    },
    {
        title: "beybalde",
        author: "Albert Porto"
    },
    {
        title: "beybalde",
        author: "Albert Porto"
    },
];
const middleDiv = document.getElementById('middleid');
const popup = document.querySelector('.popup');
const titleinp = document.getElementById('booktitle');
const authorinp = document.getElementById('author');
const pagesinp = document.getElementById('pages');
let counter = 0;
function Book() {
    
}

function addBookToLibrary(title,author,pages) {
    let temp = {};
    temp.title = title;
    temp.author = author;
    temp.pages = pages;
    myLibrary.push(temp);
}

function displayBooks (bookname){
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const trashicon = document.createElement('button')
    div.classList.add("books");
    div.setAttribute('id','book'+counter)
    counter ++;
    div.innerHTML = "Book: " + bookname.title + "<br> " + "<br> " + "By: " + bookname.author +  "<br> " +  "<br> " + "Pages: " + bookname.pages;
    div.innerHTML += "<br> " + "<button class='trash' onclick='deleteBook ();'><img src='img/trashicon.png'></button>"
    fragment.appendChild(div);
    middleDiv.appendChild(fragment);
}
function remover (){
    while (middleDiv.firstChild) {
        middleDiv.removeChild(middleDiv.lastChild);
    }
}
myLibrary.forEach(displayBooks);

function popCloser (){
    popup.style.display = "none";
}
function popOpener (){
    popup.style.display = "flex";
}
function bookAdder (){
    if (titleinp.value.length == 0){
        popCloser();
    }
    else {
    addBookToLibrary(titleinp.value,authorinp.value,pagesinp.value);
    remover ();
    myLibrary.forEach(displayBooks);
    popCloser();
    }
}
function deleteBook() {
    //console.log(this.book.myLibrary);
}