// import logo from "./logo.svg";
import "./App.css";
import ActicvatedAt from "./Components/Activated";
import Counter from "./Components/Counter";
import user from "./Components/User";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wellcome {user.name}</h1>
        <img src={user.avatar} alt="Avatar" />

        <ActicvatedAt />
        <Counter />
      </header>
    </div>
  );
}

export default App;
