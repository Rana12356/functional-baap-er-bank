function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const elementValueString = textElement.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

function setTextElementById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}