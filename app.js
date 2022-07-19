let myLibrary = [{
        title: "mobydick",
        author: "Jonh Smith"
    },
    {
        title: "beybalde",
        author: "Albert Porto"
    }
];
const middleDiv = document.getElementById('middleid');


function Book() {
    
}

function addBookToLibrary(title,author) {
    let temp = {};
    temp.title = title;
    temp.author = author;
    myLibrary.push(temp);
}

function displayBooks (bookname){
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    div.classList.add("books");
    div.textContent = bookname.title + " by " + bookname.author;
    fragment.appendChild(div);
    middleDiv.appendChild(fragment);
}
myLibrary.forEach(displayBooks);