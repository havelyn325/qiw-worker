class Day {
	constructor(text, text2, cls) {
		this.text = text;
		this.text2 = text2;
		this.cls = cls;
	} 	
}

class Day1  extends Day {	
	constructor (){
		super('Кив сегодня работает', 'в день...', 'red');
	}	
}
class Day2  extends Day {	
	constructor (){
		super('Кив сегодня работает', 'в ночь...', 'red');
	}	
}
class Day3  extends Day {	
	constructor (){
		super('У Кива сегодня', 'первый выходной!', 'green');
	}	
}
class Day4  extends Day {	
	constructor (){
		super('У Кива сегодня', 'второй выходной!', 'green');
	}	
}


$(document).ready(function (){
	var today = new Date();
	
	//Захардкоженая дата когда был в день
	var dayShift = new Date(2026, 03, 22);
	
	var dayDiff = today - dayShift;
	
	var testDate = new Date(dayDiff);
	
	dayDiff = dayDiff / 1000 / 60 / 60 / 24;
	
	var dayOffset = Math.floor(dayDiff % 4);
	console.log({dayDiff, dayOffset});
	
	var allDays = [
		new Day1(),
		new Day2(),
		new Day3(),
		new Day4()
	];
	var currentDay = allDays[dayOffset];

	$('#content').html(
		currentDay.text + '<span class = "'+ currentDay.cls +'"> ' + currentDay.text2 + '</span>'
	);
	
});

//$(){}
