let masterFolder = {};
if (localStorage.getItem('masterFolderStore')) {
    masterFolder = JSON.parse(localStorage.getItem("masterFolderStore")); 
} else {
    masterFolder = { 
        todos: [],
    };
}

export { masterFolder };