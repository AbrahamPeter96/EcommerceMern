import "./App.css";
import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <main className="my-3">
          <Container>
            <h1>Ecommerce App</h1>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
