import "./App.css";
import profileImage from "./assets/profile.png";

const App = () => {
    // Arrow function that formats the user's name
    const formatName = (user, title) =>
        `${title} ${user.firstName} ${user.lastName}`;

    // User object
    const user = {
        firstName: "Serb",
        lastName: "Ocal",
        imageUrl: profileImage,
    };

    const title = "GIS Analyst/Developer";
    return (
        <div>
            <h1>Hello, {formatName(user, title)}</h1>
            <img
                src={user.imageUrl}
                alt={`${user.firstName} ${user.lastName}`}
                width="150"
            />
        </div>
    );
};

export default App;