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

    const replaceTodo = (todo, mainFolder) => {
        for (let folder in mainFolder) {
            for (let todoIndex in mainFolder[folder].todos) {
                if (mainFolder[folder].todos[todoIndex].idNumber == todo.idNumber) {
                    mainFolder[folder].todos.splice(todoIndex, 1);
                }
            }
        }
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
        folderDropdown.value = todo.Folder;
    }

    const editTodo = (todoId, mainFolder) => {
        if (!titleInput.value) {
            return alert ("Please add a title for your todo.")
        } else {
        let newTodo = newTodoTemplate(
            `${titleInput.value}`, 
            `${descriptionInput.value}`, 
            `${priorityDropdown.value}`, 
            `${transformDateDisplay(dateInput.value)} ${timeInput.value}`, 
            `${findFolderName(mainFolder)}`, `${todoId}`
            );
            replaceTodo(newTodo, mainFolder);
            addToFolders(newTodo, mainFolder);
        }
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
        editTodoInputData,
        editTodo,
        resetInputValues,
    };

}

export { todoFunctions }