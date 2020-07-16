/* eslint-disable no-var */
function computeGeometries(r, array1, array2, array3) {
    const area1 = (22 / 7) * r * r;
    // let d = 2 * r;
    const p1 = 2 * (22 / 7) * r;
    const a2 = array1[0] * array1[1];
    const p2 = 2 * array1[0] + 2 * array1[1];
    const a3 = array2[0] * array2[1];
    const p3 = 2 * array2[0] + 2 * array2[1];
    var a4 = 0;
    const v4 = (22 / 7) * array3[0] * array3[0] * array3[0] * array3[1];
    return [[area1, p1], [a2, p2], [a3, p3], [a4, v4]];
}

const areas = computeGeometries(2, [3, 4], [4, 5], [3, 7]);
console.log(areas);
