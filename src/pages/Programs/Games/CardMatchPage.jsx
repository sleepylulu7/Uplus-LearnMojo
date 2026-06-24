import CardMatchGame from "../../../components/CardMatchGame/CardMatchGame";
import "../Programs.css";

function CardMatchPage() {
  return (
    <main
      className="programs-page programs-game-page"
      aria-label="Card Match Program"
    >
      <CardMatchGame />
    </main>
  );
}

export default CardMatchPage;
