document.getElementById('calculate-btn').addEventListener('click', function(e){
    // console.log(e.target.parentNode.children[1].children[2].children[1].value);
    const income = e.target.parentNode.children[0].children[1].children[1].value;
    const foodExpenses = e.target.parentNode.children[1].children[1].children[1].value;
    const rentExpenses = e.target.parentNode.children[1].children[2].children[1].value;
    const clothesExpenses = e.target.parentNode.children[1].children[3].children[1].value; 

    const totalExpenses = parseFloat(foodExpenses) + parseFloat(rentExpenses) + parseFloat(clothesExpenses);
    const balance = parseFloat(income) - totalExpenses;
    displayData(totalExpenses,'total-expenses');
    displayData(balance,'balance');
})

document.getElementById('save').addEventListener('click', function(){
    const savePercent = document.getElementById('input-save').value;
    console.log(savePercent);
    const percent = parseFloat(savePercent) * .01;
    console.log(percent);
    const balance = document.getElementById('balance').innerText;
    console.log(balance)
    const savingAmount  = (parseFloat(balance) * parseFloat(percent)).toFixed(1);
    const remainBalance = parseFloat(balance) - parseFloat(savingAmount);
    displayData(savingAmount,'saving-amount');
    displayData(remainBalance,'remain-balance');

})

function getInnerText(id){
    const element = document.getElementById(id);
    return element;
}

function displayData(total,id){
   let totalExp = getInnerText(id);
   totalExp.innerText= total;
   
}