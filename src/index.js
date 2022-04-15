import './style.css'
import { createDisplay } from './modules/interface'
import { masterFolder } from './modules/masterFolder';
import { createNewTodo } from './modules/createNewTodo';
import { createNewFolder } from './modules/createNewFolder';

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
                display.createFolderContentsDisplay(mainFolder[folder]);
            }
        }   
    })  
}
const display = createDisplay();
display.createHeader();
display.createSidebar(masterFolder);
display.createFolderContentsDisplay(masterFolder[0])
sidebarFolderButtonFunctionality(masterFolder);
display.createNewFolderScreen();


document.addEventListener('click', (e) => {
    if (e.target.id == "add-new-todo") {
        display.createNewTodoScreen();
    }
    if (e.target.id == "confirm-todo") {
        createNewTodo();
        const todoListContainer = document.getElementById('todo-list-container')
        for ( let folder in masterFolder) {
            if (masterFolder[folder].idNumber == todoListContainer.className) {
                todoListContainer.remove();
                display.createFolderContentsDisplay(masterFolder[folder]);
            }
        }
        
        
    }
    if (e.target.id == "cancel-new-todo") {
        display.hideTodoScreen();
    }
    if (e.target.id == "create-new-folder") {
        const newFolderContainer = document.getElementById('new-folder-container');
        if (newFolderContainer.classList == 'active') {
            newFolderContainer.classList = 'hide'
        } else newFolderContainer.classList = "active";
    }
    if (e.target.id == "add-new-folder") {
        const newFolderContainer = document.getElementById('new-folder-container');
        createNewFolder();
        newFolderContainer.classList = 'hide'
    }
})



