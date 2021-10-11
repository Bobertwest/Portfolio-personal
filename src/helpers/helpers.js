export const getAltura = (altura) => {
    var posicion;
    if (altura >= 20) {
        posicion = "Sticky";
    } else {
        posicion = "Absolute";
    }
    return posicion;
};