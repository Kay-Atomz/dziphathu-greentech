import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import HashaMulilo from './pages/HashaMulilo';
import Contact from './pages/Contact';
import Book from './pages/Book';
import Donations from './pages/Donations';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="hasha-mulilo" element={<HashaMulilo />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book" element={<Book />} />
          <Route path="donations" element={<Donations />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
