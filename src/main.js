// Functions 
import {
    createColumn,
    createRow,
    sortByHeader
} from './functions';

// Main DOM Selectors 

const btnColumn = document.querySelector('.btn-column');
const btnRow = document.querySelector('.btn-row');

// Event Listeners 

btnColumn.addEventListener('click', createColumn);

btnRow.addEventListener('click', createRow);

document.addEventListener('click', sortByHeader);

// Function Playground 









