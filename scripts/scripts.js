function AddMoney(Name, Amount) {
    localStorage.setItem(Name, localStorage.getItem(Name) + Amount)
}

function RemoveMoney(Name, Amount) {
    localStorage.setItem(Name, localStorage.getItem(Name) - Amount)
}

function CreateTable() {
    const body = document.body,
          tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.style.borderCollapse = 'collapse';

    // Create the header row
    const header = tbl.createTHead();
    const headerRow = header.insertRow(0);
    const headers = ['Name', 'Amount'];
    headers.forEach(text => {
        const th = document.createElement('th');
        th.appendChild(document.createTextNode(text));
        headerRow.appendChild(th);
    });

    // Create a row for demo purposes
    const row = tbl.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = 'Sample Name';
    cell2.textContent = 'Sample Amount';

    body.appendChild(tbl);
}

function AddAccount(Name) {

}