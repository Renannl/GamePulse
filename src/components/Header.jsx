import "./Header.css";

function Header({ onSearch }) {
return (
    <div>
    <header>
        <h1 className="header-title">Game Pulse</h1>
        <div className="input-container">
        <input
            type="text"
            id="search-games"
            placeholder="Search Games..."
            onChange={(e) => onSearch(e.target.value)}
        />
        </div>
    </header>
    </div>
);
}

export default Header;
