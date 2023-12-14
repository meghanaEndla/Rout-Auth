import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Implement signup logic (e.g., send data to the server)
    alert(`Signup - Username: ${username}, Password: ${password}`);
  };

  const handleLogin = () => {
    // Implement login logic (e.g., send data to the server)
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement logout logic (e.g., clear session on the server)
    setLoggedIn(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        {loggedIn ? (
          <div>
            <h1 className="text-3xl font-semibold mb-4">
              Welcome, {username}!
            </h1>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-semibold mb-4">Signup</h1>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="border rounded w-full py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded w-full py-2 px-3"
              />
            </div>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSignup}
            >
              Signup
            </button>
            <h1 className="text-3xl font-semibold mt-8 mb-4">Login</h1>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="border rounded w-full py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded w-full py-2 px-3"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
