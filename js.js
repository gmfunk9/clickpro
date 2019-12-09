let score = 0;
let mult = 1;
let increment = 10;
updateScore(score);

function giveScore(score2) {
		score += (mult * increment * 0.02);
		fixedScore = Math.floor(score);
		updateScore(score);
		console.log("score " + score);
		console.log("fixed " + fixedScore);


		if (score >= increment) {
				increment *= 1.1;
				score = 0;
				mult = increment / 10;

				$(".clicker-game_clicker_levelup").slideDown(1000 - increment);
				$(".clicker-game_clicker_levelup").hide(1000 - increment);

		}
}

function updateScore(score) {
		$("#clicker-game_score-counter h2").text("SCORE:" + score.toFixed(2) + " / " + increment.toFixed(2));
		$("#clicker-game_mult h2").text("CLICKER POINTS:" + mult.toFixed(2));

		let progress = (score / increment * 100);
		if (progress > 100) {
				progress = 100
		}
		$("#clicker-game_score-counter_progress").css("width", progress + "%");
}


$("#clicker-game_clicker")
		.click(function() {
				giveScore(1);
		})
		.mouseup(function() {
				$(this).css("background-color", "white");
				$(this).css("border-color", "red");

		})
		.mousedown(function() {
				$(this).css("border-color", "yellow");
				$(this).css("background-color", "grey");
		});



document.body.onkeydown = function(e) {
		if (e.keyCode == 32) {
				giveScore(1);

		}
}
