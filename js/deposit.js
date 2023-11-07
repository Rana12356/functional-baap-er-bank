
document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositValue = getInputFieldValueById('deposit-field');
    const previousDepositValue = getElementValueById('deposit-total');

    const newDepositTotal = previousDepositValue + newDepositValue;
    setTextElementById('deposit-total', newDepositTotal);

    const previousBalanceTotal = getElementValueById('balance-total');

    const newBalanceTotal = previousBalanceTotal + newDepositValue;
    setTextElementById('balance-total', newBalanceTotal);

});
