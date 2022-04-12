import './style.css'
import { createDisplay } from './modules/interface'
import { masterFolder } from './modules/masterFolder';

const changeTodoListDisplay = (mainFolder) => {
    const sidebar = document.getElementById('sidebar');
    sidebar.addEventListener('click', (e) => {
        for (let folder in mainFolder) {
            if (e.target.id == mainFolder[folder].idNumber) {
                const todoListContainer = document.getElementById('todo-list-container');
                todoListContainer.remove();
                display.createFolderContentsDisplay(mainFolder[folder]);
            }
        }   
    })  
}
const display = createDisplay();
display.createHeader();
display.createSidebar(masterFolder);
display.createFolderContentsDisplay(masterFolder[0])
changeTodoListDisplay(masterFolder);




