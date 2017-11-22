function whatCanIDrink(age){

	if(age <= 0) {
		alert("Sorry, I can't tell what drink because that age is incorrect! Are you sure you are under 0?");
	} else if(age > 0 && age <= 14){
		alert("Drink Toddy");
	} else if(age > 14 && age <= 18){
		alert("Drink Coke");
	} else if(age > 18 && age <= 21){
		alert("Drink Beer");
	} else if(age > 21 && age <= 130){
		alert("Drink Whiskey");
	} else if(age > 130){
		alert("Sorry, I can't tell what drink because that age is incorrect! Are you sure you are over 130?");
	} else {
		if(isNaN(age));
		alert("Please enter a valid age")
	}
}
