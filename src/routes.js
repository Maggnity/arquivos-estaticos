import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/cadapio' element={<Cardapio />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;