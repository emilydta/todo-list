import { todoFunctions } from "./todoFunctions";
import { masterFolder } from './masterFolder';

const newTodoTemplate = (Title, Description, Priority, Date, Time, Folder, idNumber) => {
    return { Title, Description, Priority, Date, Time, Folder, idNumber }
}

const createNewTodo = (newTodo) => { 
    const useFunction = todoFunctions();
    newTodo = newTodoTemplate(
        `${useFunction.titleInput.value}`, 
        `${useFunction.descriptionInput.value}`, 
        `${useFunction.priorityDropdown.value}`, 
        `${useFunction.dateInput.value}`, `${useFunction.timeInput.value}`, 
        `${useFunction.folderDropdown.value}`, `${useFunction.createIdNumber()}`
        );
    masterFolder.todos.push(newTodo);
    localStorage.setItem("masterFolderStore", JSON.stringify(masterFolder));
}

export { createNewTodo, newTodoTemplate }




