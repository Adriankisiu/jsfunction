function getTriangleArea (a, h) {
	var triangleArea = a*h/2;

	if ((a <= 0) || (h <= 0))  {
		alert("Nieprawidłowe dane");
	}
	
	return triangleArea;
}

console.log(getTriangleArea(10, 6));
console.log(getTriangleArea(2, 4));
console.log(getTriangleArea(4, 6));
console.log(getTriangleArea(8, 10));
