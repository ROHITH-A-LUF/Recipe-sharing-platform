import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
|
|
import { useState } from "react";
export default function App() {
  const [n, setN] = useState("");
  const [e, setE] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = (x) => {
    x.preventDefault();
    if (!n || !e) setErr("All fields required");
    else if (!/\S+@\S+\.\S+/.test(e)) setErr("Invalid email");
    else {
      setErr("");
      alert(`${n}, ${e}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={n} onChange={(a) => setN(a.target.value)} placeholder="Name" /><br/>
      <input value={e} onChange={(a) => setE(a.target.value)} placeholder="Email" /><br/>
      <p style={{ color: "red" }}>{err}</p>
      <button>Submit</button>
    </form>
  );
  |
  |

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
