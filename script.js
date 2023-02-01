function RPS(player){
	let computer = "";
	let num = Math.floor(Math.random() * 3);
	if(num == 0){
     computer = "rock";
	} else if(num == 1){
	 computer = "paper";
	} else {
	 computer = "scissors";	
	}
  
  //Player choice is rock
  if(player == "rock" && computer == "paper"){
    console.log("You lose! Paper beats rock!");
  } else if(player == "rock" && computer == "scissors"){
    console.log("You win! Rock beats scissors!");
  } else if(player == "rock" && computer == "rock"){
  	console.log("It's a draw! You both chose rock!");
  }

  //Player choice is paper
  if(player == "paper" && computer == "scissors"){
    console.log("You lose! scissors beats paper!");
  } else if(player == "paper" && computer == "rock"){
    console.log("You win! paper beats rock!");
  } else if(player == "paper" && computer == "paper"){
  	console.log("It's a draw! You both chose paper!");
  }

   //Player choice is scissors
  if(player == "scissors" && computer == "rock"){
    console.log("You lose! rock beats scissors!");
  } else if(player == "scissors" && computer == "paper"){
    console.log("You win! scissors beats paper!");
  } else if(player == "scissors" && computer == "scissors"){
  	console.log("It's a draw! You both chose scissors!");
  }
  


} 




RPS("rock");