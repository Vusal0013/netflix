import { Main } from "./components";
import MainPage from "./pages/mainPage/MainPage";
// import MainPageRu from "./pages/mainPage/MainPageRu";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./i18n";
// import "./sassStyle/app.scss";
import "./sassStyle/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/ru" element={<MainPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
