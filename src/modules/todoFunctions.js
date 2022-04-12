
const todoFunctions = () => {
    const addToFolders = (todo, mainFolder) => {
        const folderDropdown = document.getElementsById('folder-dropdown');
        for (let i = 0; i < mainFolder.length; i++) {
            if (folderDropdown.value == "all-todos") {
                mainFolder[0].todos.push(todo);
                return;
            }
            if (mainFolder[i].idNumber == folderDropdown.value) {
                mainFolder[i].todos.push(todo);
                mainFolder[0].todos.push(todo);
                return;
            };
        };
    }

    const addToMasterFolder = (folder, mainFolder) => {
        mainFolder.push(folder);
        mainFolder.sort((a,z) => a.folderName.localeCompare(z.folderName));
    }

    const createIdNumber = () => {
        let idNumber = + new Date();
        return idNumber
    }

    return { addToFolders, addToMasterFolder, createIdNumber };

}

export { todoFunctions }