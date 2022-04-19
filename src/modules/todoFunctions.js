import { newTodoTemplate } from "./createNewTodo";
import { format } from 'date-fns';
import { masterFolder } from './masterFolder';

const todoFunctions = () => {
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const priorityDropdown = document.getElementById('priority-dropdown');
    const dateInput = document.getElementById('date-input');
    const timeInput = document.getElementById('time-input');
    const folderDropdown = document.getElementById('folder-dropdown');

    const addToFolders = (todo, mainFolder) => {
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

    const transformDateDisplay = (dateData) => {
        if (dateData == "") {
            return dateData = "-";
        }
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

    

    const addToMasterFolder = (folder, mainFolder) => {
        mainFolder.push(folder);
        //mainFolder.sort((a,z) => a.folderName.localeCompare(z.folderName));
    }

    const createIdNumber = () => {
        let idNumber = + new Date();
        return idNumber
    }

    const editTodoInputData = (todo) => {
        titleInput.value = todo.Title;
        descriptionInput.value = todo.Description;
        priorityDropdown.value = todo.Priority;
        folderDropdown.value = todo.FolderId
    }
    const editTodo = (todo, mainFolder) => {
        const editTodoValues = (todo, mainFolder) => {
            todo.Title = titleInput.value;
            todo.Description = descriptionInput.value;
            todo.Priority = priorityDropdown.value;
            todo.Folder = findFolderName(mainFolder);
            todo.FolderId = folderDropdown.value;
        }

        const addEditedTodoToFolders = (todo, mainFolder) => {
            for (let i = 1; i < mainFolder.length; i++) {
                if (mainFolder[i].todos.length == 0 && todo.FolderId == mainFolder[i].idNumber) {
                    mainFolder[i].todos.push(todo);
                    return;
                }
                for (let j = 0; j < mainFolder[i].todos.length; j++) {
                    if (mainFolder[i].todos[j].idNumber == todo.idNumber) {
                        return;
                    }
                    if (todo.FolderId == mainFolder[i].idNumber) {
                        mainFolder[i].todos.push(todo);
                        return;
                    }
                }
            }
        }
        const removeEditedTodoFromFolders = (todo, mainFolder) => {
            for (let i = 1; i < mainFolder.length; i++) {
                for (let j = 0; j < mainFolder[i].todos.length; j++) {
                    if (mainFolder[i].todos[j].idNumber == todo.idNumber) {
                        if (todo.FolderId !== mainFolder[i].idNumber) {
                            mainFolder[i].todos.splice(j, 1);
                        } 
                    }
                }
            }
        }
        
        editTodoValues(todo, mainFolder);
        //removeEditedTodoFromFolders(todo, mainFolder);
        addEditedTodoToFolders(todo, mainFolder);
        


    }   

    const resetInputValues = () => {
        titleInput.value = '';
        descriptionInput.value = '';
        priorityDropdown.value = '';
        dateInput.value = '';
        timeInput.value = '';
    }

    return { 
        addToFolders, 
        transformDateDisplay,
        findFolderName,
        addToMasterFolder, 
        createIdNumber,
        titleInput,
        descriptionInput,
        priorityDropdown,
        dateInput,
        timeInput,
        folderDropdown,
        editTodoInputData,
        editTodo,
        resetInputValues,
    };

}

export { todoFunctions }