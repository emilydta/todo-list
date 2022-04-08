const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const priorityDropdown = document.getElementById('priority-dropdown');
const folderDropdown = document.getElementById('folder-dropdown');
const folderNameInput = document.getElementById('folder-name-input');
const sideMenuFolders = document.getElementById('side-menu-folders');
const todoDisplay = document.getElementById('todo-display');

masterFolder = [{
    folderName: "folder",
    todos: [{
        title: "thing",
        description: "desciprwf",
        priority: "High",
        folder: "",
        idNumber: "123"
    },
    {
        title: "bloop",
        description: "desciprwf",
        priority: "Low",
        folder: "",
        idNumber: "124"
    },
    {
        title: "sdfp",
        description: "desciprwf",
        priority: "Low",
        folder: "",
        idNumber: "127"
    },
],
    idNumber: "all-todos"
},
];

const createIdNumber = () => {
    let idNumber = + new Date();
    return idNumber
}

const newFolderTemplate = (folderName, todos, idNumber) => {
    const updateListDisplay = (listParent, elementType) => {
        for (i = 0; i < listParent.length; i++) {
            listParent.remove(i);
        }
        masterFolder.forEach(item => {
            const newItem = document.createElement(`${elementType}`);
            newItem.setAttribute('class', `${masterFolder[masterFolder.indexOf(item)].idNumber}`)
            newItem.innerText = item.folderName;
            listParent.appendChild(newItem);
        })
    }
    return { folderName, todos, idNumber, updateListDisplay }
}


const newTodoTemplate = (title, description, priority, folder, todoId) => {
    return { title, description, priority, folder, todoId }
}

const addToMasterFolder = (folder) => {
    masterFolder.push(folder);
    masterFolder.sort((a,b) => a.folderName.localeCompare(b.folderName));
}

addToFolders = (todo) => {
    masterFolder.forEach(folder => {
        if (masterFolder[masterFolder.indexOf(folder)].idNumber == folderDropdown.className) {
            masterFolder[masterFolder.indexOf(folder)].todos.push(todo);
        }
    });
    allTodos.todos.push(todo);
}

const createNewTodo = (newTodo) => {
    if (!titleInput.value) {
        return //add function to highlight empty field;
    } else 
    newTodo = newTodoTemplate(`${titleInput.value}`, `${descriptionInput.value}`, `${priorityDropdown.innerText}`, `${folderDropdown.innerText}`, `${createIdNumber()}`);
    addToFolders(newTodo);
}

const updateAllListDIsplays = (list) => {
    list.updateListDisplay(folderDropdown, "option");
    list.updateListDisplay(sideMenuFolders, "li"); 
}

const createNewFolder = (newFolder) => {
    if (!folderNameInput.value) {
        return //add function to highlight empty field;
    } else 
    newFolder = newFolderTemplate(`${folderNameInput.value}`, [], createIdNumber());
    addToMasterFolder(newFolder);
    updateAllListDIsplays(newFolder);
}

//Data present when first loading page
const project = newFolderTemplate("Project", [{title: "boop", idNumber: "156"}], "id-2");
addToMasterFolder(project);
updateAllListDIsplays(project);

const changeFolderInDisplay = (folder) => {
    todoDisplay.innerHTML = "";
    folder();
}

    
    
document.addEventListener("click", (e) => {
    for (i = 0; i < sideMenuFolders.childNodes.length; i++) { 
        if (e.target.className == masterFolder[i].idNumber) {
            todoDisplay.innerText = '';
            for (j = 0; j < masterFolder[i].todos.length; j++) {
                let row = document.createElement('li');
                row.setAttribute('class', masterFolder[i].todos[j].idNumber)
                row.innerText = `${masterFolder[i].todos[j].title}`;
                todoDisplay.appendChild(row);
            } 
        }
    }
});





