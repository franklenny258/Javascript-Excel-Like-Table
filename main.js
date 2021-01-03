// Functions 
import {createColumn, createRow} from './functions.js';

// Main DOM Selectors 

const btnColumn = document.querySelector('.btn-column');
const btnRow = document.querySelector('.btn-row');

// Event Listeners 

btnColumn.addEventListener('click', createColumn);

btnRow.addEventListener('click', createRow);


