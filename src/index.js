import './style.css';
import { createDisplay } from './modules/interface';
import { masterFolder } from './modules/masterFolder';

localStorage.setItem("masterFolderStore", JSON.stringify(masterFolder));

const display = createDisplay();
display.createMainHeader(masterFolder);
display.createSidebar(masterFolder);
display.createTodoListDisplay('All Todos', masterFolder.todos, masterFolder);
display.createNewFolderScreen(masterFolder);
display.eventListeners(masterFolder);





