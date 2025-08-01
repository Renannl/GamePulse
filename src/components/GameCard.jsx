import "./GameCard.css"

function GameCard({title, players, bg}) {
    return(
        <div className="GameCard">
            <img src={bg} alt="placeholder" />
            <div className="game-info">
                <h3 className="game-title">{title}</h3>
                <h4 className="game-players">{players}</h4>
            </div>
        </div>
    )
}

export default GameCard