import { todoFunctions} from "./todoFunctions";

const newFolderTemplate = (folderName, todos, idNumber) => {
    return { folderName, todos, idNumber }
}

const createNewFolder = (newFolder) => {
    const useFunction = todoFunctions();
    const folderNameInput = document.getElementById('folder-name-input');
    if (!folderNameInput.value) {
        return console.log("error") //add function to highlight empty field;
    } else 
    newFolder = newFolderTemplate(`${folderNameInput.value}`, [], createIdNumber());
    useFunction.addToMasterFolder(newFolder, masterFolder);
    return {newFolder};
}
