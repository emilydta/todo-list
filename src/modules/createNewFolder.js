import { todoFunctions } from "./todoFunctions";
import { masterFolder } from "./masterFolder";

const newFolderTemplate = (folderName, todos, idNumber) => {
    return { folderName, todos, idNumber }
}

const createNewFolder = (newFolder) => {
    const useFunction = todoFunctions();
    const folderNameInput = document.getElementById('new-folder-input');
    if (!folderNameInput.value) {
        return 
    } else 
    newFolder = newFolderTemplate(`${folderNameInput.value}`, [], useFunction.createIdNumber());
    useFunction.addToMasterFolder(newFolder, masterFolder);
    return { newFolder } 
}

export { createNewFolder };
