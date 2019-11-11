// const myTodos = [
//     {
//         id: 1,
//         text: "Write the letter",
//         tags: ["important", "writing"],
//         favorite: true,
//         completed: true,
//     },
//     {
//         id: 2,
//         text: "Eat some lunch",
//         tags: ["food"],
//         completed: false,
//         favorite: true,
//     },
//     {
//         id: 3,
//         text: "Run around the city",
//         favorite: false,
//         completed: true,
//     },
// ];

// function daftarKegiatan(data) {
//     let temp = "";
//     for (let i = 0; i < myTodos.length; i++) {
//         // temp = temp + myTodos[i].text;
//         if (myTodos[i].completed === true) {
//             temp = temp + "☑" + myTodos[i].text;
//             // temp = temp + "\n";
//             if (myTodos[i].favorite === true) {
//                 temp = temp + "*";
//                 temp = temp + "\n";
//             }
//         } else if (myTodos[i].completed === false) {
//             temp = temp + "x" + myTodos[i].text;
//             temp = temp + "\n";
//             if (myTodos[i].favorite === false) {
//                 temp = temp + myTodos[i].text + "*";
//                 temp = temp + "\n";
//             }
//         }
//     }
//     return temp;
// }
// // console.log(daftarKegiatan());

//====================================================================================================================================//

function addList() {
    event.preventDefault();
    // create new element
    let input = document.getElementById("todovalue");
    let list = document.getElementById("list");

    if (input.value === "") {
        alert("You must enter a text!");
    } else {
        let text = input.value;
        let li = document.createElement("li");
        li.setAttribute("id", "li-item");
        li.textContent = text;
        list.appendChild(li);
        li.appendChild(addCheckBox());
        // --> fail add delete button
        // li.appendChild(addDeleteButton());
        // let deleteSpan = document.createElement("span")
        // deleteSpan.setAttribute("aria-hidden", "true")
        // deleteSpan.textContent = "&times"
        // del-btn.appendChild(deleteSpan)
    }
    input.value = "";
}

function addCheckBox() {
    let checkBox = document.createElement("input");
    // console.log(checkBox);
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "checklist");
    checkBox.setAttribute("onclick", "strikeThrough(this)");
    return checkBox;
}

function addDeleteButton() {
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "del-btn");
    deleteButton.setAttribute("class", "close");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("aria-label", "Close");
    
    // deleteButton.onclick = deleteItem;
    return deleteButton;
}

function strikeThrough() {
    // console.log(test.id);
    // const id = item.id;
    let listChecker = [...document.querySelectorAll("#li-item")];
    let checker = [...document.querySelectorAll("#checklist")];
    checker.forEach((data, index) => {
        if (checker[index].checked) {
            listChecker[index].style.textDecoration = "line-through";
        } else {
            listChecker[index].style.textDecoration = "none";
        }
    });
}

function deleteList() {
    // event.preventDefault();
    //delete element
    if (!list.hasChildNodes()) {
        alert("To do list are empty!");
    } else {
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
    }
}
