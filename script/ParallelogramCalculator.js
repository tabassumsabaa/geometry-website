function calculateParallelogramArea() {
    // get base of th Parallelogram
    const baseInput = document.getElementById('Parallelogram-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log(base);
 
    // get length of the Parallelogram
    const lengthInput = document.getElementById('Parallelogram-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);
 
    //calculate Parallelogram area
    const area = base * length;
    console.log('Area of the Parallelogram is= ', area );
 
    //display Parallelogram area
    const ParallelogramAreaSpan = document.getElementById('Parallelogram-area');
    ParallelogramAreaSpan.innerText = area; 
 }