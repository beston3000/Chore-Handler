var SelectedAccount = ""


function AddMoney() {
    let newTable = JSON.parse(localStorage.getItem("Accounts"));
    
    const Amount = Number(document.getElementById("moneyInputText").value);
    

    if (SelectedAccount in newTable) {
        newTable[SelectedAccount] += Amount
        localStorage.setItem("Accounts", JSON.stringify(newTable));

        CreateTable(true);
    }
}

function RemoveMoney() {
    let newTable = JSON.parse(localStorage.getItem("Accounts"));
    
    const Amount = Number(document.getElementById("moneyInputText").value);
    

    if (SelectedAccount in newTable) {
        newTable[SelectedAccount] -= Amount
        localStorage.setItem("Accounts", JSON.stringify(newTable));

        CreateTable(true);
    }
}

function CreateTable(IsMoneyPage) {

    const AccountsTable = JSON.parse(localStorage.getItem("Accounts"));

    if (AccountsTable) {
    const body = document.body,
    tbl = document.getElementById("acctable");
    tbl.style.border = '4p';
    tbl.innerHTML = "";
    tbl.style.width = '25%';
    tbl.style.marginLeft = 'auto';
    tbl.style.marginRight = 'auto';
    tbl.style.display = 'block';
    tbl.style.borderCollapse = 'collapse';

    // Create the header row
    const header = tbl.createTHead();
    const headerRow = header.insertRow(0);
    const headers = ['Name', 'Money', ''];
    headers.forEach(text => {
        const th = document.createElement('th');
        th.appendChild(document.createTextNode(text));
        headerRow.appendChild(th);
    });

    Object.keys(AccountsTable).forEach(key => {

        const account = AccountsTable[key]

        const row = tbl.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        
        cell1.textContent = key;
        cell2.textContent = account;

        if (IsMoneyPage != true) {

            const RemoveButton = document.createElement("button")
            RemoveButton.textContent = "Remove Account";
            RemoveButton.style.backgroundColor = 'red';
            RemoveButton.style.color = 'black'

            cell3.appendChild(RemoveButton);

            RemoveButton.onclick = function(){RemoveAccount(key)};
            
        }
        if (IsMoneyPage == true) {
            const SelectButton = document.createElement("button")
            SelectButton.textContent = "Select Account";
            SelectButton.style.backgroundColor = 'blue';
            SelectButton.style.color = 'black';

            cell3.appendChild(SelectButton);

            SelectButton.onclick = function(){SelectMoneyAccount(key)};
        }
    }
    )

    body.appendChild(tbl);
    }
}

function AddAccount() {

    const AccName = document.getElementById("accountInputText").value;
    
    let accTable = JSON.parse(localStorage.getItem("Accounts"))

    if (!accTable)
    {
        accTable = {}
    }

    accTable[AccName] = accTable[AccName] || 0;

    localStorage.setItem("Accounts", JSON.stringify(accTable))

    CreateTable();
}

function RemoveAccount(AccName) {

    if (localStorage.getItem ("Accounts")) {

        let accTable = JSON.parse(localStorage.getItem("Accounts"));

        delete accTable[AccName];

        localStorage.setItem("Accounts", JSON.stringify(accTable));

        CreateTable();
    }
}

function SelectMoneyAccount(AccountName) {
    const AccountTable = JSON.parse(localStorage.getItem("Accounts"));

    console.log(AccountName)

    console.log(AccountTable)

    if (AccountName in AccountTable) {

        console.log("Found Account");
        SelectedAccount = AccountName
        const Textyyyy = document.getElementById("selectedAccText");

        Textyyyy.textContent = "Selected Account: " + AccountName;
    }
}

function OpenLink(link) {
    window.location.href = link
}