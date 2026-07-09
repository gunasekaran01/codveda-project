import { useState } from "react";

import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import Loader from "./components/Loader";

import "./App.css";

function App() {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    async function searchUser(username) {

        if (username === "") {

            setError("Please enter a username.");

            setUser(null);

            return;

        }

        setLoading(true);

        setError("");

        setUser(null);

        try {

            const response = await fetch(
                `https://api.github.com/users/${username}`
            );

            if (!response.ok) {

                throw new Error("User not found");

            }

            const data = await response.json();

            setUser(data);

        }

        catch {

            setError("GitHub user not found.");

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <div className="container">

            <h1>GitHub User Search</h1>

            <SearchBar searchUser={searchUser} />

            {loading && <Loader />}

            {error && <p className="error">{error}</p>}

            {user && <UserCard user={user} />}

        </div>

    );

}

export default App;