import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/global";


export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      {/* <Home /> */}
    </Router>
  );
}
