function triangle(){
	var tracker = [];

	tracker.push(parseInt(prompt("Enter the first number of the triangle: ")));
		if(isNaN(tracker[0]) === true || tracker[0] <= 0){
			alert("Please enter a valid number");
		}else {
			tracker.push(parseInt(prompt("Enter the second number of the triangle:")));
				if(isNaN(tracker[1]) === true || tracker[1] <= 0){
					alert("Please enter a valid number");
				}else {
					tracker.push(parseInt(prompt("Enter the third number of the triangle:")));
					if(isNaN(tracker[2]) === true || tracker[2] <= 0){
						alert("Please enter a valid number");
					}else {
						if((tracker[0] + tracker[1]) <= tracker[2] || (tracker[1] + tracker[2]) <= tracker[0] || (tracker[0] + tracker[2]) <= tracker[1]){
							alert("It's NOT A triangle");
						}
							else if(tracker[0] === tracker[1] && tracker[1] === tracker[2]){
								alert("It is an equilateral triangle");
							}
							else if(tracker[0] === tracker[1] || tracker[1] === tracker[2] || tracker[0] === tracker[2]){
								alert("It's an isosceles triangle");
							}else {
								alert("It's a scarlene triangle");
							}
					}
				}
		}
}
