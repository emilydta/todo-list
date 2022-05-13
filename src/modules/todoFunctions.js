const todoFunctions = () => {
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const priorityDropdown = document.getElementById('priority-dropdown');
    const dateInput = document.getElementById('date-input');
    const timeInput = document.getElementById('time-input');
    const folderDropdown = document.getElementById('folder-dropdown');

    const createIdNumber = () => {
        let idNumber = + new Date();
        return idNumber
    }

    const editTodoInputData = (todo) => {
        titleInput.value = todo.Title;
        descriptionInput.value = todo.Description;
        dateInput.value = todo.Date;
        timeInput.value = todo.Time;
        priorityDropdown.value = todo.Priority;
        folderDropdown.value = todo.Folder
    }

    const editTodo = (todo) => {
        if (!folderDropdown.value || !titleInput.value) {
            return alert("Please add a Folder and Title for your todo.");
        }
        todo.Title = titleInput.value;
        todo.Description = descriptionInput.value;
        todo.Date = dateInput.value;
        todo.Time = timeInput.value;
        todo.Priority = priorityDropdown.value;
        todo.Folder = folderDropdown.value;
    }

    const resetInputValues = () => {
        titleInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';
        timeInput.value = '';
        priorityDropdown.value = '';
        folderDropdown.value = '';
    }

    return {
        createIdNumber,
        editTodoInputData,
        editTodo,
        resetInputValues,
        titleInput,
        descriptionInput,
        dateInput,
        timeInput,
        priorityDropdown,
        folderDropdown,
    }
}

export { todoFunctions }