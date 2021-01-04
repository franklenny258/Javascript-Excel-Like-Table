function createColumn() {
    const columnName = prompt('Please insert name of the column'); // Meanwhile I'll use this prompt as modal
    const column = document.querySelector('table .columns');
    let th = document.createElement('th');
    th.classList = 'column';
    th.innerHTML = columnName;
    column.append(th);

    if (document.querySelector('.rows')) {
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


function sortByHeader(e) {
    const column = e.target;
    const table = column.closest('table');

    if (column.tagName == 'TH' && column.classList.contains('column')) {
        const columnIndex = column.cellIndex;

        function sortTable(selectedColumn) {
            let i, x, y;
            let shouldSwitch = null;
            let switching = true;

            while (switching) {
                switching = false;
                const rows = table.rows;

                for (i = 1; i < (rows.length - 1); i++) {
                    shouldSwitch = false;
                    x = rows[i].getElementsByTagName("TD")[selectedColumn];
                    y = rows[i + 1].getElementsByTagName("TD")[selectedColumn];
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
                if (shouldSwitch) {
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    switching = true;
                }
            }
        }
        sortTable(columnIndex);
    }
}

export {
    createColumn,
    createRow,
    sortByHeader
};
