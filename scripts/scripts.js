function AddMoney(Name, Amount) {
    localStorage.setItem(Name, localStorage.getItem(Name) + Amount)
}

function RemoveMoney(Name, Amount) {
    localStorage.setItem(Name, localStorage.getItem(Name) - Amount)
}