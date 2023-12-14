import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
