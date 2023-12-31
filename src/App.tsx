// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Context
import UserProvider from "./context";
// Styles
import { GlobalStyle } from "./GlobalStyle";



const App: React.FC = () => (
  <BrowserRouter>
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </BrowserRouter>
);

export default App;
