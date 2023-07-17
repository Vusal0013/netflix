import {
  Navbar,
  Main,
  ArticleImage,
  ArticleVideo,
  FAQ,
  Footer,
} from "./components";

import "./sassStyle/app.scss";
import "./sassStyle/index.scss";

function App() {
  return (
    <div className="margin padding width">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
