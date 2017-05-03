// plik scripts.js

function getTriangleArea (a, h) {

	if (a <= 0) {
		alert("Nieprawidłowe dane");
	}
	if (h <= 0) {
		alert("Nieprawidłowe dane");
	}

	var triangleArea = a*h/2;
	return triangleArea;
}

console.log(getTriangleArea(10, 6) );
console.log(getTriangleArea(2, 4) );
console.log(getTriangleArea(4, 6) );
console.log(getTriangleArea(8, 10) );
