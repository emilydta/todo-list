import { createNewTodo } from "./createNewTodo";
import { createNewFolder } from "./createNewFolder";
import { todoFunctions } from "./todoFunctions";

const useFunction = todoFunctions();

const createDisplay = () => {
    const overlay = document.getElementById('overlay');
    const newTodoScreen = document.getElementById('todo-screen');

    const createHeader = () => {
        const mainHeader = document.createElement('div');
        const mainHeaderText = document.createElement('h1');
        const newTodoButton = document.createElement('div');
        mainHeader.setAttribute('id', 'main-header');
        newTodoButton.setAttribute('id', 'add-new-todo');
        mainHeaderText.innerText = "TODO App";
        newTodoButton.innerText = "Add New Todo";
        mainHeader.appendChild(mainHeaderText);
        mainHeader.appendChild(newTodoButton);
        return document.body.appendChild(mainHeader);
    }
    const createFolderContentsDisplay = (todoFolder) => {
        hideTodoScreen();

        // Creates main container and heading
        const folderContainer = document.createElement('div');
        folderContainer.setAttribute('id', 'todo-list-container');
        folderContainer.setAttribute('class', `${todoFolder.idNumber}`);

        const containerHeading = document.createElement('h2');
        containerHeading.setAttribute('id', 'container-heading');
        containerHeading.innerText = todoFolder.folderName;
        folderContainer.appendChild(containerHeading);

        // Creates list of todos and attached buttons/features
        todoFolder.todos.forEach(todo => {
            const todoDiv = document.createElement('div');
            const todoRow = document.createElement('div');
            todoRow.setAttribute('id', `${todo.idNumber}`);
            todoDiv.setAttribute('class', `todo-div ${todo.idNumber}`);

            const todoExpander = document.createElement('div');
            todoExpander.setAttribute('class', `todo-expander`);
            todoExpander.style.display = 'none';
            todoExpander.style.flexWrap = 'wrap';
            Object.keys(todo).forEach(key => {
                if (key == "idNumber" || key == "FolderId") {
                    return;
                }
                const todoKeys = document.createElement('div');
                const todoData = document.createElement('div');
                todoKeys.setAttribute('class', `todo-key`)
                todoData.setAttribute('class', `todo-value`);
                todoKeys.innerText = `${key}:`;
                if (!todo[key]) {
                    todoData.innerText = '-';
                } else 
                todoData.innerText = todo[key];
                todoExpander.appendChild(todoKeys);
                todoExpander.appendChild(todoData);
            })
            todoRow.innerText = `${todo.Title} ${todo.Date}`;

            const buttonContainer = document.createElement('div');
            buttonContainer.setAttribute('class', 'button-container');

            const editButton = document.createElement('div');
            editButton.setAttribute('class', `edit ${todo.idNumber}`);
            editButton.innerText = "Edit";

            const removeButton = document.createElement('div');
            removeButton.setAttribute('class', `remove ${todo.idNumber}`);
            removeButton.innerText = "Remove";
            
            todoDiv.appendChild(todoRow);
            todoDiv.appendChild(todoExpander);
            buttonContainer.appendChild(editButton);
            buttonContainer.appendChild(removeButton);
            todoDiv.appendChild(buttonContainer);
            folderContainer.appendChild(todoDiv);

            todoRow.addEventListener("click", (e) => {
                if (e.target.id == todo.idNumber) {
                    if (todoExpander.style.display == "flex") {
                        todoExpander.style.display = "none";
                    } else 
                    todoExpander.style.display = "flex";
                }
            })
        })
        return containers.appendChild(folderContainer);
    }

    const createSidebar = (mainFolder) => {
        const containers = document.createElement('div');
        containers.setAttribute('id', 'containers');
        document.body.appendChild(containers);

        const sidebar = document.createElement('div');
        const folders = document.createElement('div');
        sidebar.setAttribute('id', 'sidebar');
        folders.setAttribute('id', 'folders');

        const foldersHeading = document.createElement('h2');
        foldersHeading.setAttribute('id', 'folders-heading');
        foldersHeading.innerText = "Folders";
        folders.appendChild(foldersHeading);

        const createNewFolderButton = document.createElement('div');
        createNewFolderButton.setAttribute('id', 'create-new-folder');
        createNewFolderButton.innerText = "Add Folder";
        
        mainFolder.forEach(folder => {
            const folderListing = document.createElement('li');
            folderListing.setAttribute('id', `${folder.idNumber}`);
            folderListing.innerText = folder.folderName;
            folders.appendChild(folderListing);
        })

        folders.appendChild(createNewFolderButton);
        sidebar.appendChild(folders); 
        return containers.appendChild(sidebar);
    }

    const createNewFolderListing = (folder) => {
        const folders = document.getElementById('folders');
        const folderButton = document.getElementById('create-new-folder');
        const folderListing = document.createElement('li');
        folderListing.setAttribute('id', `${folder.idNumber}`);
        folderListing.innerText = folder.folderName;
        folders.insertBefore(folderListing, folderButton);
    }

    const populateFolderDropdown = (mainFolder) => {
        const folderDropdown = document.getElementById('folder-dropdown');
        folderDropdown.innerHTML = "";
        for (let folder in mainFolder) {
            const newFolderListing = document.createElement(`option`);
            newFolderListing.setAttribute('class', `${mainFolder[folder].idNumber}`);
            newFolderListing.innerText = mainFolder[folder].folderName;
            newFolderListing.value = mainFolder[folder].idNumber;
            folderDropdown.appendChild(newFolderListing);
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

    const createNewFolderScreen = () => {
        const folders = document.getElementById('folders');
        
        const container = document.createElement('div');
        container.setAttribute('id', 'new-folder-container');
        container.setAttribute('class', 'hide');

        const newFolderInput = document.createElement('input');
        newFolderInput.setAttribute('id', 'new-folder-input');
        newFolderInput.setAttribute('placeholder', "Folder");

        const addFolder = document.createElement('div');
        addFolder.setAttribute('id', 'add-new-folder');
        addFolder.innerText = "+";

        container.appendChild(newFolderInput);
        container.appendChild(addFolder);
        folders.appendChild(container);
    }

    const createEditScreen = (mainFolder) => {
        useFunction.resetInputValues();
        let confirmEdit = document.getElementsByClassName('todo-action-button');
        confirmEdit[0].setAttribute('id', 'confirm-edit');
        confirmEdit[0].innerText = 'Edit';
        showTodoScreen();
        populateFolderDropdown(mainFolder);
    }

    const hideTodoScreen = () => {
        overlay.style.display = "none";
        newTodoScreen.style.display = "none";
    }
    
    const showTodoScreen = () => {
        overlay.style.display = "flex";
        newTodoScreen.style.display = "flex";
    }

    const sidebarFolderButtonFunctionality = (mainFolder) => {
        const sidebar = document.getElementById('sidebar');
        const folders = document.getElementById('folders');
        sidebar.addEventListener('click', (e) => {
            for (let folder in mainFolder) {
                if (e.target.id == mainFolder[folder].idNumber) {
                    const todoListContainer = document.getElementById('todo-list-container');
                    todoListContainer.remove();
                    folders.childNodes.forEach((folder) => {
                        folder.classList.remove('active');
                      });
                    if (e.target.id !== "all-todos") {
                        e.target.classList.add('active');
                    }
                    createFolderContentsDisplay(mainFolder[folder]);
                }
            }   
        })  
    }

    const eventListeners = (mainFolder) => {
        document.addEventListener('click', (e) => {
            if (e.target.id == "add-new-todo") {
                createNewTodoScreen(mainFolder);
            }
            if (e.target.id == "confirm-todo") {
                createNewTodo();
                const todoListContainer = document.getElementById('todo-list-container');
                if (!document.getElementById("title").value) {
                    return
                } else 
                for ( let folder in mainFolder) {
                    if (mainFolder[folder].idNumber == todoListContainer.className) {
                        todoListContainer.remove();
                        createFolderContentsDisplay(mainFolder[folder]);
                    }
                }  
            }
            if (e.target.id == "cancel-new-todo") {
                hideTodoScreen();
            }
            if (e.target.id == "create-new-folder") {
                const newFolderContainer = document.getElementById('new-folder-container');
                if (newFolderContainer.classList == 'active') {
                    newFolderContainer.classList = 'hide'
                } else newFolderContainer.classList = "active";
            }
            if (e.target.id == "add-new-folder") {
                if (!document.getElementById('new-folder-input').value) {
                    return;
                }
                const newFolderContainer = document.getElementById('new-folder-container');
                const createFolder = createNewFolder();
                createNewFolderListing(createFolder.newFolder);
                newFolderContainer.classList = 'hide'
            }
            if (e.target.classList[0] == 'remove') {
                for (let folder in mainFolder) { 
                    for (let todoIndex in mainFolder[folder].todos) {
                        if (e.target.classList[1] == mainFolder[folder].todos[todoIndex].idNumber) {
                            mainFolder[folder].todos.splice(todoIndex, 1);
                            const todoContainer = e.target.parentNode;
                            todoContainer.parentNode.remove();
                        }
                    }
                }
            }
            if (e.target.classList[0] == 'edit') {
                createEditScreen(mainFolder);
                for (let folder in mainFolder) { 
                    for (let todoIndex in mainFolder[folder].todos) {
                        if (e.target.classList[1] == mainFolder[folder].todos[todoIndex].idNumber) {
                            const editButton = document.getElementById('confirm-edit');
                            editButton.classList.add(`${mainFolder[folder].todos[todoIndex].idNumber}`)
                            useFunction.editTodoInputData(mainFolder[folder].todos[todoIndex]);
                        }
                    }
                }
                
            }
            if (e.target.id == "confirm-edit") {
                for (let folder in mainFolder) { 
                    for (let todoIndex in mainFolder[folder].todos) {
                        if (e.target.classList[1] == mainFolder[folder].todos[todoIndex].idNumber) {
                           useFunction.editTodo(mainFolder[folder].todos[todoIndex], mainFolder);
                           //console.log(mainFolder[folder].todos[todoIndex])
                        }
                    }
                }
                //useFunction.editTodo(mainFolder);
                const todoListContainer = document.getElementById('todo-list-container');
                for ( let folder in mainFolder) {
                    if (mainFolder[folder].idNumber == todoListContainer.className) {
                        todoListContainer.remove();
                        createFolderContentsDisplay(mainFolder[folder]);
                    }
                }  
            }
        })
    }

    return {
        createHeader, 
        createFolderContentsDisplay, 
        createSidebar, 
        createNewFolderListing,
        createNewTodoScreen, 
        createNewFolderScreen, 
        createEditScreen,
        hideTodoScreen,
        showTodoScreen,
        sidebarFolderButtonFunctionality,
        eventListeners,
    }
}

export { createDisplay };