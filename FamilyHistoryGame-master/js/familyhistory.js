// need array for questions
the_questions = {
  one : 'Your name?',
  two : "Your Dad's name?",
  three: "Your Mom's name?",
  four: "Your Dad's Dad's name?",
  five: "Your Dad's Mom's name?",
  six: "Your Mom's Dad's name?",
  seven: "Your Mom's Mom's name?"
}
// need array to keep answers to questions
the_answers = []
// function to check if answer is valid or repeat question
function check_answer(answer){
  //TODO
}
// write the questions to screen
function ask_question(){
  // get element id
  for (quest in the_questions){
    document.getElementById("question").innerHTML = the_questions[quest];
  }

}

// add answers to text box or area to show the questions and answers

//


/*
* Funcion to draw on canvas
*/
// starting with basics
function draw() {
  var c = document.getElementById('tree_canvas');
  var ctx = c.getContext('2d');

  ctx.fillStyle = "rgba(135, 118, 50, 0.5)";
  ctx.fillRect(225, 250, 50, 50);

  ctx.fillStyle = "rgba(139, 139, 59, 0.7)";
  ctx.fillRect(221, 240, 50, 55);

}

function add_QA(question, answer) {
  // take the qustion and answer and add them to left
  // column

}
