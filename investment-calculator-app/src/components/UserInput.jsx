import { useState } from "react";

const UserInput = function () {
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
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) =>
                            handleChange(
                                "initialInvestment",
                                event.target.value
                            )
                        }
                    />
                </p>
                <p>
                    <label>Annual investment</label>
                    <input
                        type="number"
                        value={userInput.annualInvestment}
                        onChange={(event) =>
                            handleChange("annualInvestment", event.target.value)
                        }
                        required
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected return</label>
                    <input
                        type="number"
                        value={userInput.expectedReturn}
                        onChange={(event) =>
                            handleChange("expectedReturn", event.target.value)
                        }
                        required
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        value={userInput.duration}
                        onChange={(event) =>
                            handleChange("duration", event.target.value)
                        }
                        required
                    />
                </p>
            </div>
        </section>
    );
};

export default UserInput;
