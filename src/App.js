import "./App.css";
import Header from "./components/header/Header";
import MainFrontPage from "./components/body/MainFrontPage";
import MainInfoPage from "./components/body/MainInfoPage";
import ScrollBar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

function App() {
  return (
    <ScrollBar className="app">
      <Header />
      <MainFrontPage />
      <MainInfoPage />
    </ScrollBar>
  );
}

export default App;
