import { createNewTodo } from "./createNewTodo";
import { masterFolder } from "./masterFolder";
import { todoFunctions } from "./todoFunctions";

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

        // Creates list of todos and attached buttons inside container
        todoFolder.todos.forEach(todo => {
            const todoDiv = document.createElement('div');
            const todoRow = document.createElement('div');
            todoRow.setAttribute('id', `${todo.idNumber}`);
            todoDiv.setAttribute('class', `todo-div ${todo.idNumber}`);

            const todoExpander = document.createElement('div');
            todoExpander.setAttribute('class', `todo-expander`);
            todoExpander.style.display = 'none';
            Object.keys(todo).forEach(key => {
                if (key == "idNumber") {
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
            editButton.setAttribute('id', `edit ${todo.idNumber}`);
            editButton.setAttribute('class', 'edit');
            editButton.innerText = "Edit";

            const removeButton = document.createElement('div');
            removeButton.setAttribute('id', `remove ${todo.idNumber}`);
            removeButton.setAttribute('class', 'remove');
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
        console.log(sidebar)
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

    const createNewTodoScreen = () => {
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
        showTodoScreen();
        populateFolderDropdown(masterFolder);
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

    const createEditScreen = () => {
        const editTodoScreen = document.getElementById('todo-screen');
        editTodoScreen.style.display = "flex";
        overlay.style.display = "flex";
    }

    const hideTodoScreen = () => {
        overlay.style.display = "none";
        newTodoScreen.style.display = "none";
    }
    
    const showTodoScreen = () => {
        overlay.style.display = "flex";
        newTodoScreen.style.display = "flex";
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
    }
}

export { createDisplay };