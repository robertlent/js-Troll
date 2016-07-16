function game() {
	var troll = prompt("You're walking through the forest, enjoying the beautiful scenery, when you run into a troll! Do you TALK to him or do you RUN?").toUpperCase();

	switch(troll) {
	  case 'TALK':
		alert("The troll greets you as you approach: 'Hello traveller! Welcome to my forest. Normally, I would eat you for entering my forest, but today I am feeling exceptionally kind. Instead, I will ask you three riddles.\n" +
			"'If you should answer them all correctly, I will let you pass.'");
		var riddleOne = prompt("First Riddle: What word becomes shorter when you add two letters to it?").toLowerCase();
		if(riddleOne === 'short') {
		  alert("The Troll doesn't seem impressed that you answered correctly. 'Good Job human, but the first is always the easiest. Next riddle!'");
		  var riddleTwo = prompt("Second Riddle: What is so delicate that saying its name breaks it?");
		  if (riddleTwo === 'silence') {
			  alert("Now the Troll seems surprised. 'Impressive! I am starting to regret giving you this chance.\nI do not think that you will get the last riddle, though.'");
			  riddleThree = prompt("Third Riddle: Poor people have it. Rich people need it. If you eat it you die. What is it?");
			  if (riddleThree === 'nothing') {
				  sweetAlert("'Congratulations human! You have answered all three of my riddles correctly!\nAs promised, you may live..... for now.'");
			  } else {
				  sweetAlert("The Troll laughs. 'You were so close, human. But now, I must eat.'\n\nGAME OVER!");
			  }
		  } else {
			  sweetAlert("You have answered incorrectly. The Troll does not seem surprised at your failure. 'I knew that no human could possibly answer more than the first riddle correctly. Dinner Time!'\n\nGAME OVER!");
		  }
		} else {
		  sweetAlert("You have answered incorrectly. 'I am sorry that you have failed on the first riddle, but now it is time for me to eat!'\n\nGAME OVER!");
		}
		break;
	  case 'RUN':
		sweetAlert("As you try to run, you are picked up by another troll, who promptly kills you. Your last thought is to ask yourself how you failed to notice a second, giant troll.\n\nGAME OVER!")
		break;
	  default:
		alert("Your failure to choose to either TALK to the troll or RUN from him has created a wormhole that has sent you back in time! Choose again!");
		game();
	}
}