/**
 * Q's : get base and height of a triangle calculate the area by using the provided formula then display the area
 * step-1: get base value
 * step-2: added an id in the base input field
 * step-3: use get element by id to access the input field
 * step-4: get value from the input field (value is string now)
 * step-5: conver the value to a number by using parseFloat
*/






function calculateTriangleArea() {
    //base value
    const trianglBaseInput = document.getElementById('triangle-base');
    const trianglBaseText = trianglBaseInput.value;
    const base = parseFloat(trianglBaseText);
    console.log(base);
    
    //height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    //calculate triangle area
     const area = 0.5 * base * height;
     console.log('Area of a the triangle is= ', area );

    // display triangle area 
     const triangleAreaSpan = document.getElementById('triangle-area"');
     triangleAreaSpan.innerTextn = area; 
}