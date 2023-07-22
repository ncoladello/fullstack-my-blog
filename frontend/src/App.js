import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LogingPage";
import CreateAccountPage from "./pages/CreateAccount";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
        <h1 className="nav-h1">My Blog</h1>
        <NavBar className="nav-bar"/>
        </header>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesListPage/>} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />             
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="*" element={<NotFoundPage />} />             
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
