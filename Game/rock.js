/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
let totalscore={playerscore:0,computerscore:0};
function getComputerChoice() {
  let string=['Rock','Paper','Scissors'];
  let computerchoice=Math.floor(Math.random()*3);
  return string[computerchoice];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  if(playerChoice==computerChoice)
  {
    score=0;
  }
  else if(playerChoice=='Scissors'&&computerChoice=='Rock')
  {
    score=-1;
  }
    else if(playerChoice=='Rock'&&computerChoice=='Paper')
  {
    score=-1;
  }
    else if(playerChoice=='Scissors'&&computerChoice=='Rock')
  {
    score=-1;
  }   
  else{

    score=1;
  }
    
  // All situations where human draws, set `score` to 0
  

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  

  // Otherwise human loses (aka set score to -1)
  

  // return score
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  let resultDiv=document.getElementById('result');
  let playerscoreDiv=document.getElementById('player-score');
  let handsDiv=document.getElementById('hands');
  if(score==-1)
  {
    
    resultDiv.innerText='You Lose!';
  }
  if(score==1){
    
     resultDiv.innerText='You Win!';
  }
   if(score==0){
     resultDiv.innerText="It's a Draw";
  }
   playerscoreDiv.innerText= `Your score : ${totalscore['playerscore']} vs  computer score : ${totalscore['computerscore']}`;
    handsDiv.innerText=`${playerChoice} vs ${computerChoice}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  let values=getComputerChoice();
  let score=getResult(playerChoice,values);
  totalscore['playerscore']+=score;
  totalscore['computerscore']-=score;
  showResult(score,playerChoice,values);  
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
 let rpsButtons=document.querySelectorAll('.rpsButton');
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
   rpsButtons.forEach(Button=>
  Button.onclick=()=>
    {
      onClickRPS(Button.value);
    })
    
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  // Add a click listener to the end game button that runs the endGame() function on click
  let endGameButtonDiv=document.getElementById('endGameButton');
  endGameButtonDiv.onclick=()=>
    {
    endGame();
  }
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  totalscore['playerscore']=0;
  totalscore['playerscore']=0;
   let resultDiv=document.getElementById('result');
  let playerscoreDiv=document.getElementById('player-score');
  let handsDiv=document.getElementById('hands');
  resultDiv.innerText='';
  playerscoreDiv.innerText='';
  handsDiv.innerText='';
}

playGame()