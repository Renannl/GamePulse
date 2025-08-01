import { useState, useEffect } from "react";
import Header from "./components/Header";
import GameCard from "./components/GameCard";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function requestApi() {
      const requestApi = await fetch("https://api.rawg.io/api/games?key=fa5a3a2b904f7db88e1888c61e3f3e&page_size=10");
      const response = await requestApi.json();
    
      // Ajuste para usar a estrutura correta da RAWG API
      const topGames = response.results.map((game) => ({
        id: game.id,
        name: game.name,
        players: game.ratings_count, // usando quantidade de avaliações como "players"
        image: game.background_image // capa do jogo
      }));

      setGames(topGames);
    }
    requestApi();
  }, []);

  function addGame() {
    const outrojogo = {id: Date.now(), name: "cabraozin", players: 34};
    setGames([...games, outrojogo]);
  }

  return (
    <div className="paginicial">
      <Header />
      <div className="listOfGameCards">
        {games.map((game) => (
          <GameCard 
            key={game.id}
            title={game.name}
            players={game.players}
            bg={game.image}
          />
        ))}
        <button onClick={addGame}>Adicionar Jogo</button>
      </div>   
    </div>
  );
}

export default App;
