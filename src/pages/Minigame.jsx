import "./Minigame.css";

function Minigame() {
  return (
    <section className="minigame-page">
      <div className="minigame-header">
        <h1>Match the Animal</h1>
        <p>Choose the correct animal name!</p>
      </div>

      <div className="game-card">
        <div className="score">Score: 0</div>

        <div className="animal-picture">🐶</div>

        <h2>Which animal is this?</h2>

        <div className="answer-options">
          <button>Cat</button>
          <button>Dog</button>
          <button>Rabbit</button>
          <button>Bird</button>
        </div>
      </div>
    </section>
  );
}

export default Minigame;   