var questions = [
    {
      "question": "Who was president before Barack Obama?",
      "answers": ["Donald Trump", "George Bush", "Jimmy Carter", "Bill Clinton"],
      "rightAnswer": "George Bush"
    },
    {
      "question": "In which city are you if you are standing on the Spanish Steps?",
      "answers": ["Madrid", "Paris", "London", "Rome"],
      "rightAnswer": "Rome"
    },
    {
      "question": "In what year was the UNO created?",
      "answers": ["1945", "1952", "1938", "1965"],
      "rightAnswer": "1945"
    }
  ];
  
  var questionBtn = document.querySelectorAll('.answer-btn');
  var plyrScore = 0;
  var questionIndex = 0;
  
  generateQuestion();
  
  let resultPlyr = document.getElementById('result');
  function generateQuestion() {
    if (questionIndex >= questions.length) {
      resultPlyr.innerHTML = `Your score is ${plyrScore}/3`
      return;
    }
  
    var currentQuestion = questions[questionIndex];
  
    document.getElementById('question-text').innerHTML = currentQuestion.question;
  
    for (let i = 0; i < currentQuestion.answers.length; i++) {
      questionBtn[i].innerHTML = currentQuestion.answers[i];
    }
  
    questionIndex++;
  }
  
  questionBtn.forEach(function(button) {
    button.addEventListener('click', function(event) {
      var btnClicked = event.target.innerHTML;
      var currentQuestion = questions[questionIndex - 1];
  
      if (btnClicked === currentQuestion.rightAnswer) {
        plyrScore++;

      } 
      console.log(plyrScore)
      generateQuestion();
    });
  });
