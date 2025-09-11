import React from "react";

export default class App extends React.Component {
    handleSignUp = () => {
        alert("Sign up clicked!");
    };

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Welcome to Hub!</h1>
                <button onClick={this.handleSignUp}>Sign Up</button>
            </div>
        );
    }
}