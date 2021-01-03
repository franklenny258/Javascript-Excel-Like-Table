function createColumn() {
    const columnName = prompt('Please insert name of the column'); // Meanwhile I'll use this prompt as modal
    const column = document.querySelector('table .columns');
    let th = document.createElement('th');
    th.classList = 'column';
    th.innerHTML = columnName;
    column.append(th);

    if (document.querySelector('.rows')) { // To create rows below a new column
       const rows = document.querySelectorAll('.rows');
       rows.forEach(row => {
           const td = document.createElement('td');
           td.classList = 'row';
           row.append(td);
       });
       
    }
}


function createRow() {
    const table = document.querySelector('table');
    const tr = document.createElement('tr');
    tr.classList = 'rows';
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        const td = document.createElement('td');
        td.classList = 'row';
        tr.append(td);
        table.append(tr);
    });
}

export {createColumn, createRow};
