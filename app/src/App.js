import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./main/Main"
import Register from './register/register';
import Homepage from './homepage/homepage';
import Card from './card/Card';
import AddForm from './add/form';
import Loading from './loading/loading';
import PageNotFound from './error/error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/homepage/:name" element={<Card />} />
          <Route path='/homepage/:name/:id' element={<Card />} />
          <Route path="/signin" element={<Register />} />
          <Route path="/add-pokemon" element={<AddForm />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
