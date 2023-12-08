import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainVideoPage from "./videoComponents/MainVideoPage";
import socketConnection from "./utilities/socketConnection";

const Home = () => <h1>Home Page</h1>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/join-video" Component={MainVideoPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
