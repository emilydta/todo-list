import { compareAsc, format } from 'date-fns';
import { createIdNumber } from "./createIdNumber";

const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const priorityDropdown = document.getElementById('priority-dropdown');
const dateInput = document.getElementById('date-input');
const timeInput = document.getElementById('time-input');
const folderDropdown = document.getElementById('folder-dropdown');
const folderNameInput = document.getElementById('folder-name-input');
const confirmNewTodo = document.getElementsById('confirm-new-todo');
    


const newTodoTemplate = (Title, Description, Priority, Date, Folder, idNumber) => {
    return { Title, Description, Priority, Date, Folder, idNumber }
}

const createNewTodo = (newTodo) => { 
    const transformDateDisplay = (dateData) => {
        dateData = dateData.replace(/-/g, ", ");
        return format(new Date(dateData), 'dd/MMM/yyyy');
    }
    const findFolderName = (mainFolder) => {
        let folder = '';
        for (let i = 0; i < sideMenuFolders.childNodes.length; i++) { 
            if (mainFolder[i].idNumber == folderDropdown.value) {
                folder = `${mainFolder[i].folderName}`
            }
        }
        return folder;
    }
    if (!titleInput.value) {
        return console.log('error')//add function to highlight empty field;
    } else {
        newTodo = newTodoTemplate(`${titleInput.value}`, `${descriptionInput.value}`, `${priorityDropdown.value}`, `${transformDateDisplay(dateInput.value)} ${timeInput.value}`, `${findFolderName(masterFolder)}`, `${createIdNumber()}`);
        return { newTodo }
    }
}


addToFolders(newTodo, masterFolder);
addNewTodoToDisplay(newTodo);





