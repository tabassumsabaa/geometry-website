function calculateEllipseArea() {
    const majorRadius = document.getElementById('Ellipse-major-radius');
    const minorRadius = document.getElementById('Ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setInnerTextById('Ellipse-area', area);
}