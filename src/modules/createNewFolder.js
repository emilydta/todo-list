import { todoFunctions } from "./todoFunctions";
import { masterFolder } from "./masterFolder";
import { createDisplay } from "./interface";

const display = createDisplay();

const newFolderTemplate = (folderName, todos, idNumber) => {
    return { folderName, todos, idNumber }
}

const createNewFolder = (newFolder) => {
    const useFunction = todoFunctions();
    const folderNameInput = document.getElementById('new-folder-input');
    if (!folderNameInput.value) {
        return console.log("error") //add function to highlight empty field;
    } else 
    newFolder = newFolderTemplate(`${folderNameInput.value}`, [], useFunction.createIdNumber());
    useFunction.addToMasterFolder(newFolder, masterFolder);
    display.createNewFolderListing(newFolder);
}

export { createNewFolder };
