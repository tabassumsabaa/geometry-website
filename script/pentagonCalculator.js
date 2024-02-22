function calculatePantagonArea() {
    const perimeter = getInputValueById('Pentagon-perimeter');
    const apotheme = getInputValueById('Pentagon-apotheme');
   // console.log(perimeter , apotheme);
   const area = 0.5 * perimeter * apotheme;
   console.log('Area of the Parallelogram is=', area );
   setInnerTextById('Pentagon-area', area);
}
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}