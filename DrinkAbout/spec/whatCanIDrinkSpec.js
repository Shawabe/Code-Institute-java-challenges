describe ("My what can I drink function", function(){

	describe ("The age", function(){
		it("should return Drink Toddy for ages between 0 & 14", function(){
			spyOn(window, "alert");
			whatCanIDrink(8);
			expect(window.alert).toHaveBeenCalledWith("Drink Toddy");
		});
		it("should return Drink Coke for ages between 14 & 18", function(){
			spyOn(window, "alert");
			whatCanIDrink(17);
			expect(window.alert).toHaveBeenCalledWith("Drink Coke");
		});
		it("should return Drink Beer for ages between 18 & 21", function(){
			spyOn(window, "alert");
			whatCanIDrink(20);
			expect(window.alert).toHaveBeenCalledWith("Drink Beer");
		});
		it("should return Drink Whiskey for ages between 21 & 130", function(){
			spyOn(window, "alert");
			whatCanIDrink(87);
			expect(window.alert).toHaveBeenCalledWith("Drink Whiskey");
		});
	});
	describe ("Error messages", function(){
		it("should return an error if input is 0 or lower", function(){
			spyOn(window, "alert");
			whatCanIDrink(0);
			expect(window.alert).toHaveBeenCalledWith("Sorry, I can't tell what drink because that age is incorrect! Are you sure you are under 0?")
		});
		it("should return an error if input is 130 or higher", function(){
			spyOn(window, "alert");
			whatCanIDrink(135);
			expect(window.alert).toHaveBeenCalledWith("Sorry, I can't tell what drink because that age is incorrect! Are you sure you are over 130?")
		});
		it("should return an error if input is not a number", function(){
			spyOn(window, "alert");
			whatCanIDrink("gh");
			expect(window.alert).toHaveBeenCalledWith("Please enter a valid age")
		});
		
	});
});