import './style.css'
import { createDisplay } from './modules/interface'
import { masterFolder } from './modules/masterFolder';

const display = createDisplay();
display.createHeader();
display.createSidebar(masterFolder);
display.createFolderContentsDisplay(masterFolder[0])
display.sidebarFolderButtonFunctionality(masterFolder);
display.createNewFolderScreen();
display.eventListeners(masterFolder);
console.log(masterFolder)