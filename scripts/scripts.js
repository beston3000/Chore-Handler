function AddMoney(Name, Amount) {
    localStorage.setItem(Name, localStorage.getItem(Name) + Amount)
}

function RemoveMoney(Name, Amount) {
    localStorage.setItem(Name, localStorage.getItem(Name) - Amount)
}

function CreateTable() {
    const body = document.body,
          tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';

    
    body.appendChild(tbl);
  }