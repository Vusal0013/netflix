import { Main } from "./components";
import MainPage from "./pages/mainPage/MainPage";
// import MainPageRu from "./pages/mainPage/MainPageRu";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./i18n";
// import "./sassStyle/app.scss";
import "./sassStyle/index.scss";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
