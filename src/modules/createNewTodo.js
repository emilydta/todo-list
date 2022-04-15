import { format } from 'date-fns';
import { todoFunctions } from "./todoFunctions";
import { masterFolder } from './masterFolder';

const newTodoTemplate = (Title, Description, Priority, Date, Folder, idNumber) => {
    return { Title, Description, Priority, Date, Folder, idNumber }
}

const createNewTodo = (newTodo) => { 
    const useFunction = todoFunctions();
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const priorityDropdown = document.getElementById('priority-dropdown');
    const dateInput = document.getElementById('date-input');
    const timeInput = document.getElementById('time-input');

    console.log("isthsi")
    
    const transformDateDisplay = (dateData) => {
        dateData = dateData.replace(/-/g, ", ");
        return format(new Date(dateData), 'dd/MMM/yyyy');
    }
    const findFolderName = (mainFolder) => {
        let folder = '';
        const folderDropdown = document.getElementById('folder-dropdown');
        for (let i = 0; i < mainFolder.length; i++) { 
            if (mainFolder[i].idNumber == folderDropdown.value) {
                folder = `${mainFolder[i].folderName}`
            }
        }
        return folder;
    }
    if (!titleInput.value) {
        return console.log('error')//add function to highlight empty field;
    } else {
        newTodo = newTodoTemplate(`${titleInput.value}`, `${descriptionInput.value}`, `${priorityDropdown.value}`, `${transformDateDisplay(dateInput.value)} ${timeInput.value}`, `${findFolderName(masterFolder)}`, `${useFunction.createIdNumber()}`);
        useFunction.addToFolders(newTodo, masterFolder);
    }
}

export { createNewTodo }




