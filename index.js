const urlInput = document.querySelector('#url-input');
const nameInput = document.querySelector('#name-input');
const addBtn = document.querySelector('#add-btn');
const bookMarkList = document.querySelector('#bookmark-list');

let bookMarks = [];

addBtn.addEventListener('click', () =>{
    const bookmarkObj = {
        link: urlInput.value,
        name: nameInput.value
    }
    bookMarks.push(bookmarkObj);
    urlInput.value="";
    nameInput.value="";

    render();
});




function render(){
    const arry = bookMarks.map(makeListItem)
    bookMarkList.innerHTML='';
    for(const item of arry){
        bookMarkList.append(item);
    }
}


function makeListItem (obj){
    const listelm = document.createElement('li');
    const nameField = document.createElement('span');
    nameField.innerText = obj.name;
    listelm.append(nameField);
    const urlField = document.createElement('a');
    urlField.href = obj.link;
    urlField.innerText = obj.link;
    listelm.append(urlField);
    const delBtn = document.createElement('button');
    delBtn.innerText = 'Delete Bookmark';
    delBtn.addEventListener("click", () => {
        deleteFunction(obj.name)
    });
    listelm.append(delBtn);
    return listelm;
}

function deleteFunction(name){
    bookMarks = bookMarks.filter(item => item.name !== name);
    render();
}


