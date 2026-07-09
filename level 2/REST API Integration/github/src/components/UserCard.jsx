import "./UserCard.css";

function UserCard({ user }) {
    return (
        <div className="user-card">

            <img
                src={user.avatar_url}
                alt={user.login}
                className="profile-image"
            />

            <h2>{user.name || "No Name Available"}</h2>

            <h3>@{user.login}</h3>

            <p className="bio">
                {user.bio || "No bio available"}
            </p>

            <div className="stats">

                <div className="stat-box">
                    <h4>{user.followers}</h4>
                    <p>Followers</p>
                </div>

                <div className="stat-box">
                    <h4>{user.following}</h4>
                    <p>Following</p>
                </div>

                <div className="stat-box">
                    <h4>{user.public_repos}</h4>
                    <p>Repositories</p>
                </div>

            </div>

            <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-btn"
            >
                View GitHub Profile
            </a>

        </div>
    );
}

export default UserCard;