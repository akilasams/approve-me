import "./App.scss";
import Login from "./pages/login-page/Login";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Login />
      </div>
    </>
  );
}

export default App;
