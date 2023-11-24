import "./styles/App.css";
import Home from "./Home";
import MainBar from "./ui/MainBar";
import Sidebar from "./ui/SideBar";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <MainBar />
      <Home />
    </div>
  );
}

export default App;
