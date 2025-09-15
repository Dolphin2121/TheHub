import React from "react";

export default class App extends React.Component {
    handleSignUp = () => {
        alert("Sign up clicked!");
    };

    render() {
        return (
            <div style={{ fontFamily: "Arial, sans-serif", background: "#f4f4f4", minHeight: "100vh" }}>
                <header style={{ background: "#4267B2", color: "#fff", padding: "20px 0", textAlign: "center" }}>
                    <h1>SocialHub</h1>
                </header>
                <main style={{ maxWidth: "600px", margin: "40px auto", background: "#fff", padding: "30px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                    <h2>Sign Up</h2>
                    <button 
                        style={{ padding: "10px 30px", background: "#4267B2", color: "#fff", border: "none", borderRadius: "4px", fontSize: "16px", cursor: "pointer" }}
                        onClick={this.handleSignUp}
                    >
                        Sign Up
                    </button>
                    <hr style={{ margin: "40px 0" }} />
                    <h2>Feed</h2>
                    <div style={{ background: "#f0f2f5", padding: "15px", borderRadius: "6px", marginBottom: "15px" }}>
                        <strong>@alice</strong>
                        <p>Hello world! This is my first post.</p>
                    </div>
                    <div style={{ background: "#f0f2f5", padding: "15px", borderRadius: "6px" }}>
                        <strong>@bob</strong>
                        <p>Excited to join SocialHub!</p>
                    </div>
                </main>
                <footer style={{ textAlign: "center", padding: "15px 0", color: "#888" }}>
                    &copy; 2025 SocialHub
                </footer>
            </div>
        );
    }
}