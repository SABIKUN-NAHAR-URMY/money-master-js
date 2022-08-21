function getElementId(elementId)
{
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    const elementValue = parseInt(elementValueString);
    // element.value = '';
    return elementValue;
}
function setElementId(setId, total)
{
    const setElementIdResult = document.getElementById(setId);
    setElementIdResult.innerText = total;
}

//income value get here
let income = document.getElementById('income');
let incomeValueString = income.value;
let incomeValue = parseInt(incomeValueString);

document.getElementById('calculate').addEventListener('click',function(){
    //get food, rent, clothes value
    const food = getElementId('food');
    const rent = getElementId('rent');
    const clothes = getElementId('clothes');

    if(isNaN(document.getElementById('food').value) || isNaN(document.getElementById('rent').value) || isNaN(document.getElementById('clothes').value) || isNaN(document.getElementById('income').value) )
    {
        alert('Please enter a number!');
        return;
    }
    else if( food<0 || rent<0 || clothes<0 || incomeValue<0){
        alert('Please enter a positive number!');
        return;
    }
    
    //get totalExpenses value 
    const totalExpensesAmount = food + rent + clothes;
    
    
    //set totalExpenses value
    const totalExpenses = setElementId('total-expenses',totalExpensesAmount);

    //get balance 
    const balance = incomeValue - totalExpensesAmount;

    //alert for totalExpensesAmount
    if(incomeValue < totalExpensesAmount)
    {
        alert('Income er cheeye beshi khoroc hoye jacce!');
        return;
    }
    
    //set balance
    const setBalance = setElementId('balance',balance);

})

document.getElementById('save').addEventListener('click',function(){
    //get saving percent value
    const savingPercent = getElementId('saving-percent');
    
    //alert for savingPercent
    if(savingPercent>100)
    {
        alert('Saving percent 100 er besi neya jabe nah!');
        return;
    }
    
    //savingAmount calculate
    const savingAmountResult = (incomeValue * savingPercent)/100;

    //set savingAmount
    const savingAmount = setElementId('saving-amount',savingAmountResult);

    //get balance here again for remainingBalance
    const balance = document.getElementById('balance').innerText;

    //alert for savingAmount
    if(balance < savingAmountResult){
        alert('Income theke saving besi kora jabe nah!');
        return;
    }

    //get remainingAmount
    const remainingAmount =parseInt(balance) - savingAmountResult;
    setElementId('remaining-balance', remainingAmount);

})