$(document).ready(function() {

	// --------------------------------------------------------------------
	//GLOBAL VARIABLES AND FUNCTIONS:
	
//TRIVIA QUESTIONS:

	var questionOptions = [{
		question: "What do the letters in the acronym CD-ROM stand for?",
		answerList: ["Compact Disk Read Only Memory", "Compact Drive Read Only Medium",
			"Computer Drive Read Optimal Memory", "Who uses CD-ROMs? I keep my head in the Clouds!"],
		correctAnwr: "Compact Disk Read Only Memory",
	}, {
		question: "1,024 Gigabytes is equal to one which of the following?",
		answerList: ["1 Gigabyte", "1024 Bytes", "1 Terabyte", "Enough storage for my music!"],
		correctAnwr: "1 Terabyte",
	}, {
		question: "In what year was the first Apple computer released?",
		answerList: ["1987", "1980", "1976", "All I know is that it happened before I was born!"],
		correctAnwr: "1976",
	}, {
		question: "In computer science, what does 'GUI' stand for?",
		answerList: ["Graphical User Interface", "Globally Unique Identification", "Global User Interface", "Get User Information"],
		correctAnwr: "Graphical User Interface",
	}, {
		question: "What year was Facebook founded?",
		answerList: ["2006", "2004", "1998", "The year MySpace died."],
		correctAnwr: "2004",
	}, {
		question: "The companies HP, Microsoft and Apple were all started in a what?",
		answerList: ["Think Tank", "Classroom", "Conference Center", "Garage"],
		correctAnwr: "Garage",
	}, {
		question: "Fonts that contain small decorative lines at the end of a stroke are known as what?",
		answerList: ["Curved Fonts", "Serif Fonts", "Sans-Serif Fonts", "Fonts have decorative lines?"],
		correctAnwr: "Serif Fonts",
	}, {
		question: "Who is credited with inventing the first mechanical computer?",
		answerList: ["Steve Jobs", "Charles Babbage", "Alan Turing", "Jedd Fenner"],
		correctAnwr: "Charles Babbage",
	}, {
		question: "When referring to computer memory, what does the acronym RAM stand for?",
		answerList: ["Read Array Method", "Random Access Memory", "Radar Absorbent Material", "Remote Area Maintenance!"],
		correctAnwr: "Random Access Memory",
	}, {
		question: "With over 17 million units produced, what is recorded in the Guinness World Records as the top selling single model of personal computer?",
		answerList: ["ThinkPad", "Sun-1", "Macintosh II", "The Commodore 64"],
		correctAnwr: "The Commodore 64",
	}];


// -------------------------------------------------------------------------------------------------------------------------------------------------
//GAME SCORES & LOGIC:
	var gameScore = {
		correct: 0,
		wrong: 0,
	}; 	

	var game = {
		gameCount: 10,
		countDown: function() {
			game.gameCount--;
			$("#gameStats").html(game.gameCount);

			if (game.gameCount <= 0) {
				console.log("Your time is up! Let's see how you scored.");
				clearInverval(gameTimer);
				game.over();
			}
		},

		startGame: function () {	
			gameTimer = setInterval(game.countDown, 1000);

			$("#avaText").empty();
			$("#buttonMain").remove();
			
			$("#trivia").append("<br/><button id='done'>All Done!</button>");

			for (var i = 0; i < questionOptions.length; i++) {
				$("#trivia").append("<h3>" + questionOptions[i].question + "</h3>");
				for (var j = 0; j < questionOptions[i].answerList.length; j++) {
					$("#trivia").append("<input type='radio' name='questionOptions-" +
				 	 i + "' value='" + questionOptions[i].answerList[j] + "'>" + questionOptions[i].answerList[j] + "</input>");
				}
			}
		},

		over: function() {
			$.each($("input[name='question-0]':checked")), function () {
				if ($(this).valu()==questionOptions[0].correctAnwr){
					gameScore.correct++;
				}
				else {
					gameScore.wrong++;
				}
			},
			$.each($("input[name='question-1]':checked")), function () {
				if ($(this).valu()==questionOptions[1].correctAnwr){
					gameScore.correct++;
				}
				else {
					gameScore.wrong++;
				}
			},
			$.each($("input[name='question-2]':checked")), function () {
				if ($(this).valu()==questionOptions[2].correctAnwr){
					gameScore.correct++;
				}
				else {
					gameScore.wrong++;
				}
			},
			$.each($("input[name='question-3]':checked")), function () {
				if ($(this).valu()==questionOptions[3].correctAnwr){
					gameScore.correct++;
				}
				else {
					gameScore.wrong++;
				}
			},
			$.each($("input[name='question-4]':checked")), function () {
				if ($(this).valu()==questionOptions[4].correctAnwr){
					gameScore.correct++;
				}
				else {
					gameScore.wrong++;
				}
			},
			$.each($("input[name='question-5]':checked")), function () {
				if ($(this).valu()==questionOptions[5].correctAnwr){
					gameScore.correct++;
				}
				else {
					gameScore.wrong++;
				}
			},
			$.each($("input[name='question-6]':checked")), function () {
				if ($(this).valu()==questionOptions[6].correctAnwr){
					gameScore.correct++;
				}
				else {
					gameScore.wrong++;
				}
			},
			$.each($("input[name='question-7]':checked")), function () {
				if ($(this).valu()==questionOptions[7].correctAnwr){
					gameScore.correct++;
				}
				else {
					gameScore.wrong++;
				}
			},
			$.each($("input[name='question-8]':checked")), function () {
				if ($(this).valu()==questionOptions[8].correctAnwr){
					gameScore.correct++;
				}
				else {
					gameScore.wrong++;
				}
			},
			$.each($("input[name='question-9]':checked")), function () {
				if ($(this).valu()==questionOptions[9].correctAnwr){
					gameScore.correct++;
				}
				else {
					gameScore.wrong++;
				}
			},

			game.results();
		},

		results: function () {
			clearInverval(gameTimer);
			$("#trivia").empty().append("<h2>What do you think? Whant to try again?</h2>");
			
			$("#score").append("<h2> Correct: " + gameScore.correct + "</h2>");
			console.log("Right: " + gameScore.correct)
			$("#score").append("<h2> Wrong: " + gameScore.wrong + "</h2>");
			console.log("Wrong: " + gameScore.wrong)
			$("#score").append("<h2> Unanswered: " + (questionOptions.length-(gameScore.correct+gameScore.wrong)) + "</h2>");
			console.log("Unanswered: " + questionOptions.length-(gameScore.correct+gameScore.wrong));			
		},
	};

// --------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------
//GAME START:
	$("#buttonMain").on("click", function () {
		console.log("You clicked mainButton; the game now starts!");
		game.startGame ();
	});

	$(document).on("click","done", function () {
		console.log("You clicked All Done button; the game now ends!");
		game.over();
	});

}); //end of app.js file
// --------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------
