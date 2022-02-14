import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import Details from './pages/Details';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
