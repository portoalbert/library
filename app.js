let myLibrary = [{
        title: "mobydick",
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
const titleinp = document.getElementById('booktitle')
const episodeinp = document.getElementById('author')

function Book() {
    
}

function addBookToLibrary(title,author,pages) {
    let temp = {};
    temp.title = title;
    temp.author = author;
    temp.pages =pages;
    myLibrary.push(temp);
}

function displayBooks (bookname){
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    div.classList.add("books");
    div.textContent = bookname.title; + "\r\n";
    div.textContent += bookname.author;
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
    if (titleinp.value.length == 0 && episodeinp.value.length == 0){
        popCloser();
    }
    else {
    addBookToLibrary(titleinp.value,episodeinp.value);
    remover ();
    myLibrary.forEach(displayBooks);
    popCloser();
    }
}