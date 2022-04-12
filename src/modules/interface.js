

// const containerVars = () => {
//     const sideMenuFolders = document.getElementById('side-menu-folders');
//     const todoDisplay = document.getElementById('todo-display');
//     const expandContainer = document.getElementById('todo-expand-container');
//     return { sideMenuFolders, todoDisplay, expandContainer }
// }

const createDisplay = () => {
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
        const folderContainer = document.createElement('div');
        folderContainer.setAttribute('id', 'todo-list-container');
        const containerHeading = document.createElement('h2');
        containerHeading.setAttribute('id', 'container-heading');
        containerHeading.innerText = todoFolder.folderName;
        folderContainer.appendChild(containerHeading);

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
                //todoKeys.style.fontWeight = "bold";
                if (!todo[key]) {
                    todoData.innerText = '-';
                } else 
                todoData.innerText = todo[key];
                todoExpander.appendChild(todoKeys);
                todoExpander.appendChild(todoData);
            })
            todoRow.innerText = `${todo.Title} ${todo.Priority} ${todo.Date}`;

            const editButton = document.createElement('div');
            editButton.setAttribute('id', `edit ${todo.idNumber}`);
            editButton.innerText = "Edit";
            todoRow.appendChild(editButton);
        
            todoDiv.appendChild(todoRow);
            todoDiv.appendChild(todoExpander);
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
        const createNewFolderButton = document.createElement('div');
        sidebar.setAttribute('id', 'sidebar');
        folders.setAttribute('id', 'folders');
        createNewFolderButton.setAttribute('id', 'create-new-folder');
        createNewFolderButton.innerText = "Add Folder";
        mainFolder.forEach(folder => {
            const folderListing = document.createElement('li');
            folderListing.setAttribute('id', `${folder.idNumber}`);
            folderListing.innerText = folder.folderName;
            console.log(folder.folderName)
            folders.appendChild(folderListing);
        })
        sidebar.appendChild(folders);
        sidebar.appendChild(createNewFolderButton);
        return containers.appendChild(sidebar);
    }

    const createNewTodoScreen = () => {
        const newTodoScreen = document.getElementById('todo-screen');
        newTodoScreen.style.display = "flex";
    }

    const createNewFolderScreen = () => {
        const newFolderScreen = document.getElementById('new-folder-screen');
        newTodoScreen.style.display = "flex";
    }

    const createEditScreen = () => {
        const editTodoScreen = document.getElementById('todo-screen');
        editTodoScreen.style.display = "flex";
    }

    return {
        createHeader, 
        createFolderContentsDisplay, 
        createSidebar, 
        createNewTodoScreen, 
        createNewFolderScreen, 
        createEditScreen 
    }
}

export { createDisplay };