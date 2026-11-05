import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
import ProjetoDetalhes from './pages/ProjetoDetalhes/ProjetoDetalhes';

export default function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projeto/:id" element={<ProjetoDetalhes/>}/>
      </Routes>
    </BrowserRouter>
  )
}
