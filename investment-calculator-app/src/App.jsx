import { useState } from "react";

import UserInput from "./components/UserInput";
import Header from "./components/Header";
import Results from "./components/Results";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const handleChange = function (inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue,
            };
        });
    };

    return (
        <>
            <Header />;
            <UserInput userInput={userInput} onChange={handleChange} />;
            <Results input={userInput} />
        </>
    );
}

export default App;
