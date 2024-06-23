import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Login from "./components/Login";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="main" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
