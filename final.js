function computeGeometries() {
    return [
        [areaOfAcircle(), circumferenceOfAcircle()],
        [areaOfArectangle1(), perimeterOfRectangle1()],
        [areaOfArectangle2(), perimeterOfRectangle2()],
        [area4(), volume4()],
    ];
}
const pi = 22 / 7;
const radius = 2;
const array1 = [3, 4];
const array2 = [4, 5];
const array3 = [3, 7];

function areaOfAcircle() {
    const areaOfaCircle = pi * radius * radius;
    return areaOfaCircle;
}

function circumferenceOfAcircle() {
    const circumferenceOfAcircle1 = 2 * pi * radius;
    return circumferenceOfAcircle1;
}

function areaOfArectangle1() {
    const areaOfarectangle1 = array1[0] * array1[1];
    return areaOfarectangle1;
}

function perimeterOfRectangle1() {
    const perimeterOfaRectangle1 = 2 * array1[0] + 2 * array1[1];
    return perimeterOfaRectangle1;
}
function areaOfArectangle2() {
    const areaOfaRectagle2 = array2[0] * array2[1];
    return areaOfaRectagle2;
}
function perimeterOfRectangle2() {
    return 2 * array2[0] + 2 * array2[1];
}
function area4() {
    return 0;
}
function volume4() {
    const volume = pi * array3[0] * array3[0] * array3[0] * array3[1];
    return volume;
}

const areas = computeGeometries();
console.log(areas);
