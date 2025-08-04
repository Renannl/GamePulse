import { useState, useEffect } from "react";
import Header from "./components/Header";
import GameCard from "./components/GameCard";
import AddGameForm from "./components/AddGameForm";

function App() {
  const [games, setGames] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch(
          "https://api.rawg.io/api/games?key=90fa5a3a2b904f7db88e1888c61e3f3e&page_size=30"
        );
        const data = await response.json();

        const topGames = data.results.map((game) => ({
          id: game.id,
          name: game.name,
          players: game.ratings_count,
          image: game.background_image,
          genre: game.genres[0]?.name || "No genre",
        }));
        setGames(topGames);
      } catch (error) {
        console.error("Failed to fetch games:", error);
      }
    }

    fetchGames();
  }, []);

  const handleSaveGame = (newGame) => {
    setGames((prevGames) => [...prevGames, newGame]);
    setIsAdding(false);
  };

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="paginicial">
      <Header onSearch={setSearchTerm} />

      <div className="listOfGameCards">
        {filteredGames.map((game) => (
          <GameCard
            key={game.id}
            title={game.name}
            players={game.players}
            bg={game.image}
            genre={game.genre}
          />
        ))}

        {isAdding ? (
          <AddGameForm
            onSave={handleSaveGame}
            onCancel={() => setIsAdding(false)}
          />
        ) : (
          <button id="addGame" onClick={() => setIsAdding(true)}>+</button>
        )}
      </div>
    </div>
  );
}

export default App;
