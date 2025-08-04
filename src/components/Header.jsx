import "./Header.css"

function Header() {
    return(
        <div>
            <header>
                <h1 className="header-title" >Game Pulse</h1>
                <div class="input-container">
                    <input type="text" id="search-games" placeholder="Search Games..." />
                </div>
            </header>
        </div>
    )
}

export default Header