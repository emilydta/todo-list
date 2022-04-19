import { todoFunctions } from "./todoFunctions";
import { masterFolder } from './masterFolder';

const newTodoTemplate = (Title, Description, Priority, Date, Folder, idNumber, FolderId) => {
    return { Title, Description, Priority, Date, Folder, idNumber, FolderId }
}

const createNewTodo = (newTodo) => { 
    const useFunction = todoFunctions();
    if (!useFunction.titleInput.value) {
        return alert ("Please add a title for your todo.")
    } else {
        newTodo = newTodoTemplate(
            `${useFunction.titleInput.value}`, 
            `${useFunction.descriptionInput.value}`, 
            `${useFunction.priorityDropdown.value}`, 
            `${useFunction.transformDateDisplay(useFunction.dateInput.value)} ${useFunction.timeInput.value}`, 
            `${useFunction.findFolderName(masterFolder)}`, `${useFunction.createIdNumber()}`, `${useFunction.folderDropdown.value}`
            );
        useFunction.addToFolders(newTodo, masterFolder);
    }
}

export { createNewTodo, newTodoTemplate }




