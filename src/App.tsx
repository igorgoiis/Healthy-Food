
import Header from "./components/Header";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/global";


export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
}
