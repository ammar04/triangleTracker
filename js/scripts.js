var triangle =function() {

function check_triangleTracker(){
	var triangle = [];

	triangle.push(parseInt(prompt("Enter the first dimension of the triangle: ")));
		if(isNaN(triangle[0]) === true || triangle[0] <= 0){
			alert("Please enter a valid dimension");
		}else{
			triangle.push(parseInt(prompt("Enter the second dimension of the triangle:")));
				if(isNaN(triangle[1]) === true || triangle[1] <= 0){
					alert("Please enter a valid dimension");
				}else{
					triangle.push(parseInt(prompt("Enter the third dimension of the triangle:")));
					if(isNaN(triangle[2]) === true || triangle[2] <= 0){
						alert("Please enter a valid dimension");
					}else{
						if((triangle[0] + triangle[1]) <= triangle[2] || (triangle[1] + triangle[2]) <= triangle[0] || (triangle[0] + triangle[2]) <= triangle[1]){
							alert("It's not a triangle");
						}
							else if(triangle[0] === triangle[1] && triangle[1] === triangle[2]){
								alert("It is an equilateral triangle");
							}
							else if(triangle[0] === triangle[1] || triangle[1] === triangle[2] || triangle[0] === triangle[2]){
								alert("It's an isosceles triangle");
							}else{
								alert("It's a scarlene triangle");
							}
					}
				}
		}
}
