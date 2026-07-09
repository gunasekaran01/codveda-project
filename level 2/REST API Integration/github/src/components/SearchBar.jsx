import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ searchUser }) {

    const [username, setUsername] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        searchUser(username);
    }

    return (

        <form className="search-form" onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Enter GitHub username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <button type="submit">
                Search
            </button>

        </form>

    );

}

export default SearchBar;