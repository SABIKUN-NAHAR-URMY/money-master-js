function expensesAndIncome(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.value;
    const elementValue = parseInt(elementString);
    return elementValue;
}
function totalExpenseAndBalance(elementId)
{
    const total = document.getElementById(elementId);
    return total;
}
function totalExpensesAmount(food, rent, clothes){
    const totalExpensesAmount = food + rent + clothes;
    return totalExpensesAmount;
}
function balanceTotal(income, totalExpensesAmount)
{
    const balanceTotalAmount = income - totalExpensesAmount;
    return balanceTotalAmount;
}

document.getElementById('calculate').addEventListener('click',function(){
   const food = expensesAndIncome('food');
   const rent = expensesAndIncome('rent');
   const clothes = expensesAndIncome('clothes');

    const totalExpensesAmountValue = totalExpensesAmount(food, rent, clothes);

    const total = totalExpenseAndBalance('total-expenses');
    total.innerText = totalExpensesAmountValue;

  const income = expensesAndIncome('income');

  const balanceAmount = balanceTotal(income, totalExpensesAmountValue);

  const balance = totalExpenseAndBalance('balance');
  balance.innerText = balanceAmount;
})

document.getElementById('save').addEventListener('click',function(){
   const savingPercent = expensesAndIncome('saving-percent');
   const income = expensesAndIncome('income');

   const saving = (income * savingPercent)/100;
   const savingAmount = totalExpenseAndBalance('saving-amount');
   savingAmount.innerText = saving;

   const food = expensesAndIncome('food');
   const rent = expensesAndIncome('rent');
   const clothes = expensesAndIncome('clothes');

   const totalExpensesAmountValue = totalExpensesAmount(food, rent, clothes);
   const balanceAmount = balanceTotal(income, totalExpensesAmountValue);

   const remaingBalance = balanceAmount - saving ;
   const remaingBalanceAmount = totalExpenseAndBalance('remaining-balance');
   remaingBalanceAmount.innerText = remaingBalance;

})