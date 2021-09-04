
var score = 0;

var log = console.log

var readlineSync = require("readline-sync");
const chalk = require('chalk');


log(chalk.italic.blue("Welcome to the quiz !!"));

 var UserName =  readlineSync.question(chalk.red.bgBlack("What is your name ?? \n"));

log(chalk.green("Welcome "+ chalk.blue.bold(UserName)+"!! Lets play the quiz to know how well do you know me"));

log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");


function quiz(options,question,answer,correctAnswer)
{
  var query ="Choose a no. from a list";
      var Userquestion = readlineSync.question(chalk.red(question +"\n"+(chalk.magenta("Press Enter"))));
      // log(chalk.magenta("Press Enter"));
     var UserAnswer=  readlineSync.keyInSelect(options)


  if((UserAnswer+1) === answer)
  {
    log(chalk.green("Yayy !!You're answer is right"));
    score++;
  }
  else{
    log(chalk.red("Oops !! You're answer is wrong"));
    log(chalk.blue("The correct answer is : "+correctAnswer));
  }
 log(chalk.bgCyan.black("Your current Score is : "+ score));
  log("---------------------------------------------");

}

var arrOfQuestions = [
  {
    question : "What is my favourite hobby ?? ",
    options :[" Listening to music"," Dancing"," Reading novels"],
    answer : 3,
    correctAnswer : "Reading novels"
  },
  {
    question : "Which is my most awaited web-series for now ?? ",
     options :[" Four more shots "," Money heist "," Lucifer  "],
    answer : 2,
     correctAnswer : "Money heist",
  },
  {
    question : "Which is the most favourite movie ?? ",
    options :["1. URI","2. Super 30","3. Shershaah"],
    answer :  3,
    correctAnswer : "Shershaah"
  },
  {
    question : "Which is the most favourite song ?? ",
    options :["Ranjha","Raatan lambiyan","Mann bharya"],
    answer : 1,
    correctAnswer :  "Ranjha"
  },
  {
    question : "Who are my best Friends?? ",
    options :["Ankur and Ashutosh","Sejal and Ankur","Sejal and Prince"],

    answer : 2,

    correctAnswer : "Sejal and Ankur"
  },
  {
    question : "Which cartoon show I have watched the most ?? ",
    options :["Doremon","Shinchan","Ninja hattori"],
    answer :  3 ,
    correctAnswer : "Ninja hattori"
  },
  {
    question : "Which is the my favourite novel in Indian writers ??",
    options :[ "Your dreams are mine now","Can love happen twice","I too had a love story"],
    answer : 1 ,
    correctAnswer : "Your dreams are mine now"
  },
  {
    question : "One of my favorite pass time thing is ??",
    options :["Watching reels","Listening songs","Cooking"],
    answer : 2,
    correctAnswer : "listening songs" 
  },
  {
    question : "Which is my current favorite TV show ??",
    options :["Bigg Boss","Khatron ke khiladi","Roadies"],
    answer : 2 ,
    correctAnswer : "khatron ke khiladi"
  },
  {
    question : "One of the adventurous activity for which I am excited ??",
    options :["Paragliding","River rafting","Bungy jumping"],
    answer : 1,
    correctAnswer : "Paragliding"
  }
]

var highScore = [
  {
    name : "Priya",
    score : 10
  }
  ,{
    name :"Ankur",
    score : 9
  }
]
for(var i = 0 ; i < arrOfQuestions.length ; i++)
{
 log(chalk.yellow("question no.", i+1)); 
 quiz(arrOfQuestions[i].options,arrOfQuestions[i].question,arrOfQuestions[i].answer,arrOfQuestions[i].correctAnswer);
}
log(chalk.green("Yayy !! Your total score is : ",score+"/10"));
log(chalk.bgRedBright.black("Check current highScorers :"))
for(var i = 0 ; i < highScore.length ; i++)
{
log(chalk.blue(highScore[i].name));
}
