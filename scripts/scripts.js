function AddMoney(Name, Amount) {
    let newTable = JSON.parse(localStorage.getItem("Accounts"));
    
    if (newTable[Name]) {
        newTable[Name] += Amount
        localStorage.setItem("Accounts", JSON.stringify(newTable));
    }
}

function RemoveMoney(Name, Amount) {
    let newTable = JSON.parse(localStorage.getItem("Accounts"));
    
    if (newTable[Name]) {
        newTable[Name] -= Amount
        localStorage.setItem("Accounts", JSON.stringify(newTable));
    }
}

function CreateTable() {
    const body = document.body,
          tbl = document.createElement('table');
    tbl.style.width = '25%';
    tbl.style.marginLeft = 'auto';
    tbl.style.marginRight = 'auto';
    tbl.style.display = 'block';
    tbl.style.borderCollapse = 'collapse';

    // Create the header row
    const header = tbl.createTHead();
    const headerRow = header.insertRow(0);
    const headers = ['Name', 'Money'];
    headers.forEach(text => {
        const th = document.createElement('th');
        th.appendChild(document.createTextNode(text));
        headerRow.appendChild(th);
    });

    const AccountsTable = JSON.parse(localStorage.getItem("Accounts"));

    Object.keys(AccountsTable).forEach(key => {

        const account = AccountsTable[key]

        const row = tbl.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = key;
        cell2.textContent = account;
    }
    )

    body.appendChild(tbl);
}

function AddAccount(AccName) {

    let accTable = JSON.parse(localStorage.getItem("Accounts"))

    accTable[AccName] = 0

    localStorage.setItem("Accounts", JSON.stringify(accTable))
}

function RemoveAccount(AccName) {

    const AccName = document.getElementById("accountInputText").value;

    let accTable = JSON.parse(localStorage.getItem("Accounts"))

    delete accTable[AccName]

    localStorage.setItem("Accounts", JSON.stringify(accTable))
}