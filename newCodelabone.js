function computeGeometries(radius, array1, array2, array3) {
  let pi = 22 / 7;
  let areaOfAcircle = pi * radius * radius;
  let circumferenceOfAcircle = 2 * pi * radius;

  let areaOfArectangle1 = array1[0] * array1[1];
  let perimeterOfRectangle1 = 2 * array1[0] + 2 * array1[1];

  let areaOfArectangle2 = array2[0] * array2[1];
  let perimeterOfRectangle2 = 2 * array2[0] + 2 * array2[1];

  let area4 = 0;
  let volume4 = pi * array3[0] * array3[0] * array3[0] * array3[1];

  return [
    [areaOfAcircle, circumferenceOfAcircle],
    [areaOfArectangle1, perimeterOfRectangle1],
    [areaOfArectangle2, perimeterOfRectangle2],
    [area4, volume4],
  ];
}

let areas = computeGeometries(2, [3, 4], [4, 5], [3, 7]);
console.log(areas);
