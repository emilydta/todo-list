import { createNewTodo } from "./createNewTodo";
import { todoFunctions } from "./todoFunctions";

const createDisplay = () => {
    const useFunction = todoFunctions();
    const overlay = document.getElementById('overlay');
    const newTodoScreen = document.getElementById('todo-screen');

    const createMainHeader = (mainFolder) => {
        const mainHeader = document.createElement('div');
        const mainHeaderText = document.createElement('h1');
        const newTodoButton = document.createElement('div');
        mainHeader.setAttribute('id', 'main-header');
        newTodoButton.setAttribute('id', 'add-new-todo');
        mainHeaderText.innerText = "TODO App";
        newTodoButton.innerText = "Add New Todo";
        mainHeader.appendChild(mainHeaderText);
        mainHeader.appendChild(newTodoButton);
        document.body.appendChild(mainHeader);

        mainHeader.addEventListener('click', (e) => {
            if (e.target.id == "add-new-todo") {
                createNewTodoScreen(mainFolder);
            }
        })
    }

    const createTodoListDisplay = (todoFolderName, todoFolder, mainFolder) => {
        //hideTodoScreen();
        const bodyContainer = document.getElementById('body-container');

        // Creates todo container and heading
        const todoDisplay = document.createElement('div');
        todoDisplay.setAttribute('id', 'todo-list-container');
        todoDisplay.setAttribute('class', `${todoFolderName}`);

        const todoDisplayHeading = document.createElement('h2');
        todoDisplayHeading.setAttribute('id', 'container-heading');
        todoDisplayHeading.innerText = todoFolderName;
        todoDisplay.appendChild(todoDisplayHeading);

        // Creates todo containers and attached buttons/features
        todoFolder.forEach(todo => {
            const todoContainer = document.createElement('div');
            const todoData = document.createElement('div');
            todoData.setAttribute('id', `${todo.idNumber}`);
            todoContainer.setAttribute('class', `todo-container ${todo.idNumber}`);

            const todoExpander = document.createElement('div');
            todoExpander.setAttribute('class', `todo-expander`);
            todoExpander.style.display = 'none';
            todoExpander.style.flexWrap = 'wrap';
            Object.keys(todo).forEach(key => {
                if (key == "idNumber") {
                    return;
                }
                const todoKeys = document.createElement('div');
                const todoValues = document.createElement('div');
                todoKeys.setAttribute('class', `todo-key`)
                todoValues.setAttribute('class', `todo-value`);
                todoKeys.innerText = `${key}:`;
                if (!todo[key]) {
                    todoValues.innerText = '-';
                } else 
                todoValues.innerText = todo[key];
                todoExpander.appendChild(todoKeys);
                todoExpander.appendChild(todoValues);
            })
            todoData.innerText = `${todo.Title} - ${todo.Date} ${todo.Time}`;

            const buttonContainer = document.createElement('div');
            buttonContainer.setAttribute('class', 'button-container');

            const editButton = document.createElement('div');
            editButton.setAttribute('class', `edit ${todo.idNumber}`);
            editButton.innerText = "Edit";

            const removeButton = document.createElement('div');
            removeButton.setAttribute('class', `remove ${todo.idNumber}`);
            removeButton.innerText = "Remove";
            
            todoContainer.appendChild(todoData);
            todoContainer.appendChild(todoExpander);
            buttonContainer.appendChild(editButton);
            buttonContainer.appendChild(removeButton);
            todoContainer.appendChild(buttonContainer);
            todoDisplay.appendChild(todoContainer); 
            bodyContainer.appendChild(todoDisplay);          

            todoData.addEventListener("click", (e) => {
                if (e.target.id == todo.idNumber) {
                    if (todoExpander.style.display == "flex") {
                        todoExpander.style.display = "none";
                    } else 
                    todoExpander.style.display = "flex";
                }
            })

            buttonContainer.addEventListener('click', (e) => {
                if (e.target.classList[0] == 'remove') {
                    mainFolder.todos.forEach((todo, index) => {
                        if (e.target.classList[1] == todo.idNumber) {
                            mainFolder.todos.splice(index, 1);
                            displayTodos(mainFolder, todo.Folder);
                        }
                    })  
                }
                if (e.target.classList[0] == 'edit') {
                    mainFolder.todos.forEach(todo => {
                        if (e.target.classList[1] == todo.idNumber) {
                            createEditScreen(todo, mainFolder);
                            const editButton = document.getElementById('confirm-edit');
                            editButton.classList.add(todo.idNumber);
                        }
                    }) 
                }
            })
        })
        document.addEventListener('click', (e) => {
            if (e.target.id == "confirm-todo") {
                if (!useFunction.titleInput.value || !useFunction.folderDropdown.value) {
                    return alert ("Please add a Title and Folder for your todo.")
                } 
                createNewTodo();
                const foldersContainer = document.getElementById('folders-container');
                foldersContainer.childNodes.forEach(listing => {
                    if (listing.classList == 'active') {
                        hideTodoScreen();
                        displayTodos(mainFolder, listing);
                    }
                })
            }
            if (e.target.id == "cancel-new-todo") {
                hideTodoScreen();
            }
        })
    }

    const getFolderHeadings = (mainFolder) => {
        let folders = [];
        mainFolder.todos.forEach((todo => {
            Object.keys(todo).forEach(key => {
                if (key == "Folder") {
                    folders.push(todo[key]);
                }
            })
        })) 
        const uniqueFolders = [...new Set(folders)];
        return uniqueFolders
    }

    const getSidebarFolders = () => {
        let folders = [];
        const sidebarFolders = document.getElementById('folders-container');
        sidebarFolders.childNodes.forEach(listing => {
            if (listing.tagName == 'LI') {
                folders.push(listing.innerText);
            }
        })
        return folders;
    }

    const getAllFolders = (mainFolder) => {
        const todoFolders = getFolderHeadings(mainFolder);
        const sidebarFolders = getSidebarFolders();
        const combinedFolders = sidebarFolders.concat(todoFolders);
        const uniqueFolders = [...new Set(combinedFolders)];
        return uniqueFolders;
    }

    const displayTodos = (mainFolder, folder) => {
        const todoListContainer = document.getElementById('todo-list-container');
        todoListContainer.remove();

        let todoList = [];
        let folderName = '';
        mainFolder.todos.forEach((todo => {
            if (todo.Folder == folder) {
                todoList.push(todo);
                folderName = todo.Folder
            }
        }));
        createTodoListDisplay(folderName, todoList, mainFolder);
    }

    const createSidebar = (mainFolder) => {
        const bodyContainer = document.createElement('div');
        bodyContainer.setAttribute('id', 'body-container');
        document.body.appendChild(bodyContainer);

        const sidebar = document.createElement('div');
        sidebar.setAttribute('id', 'sidebar');

        const foldersContainer = document.createElement('div');
        foldersContainer.setAttribute('id', 'folders-container');

        const foldersContainerHeading = document.createElement('h2');
        foldersContainerHeading.setAttribute('id', 'folders-heading');
        foldersContainerHeading.innerText = "Folders";
        foldersContainer.appendChild(foldersContainerHeading);

        const createNewFolderButton = document.createElement('div');
        createNewFolderButton.setAttribute('id', 'create-new-folder');
        createNewFolderButton.innerText = "Add Folder";
        
        const uniqueFolders = getFolderHeadings(mainFolder);  

        uniqueFolders.forEach(folder => {
            const folderListing = document.createElement('li');
            folderListing.setAttribute('id', folder);
            folderListing.innerText = folder;
            foldersContainer.appendChild(folderListing);
        })

        foldersContainer.appendChild(createNewFolderButton);
        sidebar.appendChild(foldersContainer);
        bodyContainer.appendChild(sidebar); 
        
        foldersContainer.addEventListener('click', (e) => {
            if (e.target.id == "all-todos") {
                foldersContainer.childNodes.forEach((listing) => {
                    listing.classList.remove('active');
                });
                e.target.classList.add('active');
                const todoListContainer = document.getElementById('todo-list-container');
                todoListContainer.remove();
                createTodoListDisplay('All Todos', mainFolder.todos, mainFolder);
            }

            uniqueFolders.forEach(folder => {
                if (e.target.id == folder) {
                    foldersContainer.childNodes.forEach((listing) => {
                        listing.classList.remove('active');
                    });
                    e.target.classList.add('active');
                    displayTodos(mainFolder, folder);
                    return;
                }
            })  
        }) 
    }

    const hideTodoScreen = () => {
        overlay.style.display = "none";
        newTodoScreen.style.display = "none";
    }
    
    const showTodoScreen = () => {
        overlay.style.display = "flex";
        newTodoScreen.style.display = "flex";
    }

    const populateFolderDropdown = (mainFolder) => {
        const uniqueFolders = getAllFolders(mainFolder);
        //console.log(uniqueFolders)

        const folderDropdown = document.getElementById('folder-dropdown');
        folderDropdown.innerHTML = "";
        uniqueFolders.forEach(folder => {
            const newFolderListing = document.createElement(`option`);
            //newFolderListing.setAttribute('class', `${folder}`);
            newFolderListing.innerText = folder;
            newFolderListing.value = folder;
            folderDropdown.appendChild(newFolderListing);
        })
    }

    const addNewSidebarFolder = (mainFolder) => {
        const uniqueFolders = getAllFolders(mainFolder);
        const newFolderInput = document.getElementById('new-folder-input')
        let newFolderExists = false;
        uniqueFolders.forEach(folder => {
            if (newFolderInput.value == folder) {
                alert("Folder already exists.");
                newFolderExists = true;
            }  
        })
        if (newFolderExists == false) {
            uniqueFolders.push(newFolderInput.value);
            const newFolderButton = document.getElementById('create-new-folder');
            const folderListing = document.createElement('li');
            const foldersContainer = document.getElementById('folders-container');
            const newFolderScreen = document.getElementById('new-folder-container');
            folderListing.setAttribute('id', newFolderInput.value);
            folderListing.innerText = newFolderInput.value;
            foldersContainer.insertBefore(folderListing, newFolderButton);
            newFolderScreen.classList = "hide";
        }
    }

    const createNewTodoScreen = (mainFolder) => {
        useFunction.resetInputValues();
        let confirmTodo = document.getElementsByClassName('todo-action-button');
        confirmTodo[0].setAttribute('id', 'confirm-todo');
        confirmTodo[0].innerText = 'Add Todo';
        showTodoScreen();
        populateFolderDropdown(mainFolder);
    }

    const createNewFolderScreen = (mainFolder) => {
        const foldersContainer = document.getElementById('folders-container');
        
        const newFolderScreen = document.createElement('div');
        newFolderScreen.setAttribute('id', 'new-folder-container');
        newFolderScreen.setAttribute('class', 'hide');

        const newFolderInput = document.createElement('input');
        newFolderInput.setAttribute('id', 'new-folder-input');
        newFolderInput.setAttribute('placeholder', "Folder");

        const addFolder = document.createElement('div');
        addFolder.setAttribute('id', 'add-new-folder');
        addFolder.innerText = "+";

        newFolderScreen.appendChild(newFolderInput);
        newFolderScreen.appendChild(addFolder);
        foldersContainer.appendChild(newFolderScreen);

        foldersContainer.addEventListener('click', (e) => {
            if (e.target.id == "create-new-folder") {
                if (newFolderScreen.classList == 'active') {
                    newFolderScreen.classList = 'hide'
                } else newFolderScreen.classList = "active";
            }
            if (e.target.id == "add-new-folder") {
                if (!newFolderInput.value) {
                    return;
                }
                addNewSidebarFolder(mainFolder);
            }
        })
    }

    const createEditScreen = (todo, mainFolder) => {
        useFunction.editTodoInputData(todo);
        let confirmEdit = document.getElementsByClassName('todo-action-button');
        confirmEdit[0].setAttribute('id', 'confirm-edit');
        confirmEdit[0].innerText = 'Edit';
        populateFolderDropdown(mainFolder);
        showTodoScreen();
        document.addEventListener('click', (e) => {
            if (e.target.id == "confirm-edit") {
                useFunction.editTodo(todo);
                hideTodoScreen();
                displayTodos(mainFolder, todo.Folder);
            }
        }) 
    }

    return {
        createMainHeader,
        createTodoListDisplay,
        createSidebar,
        createNewFolderScreen,
    }
}

export { createDisplay };