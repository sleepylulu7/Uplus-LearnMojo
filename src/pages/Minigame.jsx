import {useState} from "react";
import "./Minigame.css";



function Minigame() {
  const [animalGameFinished, setAnimalGameFinished] = useState(false);
  const [numberQuestionFinished,setNumberQuestionFinished ] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [animalScore, setAnimalScore] =useState(0);
  const [matchScore, setMatchScore] = useState(0);
  const numberQuestions= [
    {
     objects: "🐶 🐶 🐶",
     answer : 3,
     options :[ 1,3,6,9],
    },
     {
    objects: "🐴 🐴 🐴 🐴 🐴 🐴 🐴 🐴",
    answer: 8,
    options: [2,4,6,8],
  },
    
    {
      objects: "🐰 🐰",
      answer : 2,
      options:[2,4,6,8],
    },
    {
    objects: "🐺 🐺 🐺 🐺 🐺 🐺 🐺",
    answer: 7,
    options: [3,5,7,9],
  },

    {
      objects: "🐟 🐟 🐟 🐟",
      answer: 4,
      options:[1,2,3,4],
    },
    {
    objects: "🐦 🐦 🐦 🐦 🐦",
    answer: 5,
    options: [5,6,7,8],
    },
    {
       objects : "🐱",
       answer: 1,
       options:[1,3,6,9],
    },
    {
    objects: "🐘 🐘 🐘 🐘 🐘 🐘",
    answer: 6,
    options: [5,6,7,8],
  },




  ];
  const [numberQuestionIndex, setNumberQuestionIndex] = useState(0);
const currentNumberQuestion = numberQuestions[numberQuestionIndex];

  const handleNumberAnswer = (option) => {
    if(option === currentNumberQuestion.answer){
      setMatchScore(matchScore + 1);
    }
    if(numberQuestionIndex < numberQuestions.length -1){
      setNumberQuestionIndex(numberQuestionIndex + 1);

    }else{
       setNumberQuestionFinished(true);
    }
  };
    const restartNumberGame = () =>{
      setMatchScore(0);
      setNumberQuestionIndex(0);
  setNumberQuestionFinished(false);
  
  };

  const animalQuestion =[
    {
      animal : "🐶",
      answer: "dog",
      options : ["cat","dog","rabbit","fish"],
    },
     {
    animal: "🐦",
    answer: "bird",
    options: ["bird", "horse", "elephant", "wolf"],
  },
    {
      animal :"🐰",
      answer: "rabbit",
      options:["cat","dog","rabbit","fish"],
    },

    {
    animal: "🐴",
    answer: "horse",
    options: ["bird", "horse", "elephant", "wolf"],
  },
    {
      animal: "🐱",
      answer: "cat",
      options: ["cat","dog","rabbit","fish"],
    },
    {
    animal: "🐘",
    answer: "elephant",
    options: ["bird", "horse", "elephant", "wolf"],
  },
    {
      animal:"🐟",
      answer:"fish",
      options:["cat","dog","rabbit","fish"],
    },
  {
    animal: "🐺",
    answer: "wolf",
    options: ["bird", "horse", "elephant", "wolf"],
  },

  ];

  const [animalQuestionIndex , setAnimalQuestionIndex] = useState(0);
  const currentAnimalQuestion = animalQuestion[animalQuestionIndex];

  const handleAnimalAnswer = (option) => {
               if(option === currentAnimalQuestion.answer){
                setAnimalScore(animalScore + 1);
               }

               if(animalQuestionIndex <animalQuestion.length -1){
                setAnimalQuestionIndex(animalQuestionIndex + 1);
               }else{
                setAnimalGameFinished(true);
               }
            };

            const restartAnimalGame = () =>{
              setAnimalScore(0);
              setAnimalQuestionIndex(0);
              setAnimalGameFinished(false);
            };

  return (
    <section className="minigame-page">
      <div className="minigame-header">
        <h1>Welcome to LearnMojo Game!</h1>
        <p>Choose a game to begin</p>
      </div>

      <div className="game-grid">
        <div className="mini-game-card puzzles-card">
          <div className="card-icon">🧩</div>
          <h2>Animal Match</h2>
          <p>Match the animal with the correct name</p>
          <button onClick={() => setSelectedGame("animal-match")}>Start</button>
        </div>
        


        <div className="mini-game-card math-card">
          <div className="card-icon">🔢</div>
          <h2>Math</h2>
          <p>count the animal and choose the right number.</p>
          <span>Example: 🐶 🐶 🐶 = 3</span>
          <button onClick={() => setSelectedGame("number-match")}>Start</button>
        </div>
        </div>
        


      
{selectedGame === "number-match" &&(
          <div className="number-match-game">
            {numberQuestionFinished ?(
              <>
              <h2>Number match complete</h2>
              <p>
                You score is {matchScore} out of {numberQuestions.length}
              </p>
              <button onClick = {restartNumberGame}>Try Again</button>
              </>

            ):(
              <>
            <div className="score">Score :{matchScore}</div>
            <h2>Number Match</h2>
            <p>How many animal do you see?</p>

            <div className="counting-objects">
              {currentNumberQuestion.objects}
            </div>

            <div className="answer-options">
              {currentNumberQuestion.options.map((option)=>
              (<button key={option} onClick={() => handleNumberAnswer(option)}>
                {option}</button>      
              ))}

               </div>
            </>
           ) }
          </div>
        )}

        {selectedGame === "animal-match" &&(
          <div className="animal-match-game">
            {animalGameFinished ?(
              <>
              <h2>Animal Match Complete</h2>
              <p>
                Your score is {animalScore} out of {animalQuestion.length}
              </p>
              <button onClick = {restartAnimalGame}> Try Again</button>
              </>
        ):(
            <>
            <div className="score">Score :{animalScore}</div>

            <h2>Animal Match</h2>
            <p>Which animal is this?</p>
            
            <div className="animal-picture">
              {currentAnimalQuestion.animal}
            </div>

            <div className="answer-options">
              {currentAnimalQuestion.options.map((option) =>(
                <button key={option} onClick={() => handleAnimalAnswer(option)}>
                  {option}
                </button>
              ))}
            </div>
            </>
            )}
          </div>

        )}

    </section>
  );
}

export default Minigame;