let myLibrary = [
    {
      id: 1,
      title: "In Search Of Lost Time",
      author: "Marcel Proust",
      pages: 5,
    },
    //   {
    //     id: 2,
    //     title: "Ulysses",
    //     author: "James Joyce",
    //     pages: 0,
    //   },
    //   {
    //     id: 3,
    //     title: "Don Quixote",
    //     author: "Miguel de Cervantes",
    //   },
    //   {
    //     id: 4,
    //     title: "One Hundred Years of Solitude",
    //     author: "Gabriel Garcia Marquez",
    //   },
    //   {
    //     id: 5,
    //     title: "The Great Gatsby",
    //     author: "F. Scott Fitzgerald",
    //   },
  ];
  
  const middleDiv = document.getElementById("middleid");
  const popup = document.querySelector(".popup");
  const titleinp = document.getElementById("booktitle");
  const authorinp = document.getElementById("author");
  const pagesinp = document.getElementById("pages");
  
  let counter = 0;
  let idCouter = 0;
  function Book() {}
  
  function addBookToLibrary(title, author, pages) {
    let temp = {};
    temp.title = title;
    temp.author = author;
    temp.pages = pages;
    temp.id = idCouter;
    idCouter++;
    myLibrary.push(temp);
  }
  
  function displayBooks(bookname) {
    //   console.log("bookname: ", bookname);
    const fragment = document.createDocumentFragment();
    const div = document.createElement("div");
    const divinside = document.createElement("div");
    const trashicon = document.createElement("button");
  
    div.classList.add("books");
    divinside.classList.add("icons");
    div.setAttribute("id", "book" + counter);
    counter++;
    div.innerHTML = bookname.title + "<br> " + "<br> " + "By: " + bookname.author;
  
    divinside.innerHTML = `<button class='trash' onclick='deleteBook (${bookname.id});'><img src='img/trashicon.png'></button>`;
    divinside.innerHTML +=
      "<button class='favorite' id='start-btn'><img src='img/favoriteiconthree.png'></button>";
    div.appendChild(divinside);
    const buttonFav = div.getElementsByClassName("favorite")[0];
    buttonFav.addEventListener("click", myFunction);
    fragment.appendChild(div);
    middleDiv.appendChild(fragment);
  }
  
  function myFunction(event) {
    console.log("event", event.target);
    event.target.src = "img/favoriteicontwo.png";
  }
  
  function remover() {
    while (middleDiv.firstChild) {
      middleDiv.removeChild(middleDiv.lastChild);
    }
  }
  
  function eventDelete(event) {
    event.target.style.backgroundColor = "salmon";
  }
  
  myLibrary.forEach(displayBooks);
  function popCloser() {
    popup.style.display = "none";
  }
  function popOpener() {
    popup.style.display = "flex";
  }
  
  function bookAdder() {
    if (titleinp.value.length == 0) {
      popCloser();
    } else {
      addBookToLibrary(titleinp.value, authorinp.value, pagesinp.value);
      remover();
      myLibrary.forEach(displayBooks);
      popCloser();
    }
  }
  function favoritemarker() {
    console.log(this);
  }
  function deleteBook(bookId) {
    const newLibrary = myLibrary.filter((book) => book.id !== bookId);
    myLibrary = newLibrary;
    remover();
    myLibrary.forEach(displayBooks);
  }