function calculateRhombusArea() {
    //fstd value
    const RhombusFstdInput = document.getElementById('Rhombus-fstd');
    const RhombusFstdText = RhombusFstdInput.value;
    const fstd = parseFloat(RhombusFstdText);
    console.log(fstd);
    
    //secd value
    const RhombusSecdInput = document.getElementById('Rhombus-secd');
    const RhombusSecdText = RhombusSecdInput.value;
    const secd = parseFloat(RhombusSecdText);
    console.log(secd);

    //calculate Rhombus area
     const area = 0.5 * fstd * secd;
     console.log('Area of a the Rhombus is= ', area );

    // display Rhombus area 
     const RhombusAreaSpan = document.getElementById('Rhombus-area');
     RhombusAreaSpan.innerTextn = area; 
}