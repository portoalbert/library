let myLibrary = [{
        title: "In Search Of Lost Time",
        author: "Marcel Proust",
        pages: 5
    },
    {
        title: "Ulysses",
        author: "James Joyce",
        pages: 0
    },
    {
        title: "Don Quixote",
        author: "Miguel de Cervantes"
    },
    {
        title: "One Hundred Years of Solitude",
        author: "Gabriel Garcia Marquez"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald"
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
    const divinside = document.createElement('div')
    const trashicon = document.createElement('button')
    div.classList.add("books");
    divinside.classList.add("icons")
    div.setAttribute('id','book'+counter)
    counter ++;
    div.innerHTML = bookname.title + "<br> " +"<br> " + "By: " + bookname.author;
    divinside.innerHTML = "<button class='trash' onclick='deleteBook ();'><img src='img/trashicon.png'></button>"
    divinside.innerHTML += "<button class='favorite' onclick='favoritemarker ();'><img src='img/favoriteiconthree.png'></button>"
    div.appendChild(divinside);
    console.log(div);
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
function favoritemarker () {
    console.log(this);
}
function deleteBook() {
    //console.log(this.book.myLibrary);
}