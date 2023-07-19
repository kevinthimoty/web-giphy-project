import React from "react";
import Giphy from "./../components/Giphy";
import "./../App.css";

const App = () => {
    return (
    <div>
        <div>
            <h2 className="home">SEARCH YOUR GIPHY</h2>
        </div> 
        <Giphy />
    </div>
    );
}

export default App 