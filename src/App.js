import { Route, Routes } from "react-router-dom";

import "./style.scss";

import Header from "./components/layout/Header.js";

import Products from "./components/pages/Products.js";
import Product from "./components/pages/Product.js";
import Blog from "./components/pages/Blog.js";
import BlogPage from "./components/pages/BlogPage.js";
import About from "./components/pages/About.js";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="routes">
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/product/:title" element={<Product />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/:id" element={<BlogPage />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
