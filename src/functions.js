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
            let i, cellIndex, cells;
            let shouldSwitch = null;
            let switching = true;
            let switchcount = 0;
            let dir = 'asc';

            while (switching) {
                switching = false;
                const rows = table.rows;

                for (i = 1; i < (rows.length - 1); i++) {
                    shouldSwitch = false;

                    cellIndex = rows[i].getElementsByTagName("TD")[selectedColumn];
                    cells = rows[i + 1].getElementsByTagName("TD")[selectedColumn];

                    if (dir == "asc") {
                        if (cellIndex.innerHTML.toLowerCase() > cells.innerHTML.toLowerCase()) {
                            shouldSwitch = true;
                            break;
                        }
                    } else if (dir == "desc") {
                        if (cellIndex.innerHTML.toLowerCase() < cells.innerHTML.toLowerCase()) {
                            shouldSwitch = true;
                            break;
                        }
                    }
                }
                if (shouldSwitch) {
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    switching = true;
                    switchcount++;
                } else {
                    if (switchcount == 0 && dir == "asc") {
                        dir = "desc";
                        switching = true;
                    }
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



