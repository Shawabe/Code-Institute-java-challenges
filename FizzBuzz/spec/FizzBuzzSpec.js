describe("My FizzBuzz function", function(){

	it("should return a string of 'Fizz' if, the number is divisible by 3", function(){
		spyOn(window, "alert");
		FizzBuzz(6);
		expect(window.alert).toHaveBeenCalledWith("Fizz");
	});
	it("should return a string of 'Buzz' if, the number is divisible by 5", function(){
		spyOn(window, "alert");
		FizzBuzz(10);
		expect(window.alert).toHaveBeenCalledWith("Buzz");
	});
	it("should return a string of 'FizzBuzz!' if, the number is divisble by 3 and 5", function(){
		spyOn(window, "alert");
		FizzBuzz(15);
		expect(window.alert).toHaveBeenCalledWith("FizzBuzz!");
	});
	it("should return the original number if NOT divisible by either number", function(){
		spyOn(window, "alert");
		FizzBuzz(29);
		expect(window.alert).toHaveBeenCalledWith(29);
	});
});